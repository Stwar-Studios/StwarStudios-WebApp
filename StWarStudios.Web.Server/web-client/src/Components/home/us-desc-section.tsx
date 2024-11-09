import './us-desc-section.css'
import { Element } from 'react-scroll';
import { FaLaptop} from 'react-icons/fa';

function UsDescSection()
{
 return <>
 <Element name="us-desc" className="us-desc text-dark" > 
            <div className='us-content'>
              <div className='us-title'>
                <h1><strong>Nosotros</strong></h1>
                <img src="/images/line purple.png" className='us-img' alt="LinePurple" />
              </div>
              <div className='us-content'>
              <p>
                En StWar Studios, nos dedicamos al desarrollo de sistemas informáticos conforme a tus necesidades, incluyendo páginas web, integraciones, automatizaciones
                 y dem&aacute;s, aprovechando las nuevas tecnologías para brindarte soluciones innovadoras. 
               </p>
               <p>
                Nuestro compromiso con un alto valor humano significa que ponemos en primer lugar tanto a ti como a nuestros colaboradores, 
                promoviendo el crecimiento y desarrollo profesional de cada miembro de nuestro equipo. 
               </p>
                <p>
                  Con una clara visión de futuro, buscamos expandirnos en Latinoamérica y convertirnos en un referente en el sector tecnológico.  
                  Nos distinguimos por nuestra responsabilidad, integridad y compromiso con la calidad, asegurando así tu satisfacción y confianza en todos 
                  nuestros servicios. 
                </p> 
                <p> <strong>¡Estamos aquí para acompañarte y crecer juntos!</strong>
                  
                </p> 
                 
             

              </div>
             
          </div>
          <div className='us-icon'>
              <FaLaptop size={200} color="#3f3f3f" />       
            </div>
            
        </Element>
 </>
}
export default UsDescSection;