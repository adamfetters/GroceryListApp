import React, { Component } from 'react';

class StoreSelectionTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      distance: '',
      stores: [],
    };

    this.submit = this.submit.bind(this);
  }

  render() {
    return (
      <div>
        <h2>Store Selection</h2>
      </div>
    );
  }
}

export default StoreSelectionTable;
