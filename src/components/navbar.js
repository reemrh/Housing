import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <div className="navbar">
      <p>Housing</p>
      <div className="nav-list">
        <ul>
          <li>About us</li>
          <li>Our works</li>
          <li>Blog</li>
          <li>contact</li>
        </ul>
        <div>
          <span>|</span>
          <pre>    +1 853 93178 52</pre>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
