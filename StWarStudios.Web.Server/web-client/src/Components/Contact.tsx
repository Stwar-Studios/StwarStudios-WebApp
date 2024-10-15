import './contact.css';
import * as React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importar estilos de Font Awesome

const Contact: React.FC = () => {
  return (
    <>
      {/* Sección de imagen de fondo */}
      <div className="contact-section">
        <section className="image-section">
          <img src="/images/guys.jpg" alt="Fondo" className="background-image" />
          <div className="image-overlay"></div>
          <div className="image-text">
            <span className="home-title">Lo increíble comienza aquí.</span><br />
            <span className="home-sub-title mb-2 text-wrap">
              Es momento de construir el futuro que una vez imaginaste.
            </span>
          </div>
        </section>
      </div>

      {/* Sección del contenido con texto y formulario */}
      <div className="form-container">
        <div className="text-section">
          <p className="contact-subtitle">Escríbenos</p>
          <h1 className="contact-title">Ponte en contacto hoy</h1>
          <p className="contact-description"><br />
            Déjanos tus datos y estaremos encantados de<br /> trabajar contigo. Nuestro equipo está siempre 
            <br />atento y dispuesto a ofrecerte la mejor solución a <br />tus necesidades tecnológicas.
          </p>
           {/* Lista de íconos */}
           <ul className="icon-list"><br />
            <li><i className="fas fa-user"></i> thenatureguardians@gmail.com</li>
            <li><i className="fas fa-phone"></i> 972 254-6073</li>
            <li><i className="fas fa-home"></i> 601 254-6073</li>
          </ul>
        </div>

        {/* Formulario */}
        <div className="form-section">
          <form className="contact-form">
            <input type="text" placeholder="Your name" className="contact-input" />
            <input type="email" placeholder="Your email" className="contact-input" />
            <input type="number" placeholder="Your phone number" className="contact-input" />
            <input type="text" placeholder="Topic" className="contact-input" />
            <textarea placeholder="Your message" className="contact-textarea"></textarea>
            <button type="submit" className="contact-button1">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

