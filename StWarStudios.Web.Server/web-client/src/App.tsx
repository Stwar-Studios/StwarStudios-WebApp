import React from 'react';
import './App.css';
import 'reset-css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/homepage';
import NavBar from './Components/navbar';
import Contact from './Components/Contact';
import Services from './Components/Services';
// import Portafolio from './Components/Portafolio';
import Footer from './Footer'; 
import AboutUs from './Components/about-us';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} /> 
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
