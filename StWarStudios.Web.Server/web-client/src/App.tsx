import React from 'react';
import './App.css';
import 'reset-css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/homepage';
import NavBar from './Components/navbar';
import TermsConditions from './Components/footer/terms-conditions';
// import ContactComponent from './Components/Contact';
// import Services from './Components/Services';
// import Portafolio from './Components/Portafolio';
import Footer from './Footer';  
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <>
    <NavBar /> 
      <div className='App'>
      <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/Services" element={<Services />} />
            <Route path="/Portafolio" element={<Portafolio />} />
            <Route path="/Contact" element={<ContactComponent />} /> */}     
          <Route path="/terms-conditions" element={<TermsConditions />} /> 
          </Routes>    
      </div>
      <Footer />     
    </>
  );
}

export default App;
