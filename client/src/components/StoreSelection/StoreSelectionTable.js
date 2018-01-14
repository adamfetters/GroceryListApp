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
      selected: false,
    };

    this.handleDistanceChange = this.handleDistanceChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.getStores = this.getStores.bind(this);
    this.toggleSelected = this.toggleSelected.bind(this);
  }

  handleLocationChange(location) {
    this.setState({
      location,
    });
  }

  handleDistanceChange(distance) {
    this.setState({
      distance,
    });
  }

  toggleSelected() {
    alert('clicked');
    this.setState({
      selected: !this.state.selected,
    });
  }

  getStores() {
    const { location, distance } = this.state;
    return axios({
      method: 'get',
      url: `http://localhost:5000/api/stores/${location}/${distance}`,
    }).then(results => {
      this.setState({ stores: results.data });
    });
  }

  render() {
    return (
      <div>
        <div className="header">Stores</div>
        <StoreSelectionInputBar
          location={this.state.location}
          distance={this.state.distance}
          onLocationInputChange={this.handleLocationChange}
          onDistanceInputChange={this.handleDistanceChange}
          onSubmit={this.getStores}
        />

        <ul>
          {this.state.stores
            ? this.state.stores.map((store, index) => (
                <Store key={index} index={index} store={store} toggleSelect={this.toggleSelected} />
              ))
            : null}
        </ul>
      </div>
    );
  }
}

export default StoreSelectionTable;
