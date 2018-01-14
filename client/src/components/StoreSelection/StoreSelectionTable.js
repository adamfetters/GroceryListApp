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

  toggleSelected(index) {
    const currentStores = this.state.stores;
    const currentSelectedState = currentStores[index].selected;
    console.log(currentSelectedState);
    const newSelectedState = !currentSelectedState;
    console.log(newSelectedState);
    currentStores[index].selected = newSelectedState;
    this.setState({
      stores: currentStores,
    });
  }

  getStores() {
    const { location, distance } = this.state;

    return axios({
      method: 'get',
      url: `http://localhost:5000/api/stores/${location}/${distance}`,
    }).then(results => {
      results.data.forEach(element => {
        element.selected = false;
      });
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
        <div>
          <ul>
            {this.state.stores
              ? this.state.stores.map((store, index) => (
                  <Store key={index} index={index} store={store} onToggleSelect={this.toggleSelected} />
                ))
              : null}
          </ul>
        </div>
      </div>
    );
  }
}

export default StoreSelectionTable;
