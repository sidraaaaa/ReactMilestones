import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke' Times</a>
        <ul className="right">
          <li><Link to="/">Home</Link>
          <li><Link to="/about">About</Link>
          <li><Link to="/contact">Contact</Link>
        </ul>
      </div>
    </nav> 
  )
}
export default Navbar
