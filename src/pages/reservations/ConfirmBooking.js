import React from 'react';
import {FaCircleCheck} from "react-icons/fa6";
import './ConfirmBooking.css';
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <div className="container confirmed-booking">
      <a><FaCircleCheck/></a>
      <h2>Your reservation has been confirmed.</h2>
      <p>You will receive an email with all the details.</p>
        <Link to="/"><button>Back to home</button></Link>
    </div>
  );
}

export default ConfirmedBooking;