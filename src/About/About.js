import './About.css';
import React from 'react';
import lemonDessert from '../assets/lemon dessert.jpg';
import greekSalad from '../assets/greek salad.jpg'

function About() {
  return (
    <section className='Section-about'>
        <div className='About-text'>
            <h1 className='About-title'>Little lemon</h1>
            <h2 className='About-subheader'>Chicago</h2>
            <p className='About-description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </div>
        <div className='About-images'>
            <img className='AboutImg AboutImg1' src={lemonDessert}/>
            <img className='AboutImg AboutImg2' src={greekSalad}/>
        </div>
    </section>
  );
}

export default About;
