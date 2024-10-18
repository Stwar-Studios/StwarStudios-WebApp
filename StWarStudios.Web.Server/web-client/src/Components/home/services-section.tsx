import Button from 'react-bootstrap/Button';
import { Element } from 'react-scroll';
function ServicesSection()
{
 return <>
<Element name="services" className="services-section" >
        <div className="container">
          <h2 className="mb-5"><strong>Nuestros Servicios</strong></h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card service-card p-3 shadow-sm">
                <img src="/images/keys.png" alt="soluciones" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Soluciones Personalizadas</h5>
                  <img src="/images/line blue.png" alt="LineBlue" style={{ width: '70%', height: 'auto', display: 'block', margin: '10px auto' }} />
                  <p className="card-text">Creación de software conforme a tus necesidades, digitalización de tus procesos para transformar tu negocio, incluyendo automatización de tareas manuales, y más.</p>
                 
                  <Button variant="primary" className="btn-blue w-100 mt-4">Más Información</Button> {/* Botón azul */}
                </div>
              </div>
            </div>
            <div className="col-md-6">
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
 </>;
}
export default ServicesSection;