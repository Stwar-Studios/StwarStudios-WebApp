import './about-us.css';
import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <img src="/images/girl.jpg" alt="Background" className="about-us-background-image" />
      <div className="about-us-overlay"></div> 
      <div className="about-us-title-container">
        <h1 className="about-us-main-title">Sobre Nosotros</h1>
        <h2 className="about-us-main-subtitle">Nos encanta crear cosas increíbles</h2>
        <button className="about-us-button"> ¡Vamos a trabajar juntos!</button>
      </div>
    </div>
  );
};

export default AboutUs;


