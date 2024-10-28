import './values-desc-section.css'
import { Element } from 'react-scroll';
import { FaRegHeart, FaShieldAlt, FaRegHandshake, 
  FaHourglassHalf 
  } from 'react-icons/fa';

  const valuesIconSize = 75;

function ValuesDescSection()
{
 return <>
    <Element name="values-desc" className="values-desc text-dark" > 
        <div className="">
          <h1 className='text-center'><strong>Nuestros valores</strong></h1>
          <div className='desc-content'>
            <div className='values-item'>            
              <FaShieldAlt className='img' size={valuesIconSize} color="#6D31ED" title="Integridad" />
              <h2><strong>Integridad</strong></h2>            
              <div className='value-body'>
                transparentes. Somos responsables y éticos en nuestras acciones, servicios y productos
              </div>
            </div>
            <div className='values-item'>         
                <FaRegHeart className='img' size={valuesIconSize} color="#f04cc4" title="Disciplina" />
                <h2><strong>Pasi&oacute;n</strong></h2>
              <div className='value-body'>
                Dejamos nuestro corazón en cada tarea. Nos emocionan los códigos, el diseño y la planeación
              </div>
            </div>
            <div className='values-item'>
              <FaHourglassHalf className='img' size={valuesIconSize} color="#f9623e" title="Corazón Candado" />
              <h2><strong>Disciplina</strong></h2>
              <div className='value-body'>
                Somos constantes, puntuales, enfocados y organizados en nuestras actividades.
              </div>
            </div>
            <div className='values-item'>
              <FaRegHandshake className='img' size={valuesIconSize} color="#3787cf" title="Colaboración" />   
              <h2><strong>Compromiso</strong></h2>
              <div className='value-body'>
                Damos el todo por el todo de manera voluntaria y apasionada.
              </div>
            </div>
          </div>   
        </div>
        </Element>
 </>
}
export default ValuesDescSection;