import React from 'react';
import Button from 'react-bootstrap/Button';
import './homepage.css';

const HomePage = () => {
  return (
    <div>
      {/* Sección del video */}
      <section className="video-section">
        <video autoPlay muted loop>
          <source src="images/hologram_1.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
        <div className="video-overlay"></div>
        <div className="video-text">
          <span className="home-title">Avanza al futuro tecnológico</span>
          <span className="home-sub-title">Empodera tu negocio con las mejores soluciones tecnológicas</span>
          <div className="video-button">
            <Button className="custom-button">¡Contáctanos!</Button>
          </div>
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

export default HomePage;
