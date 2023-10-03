import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Reservations from './reservations';
import { MemoryRouter } from 'react-router-dom';

describe('Booking form', () => {
  test('shouldExist', () => {
    expect(true).toBeTruthy();
  });

  test('should render the Date field', () => {
    render(<MemoryRouter>
        <Reservations />
      </MemoryRouter>);
    const dateLabel = screen.getByLabelText('Date:');

    expect(dateLabel).toBeInTheDocument();
  });

  test('should render the Booking Time field', () => {
    render(<MemoryRouter>
        <Reservations />
      </MemoryRouter>);
    const bookingTimeLabel = screen.getByLabelText('Booking Time:');
    const bookingTimeSelect = screen.queryByTestId('booking-time');

    expect(bookingTimeLabel).toBeInTheDocument();
    expect(bookingTimeSelect).toBeInTheDocument();
  });

  test('should render the Name field', () => {
    render(<MemoryRouter>
        <Reservations />
      </MemoryRouter>);
    const nameLabel = screen.getByLabelText('Name:');
    const nameInput = screen.queryByTestId('name-input');

    expect(nameLabel).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
  });

  test('should render the Phone Number field', () => {
    render(<MemoryRouter>
        <Reservations />
      </MemoryRouter>);
    const phoneNumberLabel = screen.getByLabelText('Phone Number:');
    const phoneNumberInput = screen.queryByTestId('phone-input');

    expect(phoneNumberLabel).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();
  });

  test('should render the Number of Guests field', () => {
    render(<MemoryRouter>
        <Reservations />
      </MemoryRouter>);
    const guestsLabel = screen.getByLabelText('Number of Guests:');
    const guestsInput = screen.queryByTestId('guests-input');

    expect(guestsLabel).toBeInTheDocument();
    expect(guestsInput).toBeInTheDocument();
  });

  test('should render the Occasion field', () => {
    render(<MemoryRouter>
        <Reservations />
      </MemoryRouter>);
    const occasionLabel = screen.getByLabelText('Occasion:');
    const occasionSelect = screen.queryByTestId('booking-occasion-input');

    expect(occasionLabel).toBeInTheDocument();
    expect(occasionSelect).toBeInTheDocument();
  });

  test('should have type "tel" for Phone Number field', () => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );
    const phoneInput = screen.getByTestId('phone-input');
    expect(phoneInput).toHaveAttribute('type', 'tel');
  });

  test('should have a minimum value of 1 for Number of Guests field', () => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );
    const guestsInput = screen.getByTestId('guests-input');
    expect(guestsInput).toHaveAttribute('min', '1');
  });

  test('should have required attribute for Number of Guests field', () => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );
    const guestsInput = screen.getByTestId('guests-input');
    expect(guestsInput).toHaveAttribute('required');
  });

  test('should have required attribute for Occasion field', () => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );
    const occasionSelect = screen.getByTestId('booking-occasion-input');
    expect(occasionSelect).toHaveAttribute('required');
  });

  test('should validate a valid phone number', () => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );

    function isValidPhoneNumber(phoneNumber) {
        const phoneRegex = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
        return phoneRegex.test(phoneNumber);
    }

    const phoneInput = screen.getByTestId('phone-input');
    fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
    expect(isValidPhoneNumber(phoneInput.value)).toBe(true);
  });

  test('should validate an invalid phone number', () => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );

    function isValidPhoneNumber(phoneNumber) {
        const phoneRegex = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
        return phoneRegex.test(phoneNumber);
    }
    const phoneInput = screen.getByTestId('phone-input');
    fireEvent.change(phoneInput, { target: { value: 'invalid-phone' } });
    expect(isValidPhoneNumber(phoneInput.value)).toBe(false);
  });
});