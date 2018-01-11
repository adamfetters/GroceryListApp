import React, { Component } from 'react';
import axios from 'axios';

import StoreSelectionInputBar from './StoreSelectionInputBar';
import Store from './Store';

class StoreSelectionTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      distance: '',
      stores: [],
    };

    // this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/stores/45331/10')
      .then(response => {
        this.setState({ stores: response.data });
        console.log('recieved stores');
      })
      .catch(error => {
        console.log('An error has occured', error);
      });
  }

  render() {
    return (
      <div className="header">
        <h2>Store Selection</h2>
        <ul>
          {this.state.stores.map((store, index) => <Store key={index} store={store})}
        </ul>
      </div>
    );
  }
}

export default StoreSelectionTable;
