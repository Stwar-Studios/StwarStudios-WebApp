import './homepage.css';
import React from 'react';
import { Tooltip } from 'react-tooltip'
import Button from 'react-bootstrap/Button';
import { Element, scroller } from 'react-scroll';
import { FaDatabase } from 'react-icons/fa';
import { SiMicrosoftazure, SiDotnet, SiBlazor, SiAngular, SiReact  } from 'react-icons/si';

const scrollToSection = (section : string) => {
  scroller.scrollTo(section, {
    duration: 500,
    delay: 0,
    smooth: 'easeIn'
  });
};
const iconSize = 76; // Variable para el tamaño del icono
const floatTooltip = true; // Variable para el atributo float

const HomePage = () => {
  return (
    <div className='home-page'>
      {/* Sección del video */}
      <section className="video-section" >
        <video autoPlay muted loop>
          <source src="/images/hologram_1.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
        <div className="video-overlay"></div>
        <div className="video-text">
          <div></div>
          <span className="home-title">Avanza al futuro tecnológico</span>
          <span className="home-sub-title mb-4 text-wrap">Empodera tu negocio con las mejores e innovadoras soluciones tecnol&oacute;gicas</span>
          <div className="video-button">
            <Button className="stw-btn-primary" onClick={() =>scrollToSection('services')} >M&aacute;s informaci&oacute;n</Button>
          </div>
        </div>
      </section>

      {/* Sección de servicios */}
      
      <Element name="services" className="services-section" >
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
      </Element>
      <Element name="tech-stack" className="tech-stack text-white" > 
        <div className="container">
          <h1>Nuestro stack tecnológico</h1>
          <div className="icons">
            <div data-tooltip-id="blazor-tooltip" data-tooltip-content="Blazor">
              <SiBlazor className="icon blazor" size={iconSize} />
              <Tooltip float={floatTooltip} place="top" id="blazor-tooltip" />
            </div>
            <div data-tooltip-id="azure-tooltip" data-tooltip-content="Microsoft Azure">
              <SiMicrosoftazure className="icon azure" size={iconSize} />
              <Tooltip float={floatTooltip} place="top" id="azure-tooltip" />
            </div>
            <div data-tooltip-id="dotnet-tooltip" data-tooltip-content=".NET">
              <SiDotnet className="icon dotnet" size={iconSize} />
              <Tooltip float={floatTooltip} place="top" id="dotnet-tooltip" />
            </div>
            <div data-tooltip-id="react-tooltip" data-tooltip-content="React">
              <SiReact className="icon react" size={iconSize} />
              <Tooltip float={floatTooltip} place="top" id="react-tooltip" />
            </div>
            <div data-tooltip-id="angular-tooltip" data-tooltip-content="Angular">
              <SiAngular className="icon angular" size={iconSize} />
              <Tooltip float={floatTooltip} place="top" id="angular-tooltip" />
            </div>
            <div data-tooltip-id="sql-tooltip" data-tooltip-content="MS SQL / Azure SQL" className='combined-icon'>
              <div className='icon sql'>
              <FaDatabase className="" size={iconSize} />
              </div>
              <Tooltip float={floatTooltip} place="top" id="sql-tooltip" />
            </div>
          </div>
          </div>        
          </Element>
    </div>
  );
};

export default HomePage;
