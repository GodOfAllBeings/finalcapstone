import './Footer.css';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import logo from '../assets/Logo.svg';

function Footer() {
  return (
    <footer className='Section-contact'>
      <img src={logo}/>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order online</li>
        <li>Login</li>
      </ul>

      <div className='Contact-contact'>
        <h2>Contact</h2>
        <ul>
          <li>1234 Main St, Chicago, IL 60654</li>
          <li>123-456-7890</li>
          <li>Littlelemon@lemonmail.com</li>
        </ul>
      </div>

      <div className='Contact-Socialmedia'>
        <h2>Social media links</h2>
          <div className='Contact-Socialmedia-links'>
            <a href="https://facebook.com"><FaFacebook/></a>
            <a href="https://instagram.com"><FaInstagram/></a>
            <a href="https://twitter.com"><FaTwitter/></a>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
