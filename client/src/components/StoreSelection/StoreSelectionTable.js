import React, { Component } from 'react';
import axios from 'axios';

import StoreSelectionInputBar from './StoreSelectionInputBar';

import Store from './Store';

class StoreSelectionTable extends Component {
  constructor (props) {
    super(props);

    this.state = {
      location: '',
      distance: '',
      stores: []
    };

    this.handleDistanceChange = this.handleDistanceChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  componentDidMount () {
    return axios({
      method: 'get',
      url: 'http://localhost:5000/api/stores/42343/10'
    }).then(results => {
      this.setState({ stores: results.data });
    });
  }

  handleLocationChange (location) {
    this.setState({
      location
    });
  }

  handleDistanceChange (distance) {
    this.setState({
      distance
    });
  }

  render () {
    return (
      <div>
        <div className='header'>Stores</div>
        <StoreSelectionInputBar
          location={this.state.location}
          distance={this.state.distance}
          onLocationInputChange={this.handleLocationChange}
          onDistanceInputChange={this.handleDistanceChange}
        />
        <ul>
          {this.state.stores
            ? this.state.stores.map((store, index) =>
              <Store key={index} store={store} />
              )
            : null}
        </ul>
      </div>
    );
  }
}

export default StoreSelectionTable;
