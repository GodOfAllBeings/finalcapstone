import './Card.css';
import React from 'react';

function Card(props) {
    const {title, price, description} = props;
  return (
    <div>
        <img src='https://content.codecademy.com/courses/React/react_photo-goose.jpg' alt='goose' />
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <p>Order a delivery</p>
    </div>
  );
}

export default Card;
