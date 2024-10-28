import './contact.css';
import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Element } from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const apiUrl = `${process.env.REACT_APP_API_URL}v1/api/contact`;

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error submitting form');
      }
      return response.json();
    })
    .then((data) => {
      toast.success(data.message);
      setFormData({ name: '', email: '', phone: '', topic: '', message: '' });
    })
    .catch((error) => {
      console.error('Error:', error);
      toast.error('There was a problem sending the message.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return ( 
    <Element name="contact-section" className="contact-section" > 
      <img src="/images/guys.jpg" alt="Fondo" className="background-image" />
      <div className="contact-overlay"></div>
      <div className="title-container">
        <h1 className="main-title">Lo increíble comienza aquí</h1>
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="contact-input"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="contact-input"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Your phone number"
                className="contact-input"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="topic"
                placeholder="Topic"
                className="contact-input"
                value={formData.topic}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your message"
                className="contact-textarea"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="contact-send-form" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>          
        </section>

      {/* Overlay de carga */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-message">Enviando...</div>
        </div>
      )}

      {/* Contenedor de notificaciones */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick />
    </Element>
  );
};

export default ContactComponent;
