import ReservationsController from './reservationsController';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { fetchAPI, submitAPI } from '../../utils/fakeAPI';
import { act } from 'react-dom/test-utils';

describe('Booking page', () => {
  test('shouldExist', () => {
    expect(true).toBeTruthy();
  })

  const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  test('should have one or more available booking time options', async () => {
    render(
      <MemoryRouter>
        <ReservationsController />
      </MemoryRouter>
    );

    const timeOptions = await screen.findAllByTestId('booking-time-option');

    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
    timeOptions.forEach(timeOption =>
      expect(timeOption.value).toMatch(timeFormat)
    );
  });

  test('should have one or more available booking time options', async () => {
    render(
      <MemoryRouter>
        <ReservationsController />
      </MemoryRouter>
    );

    const timeOptions = await screen.findAllByTestId('booking-time-option');

    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
    timeOptions.forEach(timeOption =>
      expect(timeOption.value).toMatch(timeFormat)
    );
  });

  test('should have one or more available booking time options', async () => {
    render(
      <MemoryRouter>
        <ReservationsController />
      </MemoryRouter>
    );

    const timeOptions = await screen.findAllByTestId('booking-time-option');

    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
    timeOptions.forEach(timeOption =>
      expect(timeOption.value).toMatch(timeFormat)
    );
  });

  test('should have one or more available booking time options', async () => {
    render(
      <MemoryRouter>
        <ReservationsController />
      </MemoryRouter>
    );

    const timeOptions = await screen.findAllByTestId('booking-time-option');

    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
    timeOptions.forEach(timeOption =>
      expect(timeOption.value).toMatch(timeFormat)
    );
  });

  test('shouldExist', () => {
    expect(true).toBeTruthy();
  })

});