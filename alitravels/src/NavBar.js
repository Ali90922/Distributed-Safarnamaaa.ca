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


          <li className="dropdown">
            <a href="#">Pakistan.</a>
            <div className="dropdown-content">
              <a href="#">Gilgit</a>
              <a href="#">Naran</a>
              <a href="#">Quetta</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Canada.</a>
            <div className="dropdown-content">

            <a href="/Victoria">Victoria</a>
 
              <a href="#">Manitoba</a>
              <a href="#">Quebec</a>
            </div>
          </li>
        </ul>
        <h1>Ali's سفرنامہ </h1>
      </div>
    </header>
  );
};

export default Navbar;
