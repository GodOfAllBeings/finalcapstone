import './Navbar.css';
import React from 'react';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <img className="navbar-logo" src={logo}/>
      <ul className='navbar-list'>
        <li className='navbar-item'><Link to="/">Home</Link></li>
        <li className='navbar-item'><Link to="/About">About</Link></li>
        <li className='navbar-item'><Link to="/Menu">Menu</Link></li>
        <li className='navbar-item'><Link to="/Reservations">Reservations</Link></li>
        <li className='navbar-item'><Link to="/OrderOnline">Order online</Link></li>
        <li className='navbar-item'><Link to="/LoginPage">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
