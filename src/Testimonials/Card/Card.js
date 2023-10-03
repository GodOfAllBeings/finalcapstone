import './Card.css';
import React from 'react';
import { FaStar } from 'react-icons/fa';

function Card(props) {
  const { name, reviewText, img, starRating } = props;
  return (
    <div className='testimonial-card'>
      <p className='testimonial-card-rating'>Rating</p>
      <div className='testimonial-card-center'>
        <img className='testimonial-card-img' src={img} alt={`${name}'s profile`} />
        <p className='testimonial-card-name'>{name}</p>
      </div>
      <div className='testimonial-card-bottom-section'>
        <div className='testimonial-card-stars'>
          <p>{starRating}</p>
          <FaStar />
        </div>
        <p className='testimonial-card-review'>{reviewText}</p>
      </div>
    </div>
  );
}

export default Card;