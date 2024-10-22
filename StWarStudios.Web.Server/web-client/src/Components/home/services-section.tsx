import './services-section.css';
import Button from 'react-bootstrap/Button';
import { Element } from 'react-scroll';


function ServicesSection(){  
  return <>  
<Element name="services" className="services-section" >
        <div className="">
          <h2 className="mb-5"><strong>Nuestros Servicios</strong></h2>
          <div className="services-container">
              <div className="service-card shadow-sm">
                <img src="/images/keys.png" alt="soluciones" className="" />
                
                  <div className="service-card-content">
                  <h3 className="">Soluciones <br/>Personalizadas</h3>
                    
                      <img src="/images/line blue.png" alt="LineBlue" />
                        <p className="">Creación de software conforme a tus necesidades, digitalización de tus procesos para transformar tu negocio, incluyendo automatización de tareas manuales, y más.</p>  
                          <Button variant="primary" className="btn-blue w-100 mt-4">Más Información</Button> {/* Button Blue */}
                  </div>
            </div>
              <div className="service-card shadow-sm">
                <img src="/images/cloud1.png" alt="integracion" className="" />
                
                  <div className="service-card-content">
                  <h3 className="">Integración con <br /> Nuevas Tecnologías</h3>    
                      <img src="/images/line purple.png" alt="LinePurple" />
                        <p className="">Implementación y adaptación de tecnologías emergentes para modernizar tus sistemas existentes así como migración a la nube para escalamiento y mejora de la eficiencia operativa.</p>
                          <Button className="btn-purple w-100 mt-4">Más Información</Button> {/* Button Purple */}
              </div>
              </div>
            </div>
        </div>
      </Element>
 </>;
}
export default ServicesSection;