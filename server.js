const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyC - laRFAGMaQhGGH8Mb0qTt71rAlVjqSDk'
});

const User = require('./api/Users/UserModel');

const server = express();

server.use(bodyparser.json());

const allowedClients = {
  origin: 'http://localhost:3000'
};

server.use(cors());

const port = process.env.PORT || 5000;

server.get('/api/stores/:zip/:distance', (req, res) => {
  const zip = req.params.zip;
  const distance = Number(req.params.distance) * 1609.34;
  console.log(`distance in meters: ${distance}`);
  console.log('Google API called');

  googleMapsClient.places(
    {
      query: `grocery in ${zip}`,
      radius: distance,
      type: 'grocery'
    },
    function (err, response) {
      if (!err) {
        const storeResults = response.json.results;
        res.status(200).json(storeResults);
      }
    }
  );
});

server.post('/users', (req, res) => {
  const userInfo = req.body;
  const { userName, firstName, lastName } = req.body;
  if (!userName || !firstName || !lastName) {
    res.status(400).json({ error: 'Please fill in all information' });
  } else {
    const user = new User(userInfo);

    user
      .save()
      .then(newUser => {
        res.status(201).json(newUser);
      })
      .catch(error => {
        res.status(500).json({
          message: 'There was an error while saving user to the database',
          error
        });
      });
  }
});

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost/users', { useMongoClient: true })
  .then(() => {
    console.log('Database connected');
  })
  .catch(error => {
    console.log('Database connection failed');
  });

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
