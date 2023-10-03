import './App.css';
import React, {useState, useReducer, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/about/about';
import Home from './pages/home/home';
import LoginPage from './pages/login/login';
import Menu from './pages/menu/menu';
// import Reservations from './pages/reservations/reservations';
import ReservationsController from './pages/reservations/reservationsController';
import OrderOnline from './pages/orderOnline/orderOnline';
import ConfirmedBooking from './pages/reservations/ConfirmBooking';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="About" element={<AboutPage />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="Menu" element={<Menu />} />
          <Route
            path="Reservations"
            element={
              <ReservationsController/>
            }
          />
          <Route path="OrderOnline" element={<OrderOnline />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
