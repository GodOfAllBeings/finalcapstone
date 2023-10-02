import './Hero.css';
import React from 'react';
import bruchetta from '../assets/bruchetta.svg';

function Hero() {
  return (
    <section className='Section-hero'>
      <div className='background-color'/>
      <div className='hero-div'>
        <h2 className='hero-header'>Little Lemon</h2>
        <h3 className='hero-subheader'>Chicago</h3>
        <p className='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>Reserve a table</button>
      </div>
      <img className='hero-image' src={bruchetta}/>
    </section>
  );
}

export default Hero;
