import React from 'react';
import Navbar from '../../Navbar/Navbar';
import About from '../../About/About';
import Footer from '../../Footer/Footer';

function AboutPage() {
  return (
    <div style={{ height: '100vh', position: "relative"}} >
        <Navbar/>

        <About/>

        <Footer/>
    </div>
  );
}

export default AboutPage;
