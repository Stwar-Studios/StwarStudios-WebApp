// App.tsx
import React from 'react';
import './App.css';
import 'reset-css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/homepage';
import NavBar from './Components/navbar';
// import ContactComponent from './Components/Contact';
// import Services from './Components/Services';
// import Portafolio from './Components/Portafolio';
import Footer from './Footer'; 
import AboutUs from './Components/about-us'; // Importar el componente AboutUs
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Aquí agregamos una ruta para AboutUs */}
          <Route path="/about-us" element={<AboutUs />} /> {/* Ruta para AboutUs */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
