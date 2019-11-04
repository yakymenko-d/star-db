import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <a href="#">
          <li>People</li>
        </a>
        <a href="#">
          <li>Planets</li>
        </a>
        <a href="#">
          <li>Starships</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
