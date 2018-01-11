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
    return axios({
      method: 'get',
      url: 'http://localhost:5000/api/stores/42343/10',
    }).then(results => {
      this.setState({ stores: results.data });
    });
  }

  render() {
    return (
      <div className="header">
        {this.state.stores
          ? this.state.stores.map((store, i) => (
              <div className="store" key={i}>
                <div className="store-name">
                  <b>{store.name}</b>
                </div>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default StoreSelectionTable;
