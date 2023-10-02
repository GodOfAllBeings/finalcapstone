import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/about/about';
import Home from './pages/home/home';
import LoginPage from './pages/login/login';
import Menu from './pages/menu/menu';
import Reservations from './pages/reservations/reservations';
import OrderOnline from './pages/orderOnline/orderOnline';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="About" element={<AboutPage />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Reservations" element={<Reservations />} />
          <Route path="OrderOnline" element={<OrderOnline />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
