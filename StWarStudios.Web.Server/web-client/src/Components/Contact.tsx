import './contact.css';
import { FaUser, FaWhatsapp } from 'react-icons/fa';

const ContactComponent: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState('');

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
              <li> <FaUser />contact@stwarstudios.com</li>
              <li> <FaWhatsapp  />(+57) 316 9352239</li>
            </ul>
          </div>
        <div className="form-section">
          {successMessage && (
            <div className="success-message">
              {successMessage}
            </div>
          )}
          <ApiForm onSuccess={setSuccessMessage} />
        </div>
      </section>
    </Element>
  );
};

export default ContactComponent;
