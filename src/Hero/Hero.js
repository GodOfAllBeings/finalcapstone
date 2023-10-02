import './Hero.css';
import React from 'react';
import bruchetta from '../assets/bruchetta.svg';

function Hero() {
  return (
    <section className='Section-hero'>
      <h2>Little Lemon</h2>
      <h3>Chicago</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button>Reserve a table</button>
      <img src={bruchetta}/>
    </section>
  );
}

export default Hero;
