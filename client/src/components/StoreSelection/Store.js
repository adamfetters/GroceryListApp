import React from 'react';

const Store = props => {
  const stores = props.stores;
  const storeList = stores.map(store => <li key={store}>{store}</li>);
  return <ul>{storeList}</ul>;
};

export default Store;
