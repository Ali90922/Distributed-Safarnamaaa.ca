// Navbar.js

import React from 'react';
import './App.css'; // Import the CSS file
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <header>
      <div className="row">
        <ul className="main-nav">

          <Link to="/">
            <li><a href="">Home.</a></li>
          </Link>

          <Link to="/scheme">
            <li className="nangma-link"><a href="">Nangma.</a></li>
          </Link>



        </ul>
        <h1>Ali's سفرنامہ </h1>
      </div>
    </header>
  );
};

export default Navbar;
