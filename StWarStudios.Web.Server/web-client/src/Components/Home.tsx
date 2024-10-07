import './home.css';
import * as React from 'react'
//import Services from './Services';




const Home = () => {
    
    return (
        <div>
        {/* Sección 1: Video de fondo */}
        <section className="video-section">
          <video autoPlay muted loop>
            <source src="images/hologram_1.mp4" type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>
          <div className="video-overlay"></div>
          <div className='video-text'>
          <div className="video-text row d-flex w-100">
                <span className='home-title row d-flex justify-content-center text-lg'>Avanza al futuro tecnol&oacute;gico </span>
                <span className='home-sub-title mt-4 row d-flex justify-content-center text-break'>Empodera tu negocio con las mejores e innovadoras soluciones tecnol&oacute;gicas</span>            
             
          </div>
          <div className='video-text d-flex align-text-bottom w-100'>
                <span className='btn btn-lg btn-primary '>Contactanos!</span>
            </div>
          </div>
          
        </section>
  
        {/* Sección 2: Servicios */}
        <section className="services-section text-center">
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
        
    )
  };

export default Home;