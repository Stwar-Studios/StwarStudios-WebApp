import React, { useState } from "react";
import ApiForm from "./home/ApiForm";
import { Element } from 'react-scroll';
import './contact.css';

const ContactComponent: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState('');

  return (
    <Element name="contact-section" className="contact-section">
      <img src="/images/guys.jpg" alt="Fondo" className="background-image" />
      <div className="contact-overlay"></div>
      <div className="title-container">
        <h1 className="main-title">Lo increíble comienza aquí</h1>
        <h2 className="main-subtitle">Es momento de construir el futuro que una vez te imaginaste.</h2>
      </div>

      <section className="contact-content">
        <div className="text-section">
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



