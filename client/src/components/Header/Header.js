import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Header Component</h1>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/select-store" className="link">
        Select Store
      </Link>
    </div>
  );
};

export default Header;
