import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import StoreSelectionTable from './components/StoreSelectionTable';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/select-store" component={StoreSelectionTable} />
    </div>
  </Router>,
  document.getElementById('root')
);
