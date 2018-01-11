import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Header from './components/Header/Header';
import StoreSelectionTable from './components/StoreSelection/StoreSelectionTable';

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={App} />
      <Route path="/select-store" component={StoreSelectionTable} />
    </div>
  </Router>,
  document.getElementById('root')
);
