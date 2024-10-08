<<<<<<< HEAD
import React from 'react';
import Button from 'react-bootstrap/Button';
import './Home.css';
=======
import './home.css';
import * as React from 'react'
>>>>>>> d11dca7a1d88bb4b9d8452ec376f88ebce607d47

const Home = () => {
  return (
    <div>
      {/* Sección del video */}
      <section className="video-section">
        <video autoPlay muted loop>
          <source src="images/hologram_1.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
        <div className="video-overlay"></div>
        <div className="video-text d-flex flex-column justify-content-center align-items-center">
          <span className="home-title">Avanza al futuro tecnológico</span>
          <span className="home-sub-title mt-4">Empodera tu negocio con las mejores soluciones tecnológicas</span>
          <Button variant="light" size="lg" className="mt-4">Contáctanos!</Button>
        </div>
      </section>

      {/* Sección de servicios */}
      <section className="services-section">
        <div className="container">
          <h2 className="mb-5">Nuestros Servicios</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card service-card p-3 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Desarrollo Web</h5>
                  <p className="card-text">Creamos sitios web responsivos y funcionales a medida.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card p-3 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Modelado 3D</h5>
                  <p className="card-text">Diseños 3D para productos, arquitectura y más.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card p-3 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Animaciones 2D y 3D</h5>
                  <p className="card-text">Animaciones dinámicas para proyectos audiovisuales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

