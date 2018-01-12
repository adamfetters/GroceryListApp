import React, { Component } from 'react';

import './storeSelectionInputBar.css';

class StoreSelectionInputBar extends Component {
  constructor (props) {
    super(props);

    this.handleLocationInputChange = this.handleLocationInputChange.bind(this);
    this.handleDistanceInputChange = this.handleDistanceInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleLocationInputChange (e) {
    this.props.onLocationInputChange(e.target.value);
  }

  handleDistanceInputChange (e) {
    this.props.onDistanceInputChange(e.target.value);
  }

  onSubmit (e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  render () {
    return (
      <form className='input' onSubmit={this.onSubmit}>
        <input
          type='text'
          placeholder='location'
          value={this.props.location}
          onChange={this.handleLocationInputChange}
        />

        <input
          type='text'
          placeholder='radius (max: 30 Miles)'
          value={this.props.distance}
          onChange={this.handleDistanceInputChange}
        />
        <p>
          <input type='submit' value='submit' />
        </p>
      </form>
    );
  }
}

export default StoreSelectionInputBar;
