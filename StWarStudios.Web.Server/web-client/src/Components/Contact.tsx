import './contact.css';
import React, { useEffect  } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Element } from 'react-scroll';

const ContactComponent: React.FC = () => {
  //const [data, setData] = useState(null);
  //const [error, setError] = useState(null);
  //const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Función para hacer la solicitud GET
    const fetchData = () => {
      fetch('v1/api/Contact')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error en la red');
          }
          return response.json();
        })
        .then((data) => {
          //setData(data);
          //setLoading(false);
          console.log(data);
        })
          .catch((error) => {
              console.log(error);
          //setError(error.message);
          //setLoading(false);
        });
    };

    fetchData();
  }, []); // El arreglo vacío asegura que se ejecute una vez al montar el componente


  return ( 
    <Element name="contact-section" className="contact-section" > 
      <img src="/images/guys.jpg" alt="Fondo" className="background-image" />
      <div className="contact-overlay"></div>
      <div className="title-container">
        <h1 className="main-title">Lo increíble comienza aqu&iacute;</h1>
        <h2 className="main-subtitle">Es momento de construir el futuro que una vez te imaginaste.</h2>
      </div>
      
      <section className="contact-content">        
          <div className="text-section">            
            <p>Escribenos</p>
            <h2 className="contact-title">Ponte en contacto</h2>
            <p className="contact-description">
              Déjanos tus datos y estaremos encantados de trabajar contigo.<br />
              Nuestro equipo está siempre atento y dispuesto a ofrecerte la mejor
              solución a tus necesidades tecnológicas.
            </p>
            <br />
            <ul className="icon-list">
              <li><i className="fas fa-user"></i> contact@stwarstudios.com</li>
              <li><i className="fas fa-phone"></i> (+57) 316 9352239</li>
            </ul>
          </div>
          <div className="form-section">
            <form className="contact-form">
              <input type="text" placeholder="Your name" className="contact-input" />
              <input type="email" placeholder="Your email" className="contact-input" />
              <input type="number" placeholder="Your phone number" className="contact-input" />
              <input type="text" placeholder="Topic" className="contact-input" />
              <textarea placeholder="Your message" className="contact-textarea"></textarea>
              <button type="submit" className="contact-send-form">Enviar</button>
            </form>
          </div>          
        </section>
    </Element>
  );
};

export default ContactComponent;
