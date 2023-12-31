import './Highlights.css';
import React from 'react';
import Card from './Card/Card';
import bruchetta from '../assets/bruchetta.svg';
import greekSalad from '../assets/greek salad.jpg';
import lemonDessert from '../assets/lemon dessert.jpg';
import { useNavigate } from "react-router-dom";


function Highlights() {
  const navigate = useNavigate();

  const highlights = [
    {
      title: "Greek salad", price: 12.99, description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", img: greekSalad,
    },
    {
      title: "Bruchetta", price: 5.99, description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ", img: bruchetta,
    },
    {
      title: "Lemon Dessert", price: 5.00, description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.", img: lemonDessert,
    }
  ];

  return (
    <section className='highlights-section'>

      <div className='highlights-top-ordering'>
        <h2 className="highlights-heading">Highlights</h2>
        <div className='highlights-button-container'>
        <button onClick={() => {navigate('/Menu');}} className="highlights-button" aria-label="Online Menu">Online menu</button>
        </div>
      </div>

      <div className='highlights-div'>
        {highlights.map((highlight, index) => (
          <div className="highlights-card" key={index + highlight.title}>
            <Card title={highlight.title} price={highlight.price} description={highlight.description} img={highlight.img}/>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
