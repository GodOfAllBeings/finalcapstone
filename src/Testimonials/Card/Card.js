import './Card.css';
import React from 'react';
import {FaStar} from 'react-icons/fa6';

function Card(props) {
    const { name, reviewText, img, starRating } = props;
    return (
        <div className='T-card'>
            <p className='T-card-rating'>Rating</p>
            <div className='T-card-center'>
                <img className='T-card-img' src={img}/>
                <p className='T-card-name'>{name}</p>
            </div>
            <div className='T-card-bottom-section'>
                <div className='T-card-stars'>
                    <p>{starRating}</p><FaStar/>
                </div>
                <p className='T-card-review'>{reviewText}</p>
            </div>
        </div>
    );
}

export default Card;
