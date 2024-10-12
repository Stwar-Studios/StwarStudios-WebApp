import React from 'react';
import Button from 'react-bootstrap/Button';
import './homepage.css';

const HomePage = () => {
  return (
    <div>
      {/* Sección del video */}
      <section className="video-section">
        <video autoPlay muted loop>
          <source src="/images/hologram_1.mp4" type="video/mp4" />
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
                <img src="/images/keys.png" alt="soluciones" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Soluciones <br /> Personalizadas</h5>
                  <img src="/images/line blue.png" alt="LineBlue" style={{ width: '70%', height: 'auto', display: 'block', margin: '10px auto' }} />
                  <p className="card-text">Creación de software conforme a tus necesidades, digitalización de tus procesos para transformar tu negocio, incluyendo automatización de tareas manuales, y más.</p>
                  <br />
                  <Button variant="primary" className="btn-blue w-100 mt-4">Más Información</Button> {/* Botón azul */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card p-3 shadow-sm">
                <img src="/images/cloud1.png" alt="integracion" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Integración con <br /> Nuevas Tecnologías</h5>
                  <img src="/images/line purple.png" alt="LinePurple" style={{ width: '70%', height: 'auto', display: 'block', margin: '10px auto' }} />
                  <p className="card-text">Implementación y adaptación de tecnologías emergentes para modernizar tus sistemas existentes así como migración a la nube para escalamiento y mejora de la eficiencia operativa.</p>
                  <Button className="btn-purple w-100 mt-4">Más Información</Button> {/* Botón morado */}
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
