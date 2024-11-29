import './services.css';
import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from './home/services-section';

const Services = () => {
  const techStacks = [
    {
      id: 1,
      name: 'Blazor',
      description: 'Framework UI para la creación de aplicaciones web interactivas.',
      image: '/images/blazor1.png', 
    },
    {
      id: 2,
      name: 'Azure',
      description: 'Plataforma de servicios en la nube para despliegue y gestión de aplicaciones.',
      image: '/images/azure1.png', 
    },
    {
      id: 3,
      name: '.NET',
      description: 'Plataforma de desarrollo para aplicaciones de alta calidad.',
      image: '/images/net1.png', 
    },
    {
      id: 4,
      name: 'Node Js',
      classname: 'node1-image',
      description: 'Entorno de ejecución para construir aplicaciones rápidas y escalables.',
      image: '/images/node1.png',
    },
    {
      id: 5,
      name: 'Angular',
      description: 'Framework para aplicaciones web dinámicas y robustas.',
      image: '/images/angular1.png', 
    },
    {
      id: 6,
      name: 'MS SQL',
      description: 'Sistema de gestión de bases de datos relacional de alto rendimiento.',
      image: '/images/mysql1.png', 
    },
  ];

  return (
    <>
      <motion.div
        className="services-container"
        initial={{ opacity: -1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/images/pc.jpg"
          alt="Background"
          className="services-background-image"
        />
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
            necesidades tecnológicas de tu negocio. <br /> Desde el desarrollo personalizado de software
            hasta la integración con las últimas <br /> tecnologías, estamos aquí para ayudarte a mejorar
            y automatizar tus procesos. <br /> Nuestro equipo de expertos están comprometidos a brindar
            soluciones <br /> innovadoras y eficientes que impulsen el crecimiento y éxito de tu empresa.
          </motion.h2>
        </div>
      </motion.div>

      <ServicesSection />

      <div className="custom-services-wrapper">
        <h2 className="tech-title">Nuestro Stack Tecnológico</h2>
          <div className="tech-cards-container">
            {techStacks.map(({ id, name, description, image, classname }) => (
              <div key={id} className="tech-card">
                <div className="tech-image-container">
                  <img
                    src={image}
                    alt={name}
                    className={`tech-image ${classname || ''}`}
                  />
                </div>
              <div className="tech-text">
                <h3 className="tech-name">{name}</h3>
                  <p className="tech-description">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;

