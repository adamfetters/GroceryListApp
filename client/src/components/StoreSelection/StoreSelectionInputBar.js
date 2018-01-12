import React, { Component } from 'react';

import './storeSelectionInputBar.css';

class StoreSelectionInputBar extends Component {
  constructor (props) {
    super(props);

    this.handleLocationInputChange = this.handleLocationInputChange.bind(this);
    this.handleDistanceInputChange = this.handleDistanceInputChange.bind(this);
  }

  handleLocationInputChange (e) {
    this.props.onLocationInputChange(e.target.value);
  }

  handleDistanceInputChange (e) {
    this.props.onDistanceInputChange(e.target.value);
  }

  render () {
    return (
      <form className='input'>
        <input
          type='text'
          placeholder='location'
          value={this.props.location}
          onChange={this.handleLocationInputChange}
        />

        <input
          type='text'
          placeholder='distance'
          value={this.props.distance}
          onChange={this.handleDistanceInputChange}
        />
      </form>
    );
  }
}

export default StoreSelectionInputBar;
