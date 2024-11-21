import './services.css';
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <>
     <motion.div
  className="services-container"
  initial={{ opacity: -1 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <img src="/images/pc.jpg" alt="Background" className="services-background-image" />
  <div className="services-overlay"></div>
  <div className="services-title-container">
    <motion.h1
      className="services-main-title"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      Nuestros Servicios
    </motion.h1>
    <motion.h2
      className="services-main-subtitle"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      En StWar Studios ofrecemos una variedad de servicios diseñados <br /> para satisfacer las 
      necesidades tecnológicas de tu negocio. <br /> Desde el desarollo personalizado de software 
      hasta la integración con las últimas <br /> tecnologías, estamos aquí para ayudarte a mejorar 
      y automatizar tus procesos. <br /> Nuestro equipo de expertos están comprometidos a brindar 
      soluciones <br />innovadoras y eficientes que impulsen el crecimiento y éxito de tu empresa.
    </motion.h2>
    <motion.button
      className="services-button"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.5, delay: 1 }}
    >
      ¡Empieza tu proyecto!
    </motion.button>
  </div>
</motion.div>

      </>
  );
};

export default Services;