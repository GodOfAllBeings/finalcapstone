import React, {useState} from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './reservations.css';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

function Reservations(props) {

  const {
    updateTimes,
    submitForm,
    availableTimes
  } = props;

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date: selectedDate,
      time: selectedTime,
      name,
      phoneNumber,
      numberOfGuests,
      occasion,
    };
    submitForm(formData);
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
    updateTimes(date);
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
              onChange={(date) => handleDateChange(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select a date"
            />
          </div>
          <div className="form-group">
          <select
            id="booking-time"
            name="booking-time"
            value={selectedTime}
            required={true}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            {availableTimes.map(times =>
              <option data-testid="booking-time-option" key={times}>
                {times}
              </option>
            )}
          </select>
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
          <div className="form-group">
            <label htmlFor="numberOfGuests">Number of Guests:</label>
            <input
              type="number"
              id="numberOfGuests"
              name="numberOfGuests"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              min="1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="occasion">Occasion:</label>
            <select
              className='dropdown'
              id="occasion"
              name="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option data-testid="booking-occasion-option" className='dropdown-option' value="Birthday">Birthday</option>
              <option data-testid="booking-occasion-option" className='dropdown-option' value="Anniversary">Anniversary</option>
              <option data-testid="booking-occasion-option" className='dropdown-option' value="Other">Other</option>
            </select>
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