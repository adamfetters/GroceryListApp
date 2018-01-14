import React from 'react';

import './store.css';

const Store = props => {
  const toggleSelect = (e, data) => {
    alert(data);

    // this.props.toggleSelect(e.target.value);
  };
  return (
    <div className="col-md-4">
      <li className="store-list" onClick={e => toggleSelect(e, data)}>
        {props.store.name}
        <p>{props.store.formatted_address}</p>
      </li>
    </div>
  );
};

export default Store;
