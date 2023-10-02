import './Card.css';
import React from 'react';

function Card(props) {
    const { name, reviewText } = props;
    return (
        <div>
            <p>Rating</p>
            <img/>
            <p>{name}</p>
            <p>{reviewText}</p>
        </div>
    );
}

export default Card;
