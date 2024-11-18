import './about-us.css';
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <>
      <motion.div
        className="about-us-container"
        initial={{ opacity: -1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/images/girl.jpg" alt="Background" className="about-us-background-image" />
        <div className="about-us-overlay"></div>
        <div className="about-us-title-container">
          <motion.h1
            className="about-us-main-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            Sobre Nosotros
          </motion.h1>
          <motion.h2
            className="about-us-main-subtitle"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Nos encanta crear cosas increíbles
          </motion.h2>
          <motion.button
            className="about-us-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, delay: 1 }}
          >
            ¡Vamos a trabajar juntos!
          </motion.button>
        </div>
      </motion.div>

      <div className="about-us-extra-section">
        <div className="cards-container">
          <motion.div
            className="about-us-mission card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
          >
            <h2 className="extra-section-title">Nuestra Misión</h2>
            <img
              src="/images/line purple.png"
              alt="Nuestra misión"
              className="extra-section-image"
            />
            <p className="extra-section-text">
              Nuestra misión es transformar ideas innovadoras en soluciones tecnológicas de vanguardia, brindando servicios
              integrales de ingeniería de software, diseño gráfico y desarrollo de aplicaciones. Nos comprometemos a ofrecer
              productos y servicios de alta calidad que potencien la productividad y creatividad de nuestros clientes,
              impulsando su éxito en un mundo digital en constante evolución.
            </p>
            <img
              src="/images/vision.png"
              alt="mision"
              className="extra-section-bottom-image"
            />
          </motion.div>

          <motion.div
            className="about-us-vision card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
          >
            <h2 className="extra-section-title">Nuestra Visión</h2>
            <img
              src="/images/line blue.png"
              alt="Visión de la empresa"
              className="extra-section-image"
            />
            <p className="extra-section-text">
              Nuestra visión es ser líderes en la industria tecnológica, reconocidos por nuestra capacidad de fusionar
              creatividad y tecnología para ofrecer soluciones únicas y personalizadas. Aspiramos a crear un impacto
              positivo en la sociedad, facilitando la transformación digital de empresas y personas a través de nuestras
              innovadoras soluciones de software y diseño gráfico. Queremos ser el socio preferido de nuestros clientes,
              ayudándolos a alcanzar sus objetivos mediante la excelencia y la innovación constante.
            </p>
            <img
              src="/images/Token.png"
              alt="vision"
              className="extra-section-bottom-image"
            />
          </motion.div>
        </div>
      </div>

      <div className="carousel-section">
        <motion.div
          className="carousel-container"
        >
          <motion.div
            className="carousel"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 60,
              ease: 'linear',
            }}
          >
            <img src="/images/carrusel1.jpg" alt="Imagen 1" className="carousel-image" />
            <img src="/images/carrusel2.jpg" alt="Imagen 2" className="carousel-image" />
            <img src="/images/carrusel3.jpg" alt="Imagen 3" className="carousel-image" />
            <img src="/images/carrusel4.jpg" alt="Imagen 4" className="carousel-image" />
            <img src="/images/carrusel5.jpg" alt="Imagen 5" className="carousel-image" />
            <img src="/images/carrusel6.jpg" alt="Imagen 6" className="carousel-image" />
            <img src="/images/carrusel7.jpg" alt="Imagen 7" className="carousel-image" />
            <img src="/images/carrusel8.jpg" alt="Imagen 8" className="carousel-image" />
            <img src="/images/carrusel9.jpg" alt="Imagen 9" className="carousel-image" />
            <img src="/images/carrusel10.jpg" alt="Imagen 10" className="carousel-image" />
            
            <img src="/images/carrusel1.jpg" alt="Imagen 1" className="carousel-image" />
            <img src="/images/carrusel2.jpg" alt="Imagen 2" className="carousel-image" />
            <img src="/images/carrusel3.jpg" alt="Imagen 3" className="carousel-image" />
            <img src="/images/carrusel4.jpg" alt="Imagen 4" className="carousel-image" />
            <img src="/images/carrusel5.jpg" alt="Imagen 5" className="carousel-image" />
            <img src="/images/carrusel6.jpg" alt="Imagen 6" className="carousel-image" />
            <img src="/images/carrusel7.jpg" alt="Imagen 7" className="carousel-image" />
            <img src="/images/carrusel8.jpg" alt="Imagen 8" className="carousel-image" />
            <img src="/images/carrusel9.jpg" alt="Imagen 9" className="carousel-image" />
            <img src="/images/carrusel10.jpg" alt="Imagen 10" className="carousel-image" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;
