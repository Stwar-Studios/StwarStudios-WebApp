import './contact.css';
import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Element } from 'react-scroll';
import { FaUser, FaWhatsapp } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid'; 

const ContactComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    id: '', 
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    api: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const filteredValue = value.replace(/[^0-9]/g, ""); 
      setFormData({ ...formData, [name]: filteredValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setErrors({ ...errors, [name]: '', api: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitDisabled(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,15}$/;

    const newErrors = {
      name: '',
      email: '',
      phone: '',
      topic: '',
      message: '',
      api: ''
    };

    if (!formData.name) newErrors.name = "Por favor, escriba su Nombre.";
    if (!formData.email) {
      newErrors.email = "Por favor, escriba un Correo válido.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Formato de correo inválido.";
    }
    if (!formData.phone) {
      newErrors.phone = "Por favor, escriba un Teléfono válido.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "El teléfono debe contener entre 7 y 15 dígitos.";
    }
    if (!formData.topic) newErrors.topic = "Por favor, escriba un Tema de interés.";
    if (!formData.message) newErrors.message = "Por favor, escriba un Mensaje, queremos leerte.";

    if (Object.values(newErrors).some(error => error)) {
      setErrors(newErrors);
      setIsLoading(false);
      setIsSubmitDisabled(false); 
      return;
    }

    const requestId = uuidv4(); 
    const newFormData = { ...formData, id: requestId }; 

    const apiUrl = `${process.env.REACT_APP_API_URL}v1/api/contact`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFormData)
      });

      if (!response.ok) throw new Error('Error al enviar el formulario');

      const data = await response.json();
      console.log('Message sent successfully:', data.message);

      setFormData({ id: '', name: '', email: '', phone: '', topic: '', message: '' });
      setErrors({ name: '', email: '', phone: '', topic: '', message: '', api: '' });
      setSuccessMessage("¡Enviado con éxito! Nos pondremos en contacto pronto.");
      setTimeout(() => setSuccessMessage(''), 5000); 

      setTimeout(() => {
        setIsSubmitDisabled(false);
      }, 300000); 

    } catch (error) {
      console.error('Error:', error);
      setErrors(prevErrors => ({
        ...prevErrors,
        api: "Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo."
      }));
    } finally {
      setIsLoading(false);
    }
  };

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
          <p>Escríbenos</p>
          <h2 className="contact-title">Ponte en contacto</h2>
          <p className="contact-description">
            Déjanos tus datos y estaremos encantados de trabajar contigo.<br />
            Nuestro equipo está siempre atento y dispuesto a ofrecerte la mejor
            solución a tus necesidades tecnológicas.
          </p>
          <br />
          <ul className="icon-list">
            <li> <FaUser /> contact@stwarstudios.com</li>
            <li> <FaWhatsapp /> (+57) 316 9352239</li>
          </ul>
        </div>
        <div className="form-section">
          {successMessage ? (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              {successMessage}
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="contact-input"
                value={formData.name}
                onChange={handleChange}
                maxLength={50}
              />
              {errors.name && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.name}
                </div>
              )}

              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="contact-input"
                value={formData.email}
                onChange={handleChange}
                maxLength={100}
              />
              {errors.email && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.email}
                </div>
              )}

              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                className="contact-input"
                pattern="[0-9]*"
                value={formData.phone}
                onChange={handleChange}
                maxLength={15}
              />
              {errors.phone && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.phone}
                </div>
              )}

              <input
                type="text"
                name="topic"
                placeholder="Topic"
                className="contact-input"
                value={formData.topic}
                onChange={handleChange}
                maxLength={100} 
              />
              {errors.topic && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.topic}
                </div>
              )}

              <textarea
                name="message"
                placeholder="Your message"
                className="contact-textarea"
                value={formData.message}
                onChange={handleChange}
                maxLength={1000}
              ></textarea>
              <div className="character-count">
                {1000 - formData.message.length} 
              </div>
              
              {errors.message && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.message}
                </div>
              )}

              {errors.api && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.api}
                </div>
              )}

              <button 
                type="submit" 
                className="contact-send-form" 
                disabled={isSubmitDisabled} 
              >
                Enviar
              </button>
            </form>
          )}
          {isLoading && (
            <div className="overlay">
              <div className="loading-message">Enviando...</div>
            </div>
          )}
        </div>
      </section>
    </Element>
  );
};

export default ContactComponent;
