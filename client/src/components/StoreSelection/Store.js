import React from 'react';

import './store.css';

const Store = props => {
  const classStyle = props.store.selected ? 'selected' : 'not-selected';
  return (
    <div>
      <li
        className={classStyle}
        onClick={() => {
          props.onToggleSelect(props.index);
        }}
      >
        {props.store.name}
        <p>{props.store.formatted_address}</p>
      </li>
    </div>
  );
};

export default Store;
