import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './reservations.css';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Reservations(props) {
  const {
    updateTimes,
    submitForm,
    availableTimes
  } = props;

  let availableTimesNew = availableTimes;
  if (!availableTimes) {
    availableTimesNew = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  }

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const [isNameValid, setIsNameValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [isNumberOfGuestsValid, setIsNumberOfGuestsValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);

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
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    updateTimes(date);
    setIsDateValid(date !== null); // Check if date is not null
  };

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
    setIsNameValid(nameValue.trim() !== ''); // Check if name is not empty
  };

  const handlePhoneNumberChange = (e) => {
    const phoneNumberValue = e.target.value;
    setPhoneNumber(phoneNumberValue);
    setIsPhoneNumberValid(/^\d{10}$/.test(phoneNumberValue)); // Check if it's a valid phone number (10 digits)
  };

  const handleNumberOfGuestsChange = (e) => {
    const guestsValue = e.target.value;
    setNumberOfGuests(guestsValue);
    setIsNumberOfGuestsValid(parseInt(guestsValue) >= 1); // Check if number of guests is at least 1
  };

  const isFormValid = () => {
    return (
      isNameValid &&
      isPhoneNumberValid &&
      isNumberOfGuestsValid &&
      isDateValid // Include date validity in the check
    );
  };

  return (
    <>
      <Navbar />
      <div className="reservation-page">
        <h2>Table Reservation</h2>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Reservation Details</legend>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <DatePicker
                id="date"
                required={true}
                name="date"
                selected={selectedDate}
                data-testid="date-picker"
                onChange={(date) => handleDateChange(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select a date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="booking-time">Booking Time:</label>
              <select
                id="booking-time"
                name="booking-time"
                data-testid="booking-time"
                value={selectedTime}
                required={true}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                {availableTimesNew.map((times) => (
                  <option data-testid="booking-time-option" key={times}>
                    {times}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                data-testid="name-input"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => handleNameChange(e)}
              />
              {!isNameValid && (
                <span className="error">Name cannot be empty.</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                data-testid="phone-input"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => handlePhoneNumberChange(e)}
              />
              {!isPhoneNumberValid && (
                <span className="error">
                  Please enter a valid 10-digit phone number.
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="numberOfGuests">Number of Guests:</label>
              <input
                data-testid="guests-input"
                type="number"
                required={true}
                id="numberOfGuests"
                name="numberOfGuests"
                value={numberOfGuests}
                onChange={(e) => handleNumberOfGuestsChange(e)}
                min="1"
              />
              {!isNumberOfGuestsValid && (
                <span className="error">Please enter at least 1 guest.</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="occasion">Occasion:</label>
              <select
                data-testid="booking-occasion-input"
                className="dropdown"
                id="occasion"
                name="occasion"
                required={true}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option
                  data-testid="booking-occasion-option"
                  className="dropdown-option"
                  value="Birthday"
                >
                  Birthday
                </option>
                <option
                  data-testid="booking-occasion-option"
                  className="dropdown-option"
                  value="Anniversary"
                >
                  Anniversary
                </option>
                <option
                  data-testid="booking-occasion-option"
                  className="dropdown-option"
                  value="Other"
                >
                  Other
                </option>
              </select>
            </div>
          </fieldset>
          <button
            type="submit"
            className="submit-button"
            data-testid="submit-button"
            aria-label="Reserve Table"
            disabled={isFormValid()}
          >
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