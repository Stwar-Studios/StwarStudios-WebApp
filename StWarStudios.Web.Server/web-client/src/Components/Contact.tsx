import './contact.css';
import * as React from 'react';
import backgroundImage from '../images/guys.jpg'; // Importa la imagen

const Contact: React.FC = () => {
  return (
    <div>
      {/* Sección de la imagen de fondo */}
      <section 
        className="background-section" 
        style={{ backgroundImage: `url(${backgroundImage})` }} // Usa la imagen importada
      >
        <div className="background-content">
          <h1 className="background-title">Contáctanos</h1>
          <p className="background-subtitle">Estamos aquí para ayudarte a avanzar.</p>
        </div>
      </section>

      {/* Sección del formulario de contacto */}
      <section className="form-section">
        <div className="form-content">
          <h2 className="form-title">Envíanos un mensaje</h2>
          <form className="contact-form">
            <input type="text" placeholder="Nombre" className="contact-input" />
            <input type="email" placeholder="Correo electrónico" className="contact-input" />
            <textarea placeholder="Mensaje" className="contact-textarea"></textarea>
            <button type="submit" className="contact-button">Enviar</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

