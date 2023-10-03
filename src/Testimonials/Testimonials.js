import './Testimonials.css';
import React from 'react';
import Card from './Card/Card';
import profileOscar from '../assets/profileOscar.jpg';
import profileCarl from '../assets/profileCarl.jpg';
import profileBritney from '../assets/profileBritney.jpg';
import profileJannet from '../assets/profileJannet.jpg';

function Testimonials() {

  const testimonials = [
    {
      img: profileCarl,
      name: "Carl",
      reviewText: "Great food, great service!",
      starRating: "5/5",
    },
    {
      img: profileBritney,
      name: "Britney",
      reviewText: "Service was great, got a new favorite restaurant!",
      starRating: "4/5",
    },
    { 
      img: profileJannet,
      name: "Jannet",
      reviewText: "Will definitely come back!",
      starRating: "5/5",
    },
    {
      img: profileOscar,
      name: "Oscar",
      reviewText: "Me and my family loved it!",
      starRating: "5/5",
    }
  ];

  return (
    <section className='testimonials-section'>
        <h1>Testimonials</h1>
        <div className='testimonials-container'>
          {testimonials.map((testimonial, index) => (
            <div className="testimonials-card" key={index}>
              <Card
                name={testimonial.name}
                reviewText={testimonial.reviewText}
                img={testimonial.img}
                starRating={testimonial.starRating}
              />
            </div>
          ))}
        </div>
      </section>
  );
}

export default Testimonials;