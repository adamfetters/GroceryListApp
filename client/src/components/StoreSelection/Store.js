import React from 'react';

import './store.css';

const Store = props => {
  return (
    <li className='store-list'>
      {props.store.name}
      <p>
        {props.store.formatted_address}
      </p>
    </li>
  );
};

export default Store;
