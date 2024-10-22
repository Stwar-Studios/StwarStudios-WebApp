import './services-section.css';
import Button from 'react-bootstrap/Button';
import { Element } from 'react-scroll';


function ServicesSection(){  
  return <>  
<Element name="services" className="services-section" >
        <div className="">
          <h2 className="mb-5"><strong>Nuestros Servicios</strong></h2>
          <div className="services-container">
              <div className="service-card shadow-lg shadow-blue">
                  <div className="service-card-content">
                  <img src="/images/keys.png" alt="soluciones" className="service-icon" />
                  <div className='service-title'>
                    <h3 className="">Soluciones <br/>Personalizadas</h3>                   
                    <img src="/images/line blue.png" alt="LineBlue" className='img-underline' />
                  </div>
                 
                        <p className="">Creación de software conforme a tus necesidades, digitalización de tus procesos para transformar tu negocio, incluyendo automatización de tareas manuales, y más.</p>  
                          <a className="service-btn btn-blue">Más Información</a> {/* Button Blue */}
                  </div>
            </div>
              <div className="service-card shadow-lg shadow-purple">
                  <div className="service-card-content  ">                  
                  <img src="/images/cloud1.png" alt="integracion" className="service-icon" />
                  <div className='service-title'>
                    <h3 className="">Integración con <br /> Nuevas Tecnologías</h3>    
                    <img src="/images/line purple.png" alt="LinePurple" className='img-underline' />
                  </div>
                        <p className="">Implementación y adaptación de tecnologías emergentes para modernizar tus sistemas existentes así como migración a la nube para escalamiento y mejora de la eficiencia operativa.</p>
                          <a className="service-btn btn-purple">Más Información</a> {/* Button Purple */}
              </div>
              </div>
            </div>
        </div>
      </Element>
 </>;
}
export default ServicesSection;