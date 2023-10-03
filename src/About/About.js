import './About.css';
import React from 'react';
import lemonDessert from '../assets/lemon dessert.jpg';
import greekSalad from '../assets/greek salad.jpg';

function About() {
  return (
    <section className='about-section'>
      <div className='about-text'>
        <h1 className='about-title'>Little Lemon</h1>
        <h2 className='about-subheader'>Chicago</h2>
        <p className='about-description'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className='about-images'>
        <img className='about-img about-img1' src={lemonDessert} alt='Lemon Dessert' />
        <img className='about-img about-img2' src={greekSalad} alt='Greek Salad' />
      </div>
    </section>
  );
}

export default About;