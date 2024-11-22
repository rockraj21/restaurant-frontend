import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isAdmin, handleLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>AL ITALIA <sup>&copy;</sup></h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        {isAdmin ? (
          <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
