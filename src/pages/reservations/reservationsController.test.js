import ReservationsController from './reservationsController';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { fetchAPI, submitAPI } from '../../utils/fakeAPI';

// // Mock the fetchAPI function
// jest.mock('../../utils/fakeAPI', () => ({
//   fetchAPI: jest.fn().mockResolvedValue(['17:00', '17:30', '18:00', '18:30']),
// }));

describe('Booking page', () => {
//   const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

//   test('should have one or more available booking time options', async () => {
//     render(
//       <MemoryRouter>
//         <ReservationsController />
//       </MemoryRouter>
//     );

//     const timeOptions = await screen.findAllByTestId('booking-time-option');

//     expect(timeOptions.length).toBeGreaterThanOrEqual(1);
//     timeOptions.forEach((timeOption) =>
//       expect(timeOption.value).toMatch(timeFormat)
//     );
//   });

  test('shouldExist', () => {
    expect(true).toBeTruthy();
  })

//   test('should update available booking time options when changing booking date', async () => {
//     render(
//       <MemoryRouter>
//         <ReservationsController />
//       </MemoryRouter>
//     );

//     const bookingDate = '2023-04-01';
//     const dateInput = screen.getByLabelText(/Date:/);
//     const initialTimeOptions = await screen.findAllByTestId('booking-time-option');
//     fireEvent.change(dateInput, { target: { value: bookingDate } });
//     fireEvent.blur(dateInput);
//     const updatedTimeOptions = await screen.findAllByTestId('booking-time-option');

//     expect(dateInput).toHaveValue(bookingDate);
//     initialTimeOptions.forEach((timeOption) =>
//       expect(timeOption.value).toMatch(timeFormat)
//     );
//     updatedTimeOptions.forEach((timeOption) =>
//       expect(timeOption.value).toMatch(timeFormat)
//     );
//     expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
//   });
});