import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Highlights from '../../Highlights/Highlights';
import Testimonials from '../../Testimonials/Testimonials';
import About from '../../About/About';
import Footer from '../../Footer/Footer';
import Hero from '../../Hero/Hero';


function Home() {
  return (
    <>
      <Navbar/>

      <Hero/>

      <Highlights/>

      <Testimonials/>

      <About/>

      <Footer/>
    </>
  );
}

export default Home;
