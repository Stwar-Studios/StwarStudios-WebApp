import './homepage.css';
import React from 'react';
import { Tooltip } from 'react-tooltip'
import Button from 'react-bootstrap/Button';
import { Element, scroller } from 'react-scroll';
import { FaDatabase, FaLaptop, FaRegHeart, FaShieldAlt, FaRegHandshake, 
  FaHourglassHalf 
  } from 'react-icons/fa';
import { SiMicrosoftazure, SiDotnet, SiBlazor, SiAngular, SiReact,  
  } from 'react-icons/si';

const scrollToSection = (section : string) => {
  scroller.scrollTo(section, {
    duration: 500,
    delay: 0,
    smooth: 'easeIn'
  });
};
const iconSize = 76; // Variable para el tamaño del icono
const floatTooltip = true; // Variable para el atributo float
const valuesIconSize = 75;
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
            <Button variant='outline-primary' className="stw-btn-primary" onClick={() =>scrollToSection('services')} >M&aacute;s informaci&oacute;n</Button>
          </div>
        </div>
      </section>

      {/* Sección de servicios */}
      
      <Element name="services" className="services-section" >
        <div className="container">
          <h2 className="mb-5"><strong>Nuestros Servicios</strong></h2>
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
          <h1>Nuestro stack tecnol&oacute;gico</h1>
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
        <Element name="company-desc" className="company-desc text-dark m-4 p-4" > 
        <div className="container p-3">
        <h2 className='mb-5'>M&aacute;s que una soluci&oacute;n, un aliado</h2>
        <div className='desc-content'>
          El exito de tu negocio es nuestra mayor prioridad, por eso queremos queremes ser tu aliado
          estratégico, ajustándonos a tus necesidades específicas. Trabajamos contigo para entender 
          tus desafíos únicos y ofrecerte el apoyo necesario para superarlos. Con nuestra colaboración cercana, 
          potenciamos tu crecimiento y optimizamos tus procesos. Juntos, alcanzamos tus objetivos.
        </div>
        </div>
        </Element>
        <Element name="us-desc" className="us-desc text-dark p-2" > 
        <div className="container m-5 p-5">
          <div className='row container p-5'>
            <div className='col-6'>
              <div className='us'>
                <h1 className='mb-5'><strong>Nosotros</strong></h1>
                <img src="/images/line purple.png" className='us-img' alt="LinePurple" />
              </div>
              <div className='us-content'>
                Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat 
                ullamco ullamco et. Aliqua tempor do consectetur reprehenderit Lorem aliqua commodo 
                occaecat deserunt. Do eiusmod incididunt
              </div>
            </div>
            <div className='col-6 d-flex align-items-center justify-content-center'>
              <FaLaptop size={200} color="#3f3f3f" />
            </div>
          </div>        
        </div>
        </Element>
        <Element name="values-desc" className="values-desc text-dark p-2" > 
        <div className="container m-5 p-5">
          <h1 className='mb-5'><strong>Nuestros valores</strong></h1>
          <div className='desc-content row'>
            <div className='col values-item'>            
              <FaShieldAlt className='img' size={valuesIconSize} color="#6D31ED" title="Integridad" />
              <h2><strong>Integridad</strong></h2>            
              <div className='value-body'>
                transparentes. Somos responsables y éticos en nuestras acciones, servicios y productos
              </div>
            </div>
            <div className='col values-item'>         
                <FaRegHeart className='img' size={valuesIconSize} color="#f04cc4" title="Disciplina" />
                <h2><strong>Pasi&oacute;n</strong></h2>
              <div className='value-body'>
                Dejamos nuestro corazón en cada tarea. Nos emocionan los códigos, el diseño y la planeación
              </div>
            </div>
            <div className='col values-item'>
              <FaHourglassHalf className='img' size={valuesIconSize} color="#f9623e" title="Corazón Candado" />
              <h2><strong>Disciplina</strong></h2>
              <div className='value-body'>
                Somos constantes, puntuales, enfocados y organizados en nuestras actividades.
              </div>
            </div>
            <div className='col values-item'>
              <FaRegHandshake className='img' size={valuesIconSize} color="#3787cf" title="Colaboración" />   
              <h2><strong>Compromiso</strong></h2>
              <div className='value-body'>
                Damos el todo por el todo de manera voluntaria y apasionada.
              </div>
            </div>
          </div>   
        </div>
        </Element>
    </div>
  );
};

export default HomePage;
