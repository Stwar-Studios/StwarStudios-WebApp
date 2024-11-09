import './contact.css';
import React, { useState } from "react";
import { Element } from 'react-scroll';
import { FaUser, FaWhatsapp } from 'react-icons/fa';
import { Modal, Spinner } from 'react-bootstrap';

const ContactComponent: React.FC = () => {

  const [formData, setFormData] = useState({ 

    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    userPublicIP: ''
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

    try {
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
      formData.userPublicIP = ipData.ip; 
    } catch (error) {
      console.error('Error al obtener la IP:', error);
      setErrors(prevErrors => ({
        ...prevErrors,
        api: "No se pudo obtener la dirección IP."
      }));
      setIsLoading(false);
      setIsSubmitDisabled(false);
      return;
    }

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

    const newFormData = { ...formData }; 

    const apiUrl = `${process.env.REACT_APP_API_URL}v1/api/contact`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFormData)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "El mensaje no ha podido ser enviado");      
      
      if(data.success)
      {
        setSuccessMessage("¡Enviado con éxito! Pronto nos pondremos en contacto contigo.");
      }
      else{
        setSuccessMessage(data.message);
      }

      setFormData({ userPublicIP: '', name: '', email: '', phone: '', topic: '', message: '' }); 
      setErrors({ name: '', email: '', phone: '', topic: '', message: '', api: '' });
      

    } catch (error) {
      console.error('Error:', error);
      setErrors(prevErrors => ({
        ...prevErrors,
        api: "Hubo un problema al enviar el formulario. Por favor, inténtalo mas tarde."
      }));
    } finally {
      setIsLoading(false);
      setIsSubmitDisabled(false);
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
                maxLength={50}
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
                maxLength={50} 
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
                maxLength={500}
              ></textarea>
              <div className="character-count">
                {0 + formData.message.length}/500 
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
            <Modal show={isLoading} backdrop="static" keyboard={false} centered className='contact-overlay'> 
            <Modal.Body className="d-flex justify-content-center align-items-center" style={{ height: '100vh', background: 'transparent' }}> 
            <Spinner animation="border" role="status" variant='light'> 
                  <span className="sr-only">Cargando...</span> 
                </Spinner> 
              <span className='ms-2 loading-message'>Enviando...</span> 
              </Modal.Body> 
              </Modal>
          )}
        </div>
      </section>
    </Element>
  );
};

export default ContactComponent;

