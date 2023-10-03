import './Navbar.css';
import React from 'react';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar-header">
      <nav className='navbar' aria-label="Main Navigation">
        <img className="navbar-logo" src={logo} alt="Logo" />
        <ul className='navbar-list'>
          <li className='navbar-item'><Link to="/">Home</Link></li>
          <li className='navbar-item'><Link to="/About">About</Link></li>
          <li className='navbar-item'><Link to="/Menu">Menu</Link></li>
          <li className='navbar-item'><Link to="/Reservations">Reservations</Link></li>
          <li className='navbar-item'><Link to="/OrderOnline">Order online</Link></li>
          <li className='navbar-item'><Link to="/LoginPage">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
