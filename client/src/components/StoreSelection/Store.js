import React from 'react';

import './store.css';

const Store = props => {
  return (
    <li className='store-list'>
      {props.store.name}
    </li>
  );
};

export default Store;
