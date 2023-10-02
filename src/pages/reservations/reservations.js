import React, {useState} from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './reservations.css';
import { Link } from 'react-router-dom'; // Import Link for navigation
import DatePicker from 'react-datepicker'; // Example date picker library
import 'react-datepicker/dist/react-datepicker.css'; // Import date picker CSS
import TimePicker from 'react-time-picker'; // Example time picker library
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

function Reservations() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reservation submission, e.g., send data to the server
    console.log('Reservation submitted:', { selectedDate, selectedTime, name, phoneNumber });
  };

  return (
    <>
      <Navbar />
      <div className="reservation-page" >
        <h2 >Table Reservation</h2>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select a date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="hours">Select time: H</label>
            <input
              type="text"
              id="hours"
              name="hours"
              value={selectedTime.split(':')[0]}
              onChange={(e) => setSelectedTime(`${e.target.value}:${selectedTime.split(':')[1]}`)}
              className="time-input"
              placeholder="HH"
              maxLength="2"
            />
            <label htmlFor="minutes">M</label>
            <input
              type="text"
              id="minutes"
              name="minutes"
              value={selectedTime.split(':')[1]}
              onChange={(e) => setSelectedTime(`${selectedTime.split(':')[0]}:${e.target.value}`)}
              className="time-input"
              placeholder="MM"
              maxLength="2"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name" >Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber" >Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button" >
            Reserve Table
          </button>
        </form>
        <p>
          Already have an account? <Link to="/LoginPage">Login</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Reservations;