import React from 'react';
import './App.css';
import 'reset-css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/homepage';
import NavBar from './Components/navbar';
import Services from './Components/Services';
import Portafolio from './Components/Portafolio';
import Footer from './Footer';  
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Portafolio" element={<Portafolio />} />
          </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
