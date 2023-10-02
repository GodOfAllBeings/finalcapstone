import './Card.css';
import React from 'react';
import { GiScooter } from "react-icons/gi";


function Card(props) {
    const {title, price, description, img} = props;
  return (
    <div className='card'>
        <img className='card-img' src={img} alt='goose' />
        <div className='card-content'>
            <div className='card-content-1'>
                <h2 className='card-title'>{title}</h2>
                <p className='card-price'>${price}</p>
            </div>
            <p className='card-description'>{description}</p>
            <div className='card-content-3'>
                <p className='card-ordertext'>Order a delivery</p> <GiScooter/>
            </div>
        </div>
    </div>
  );
}

export default Card;
