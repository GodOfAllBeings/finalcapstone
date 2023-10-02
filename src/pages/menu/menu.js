import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './menu.css';
import bruchetta from '../../assets/bruchetta.svg';
import greekSalad from '../../assets/greek salad.jpg';
import lemonDessert from '../../assets/lemon dessert.jpg';
import {FaBasketShopping} from 'react-icons/fa6';
import Card from '../../Highlights/Card/Card';


function Menu() {

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
      <>
        <Navbar />
        <div className="menu-page">
          <h2>Menu</h2>
          <div className='menu-item-container'>
            {highlights.map((highlight, index) => (
              <div className="highlights-card">
              <Card key={index} title={highlight.title} price={highlight.price} description={highlight.description} img={highlight.img}/>
              </div>
            ))}
          </div>
          </div>
        <Footer />
      </>
    );
  }
export default Menu;
