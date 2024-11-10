import './contact.css';
import React, { useState } from "react";
import { Element } from 'react-scroll';
import { FaUser, FaWhatsapp } from 'react-icons/fa';
import { Modal, Spinner } from 'react-bootstrap';
import { useTranslations  } from './translation-provider';

const ContactComponent: React.FC = () => {
  // Access translations using useTranslations
  const { contactSection } = useTranslations();
  
  // Form state initialization
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    userPublicIP: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    api: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  // Handles form input changes and sanitizes phone input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === "phone" ? value.replace(/[^0-9]/g, "") : value,
    }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: "", api: "" }));
  };

  // Handles form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitDisabled(true);

    // Attempt to fetch the user's public IP
    try {
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();
      formData.userPublicIP = ipData.ip;
    } catch (error) {
      console.error("Error fetching IP:", error);
      setErrors(prevErrors => ({ ...prevErrors, api: contactSection.errors.api }));
      setIsLoading(false);
      setIsSubmitDisabled(false);
      return;
    }

    // Validate form fields
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,15}$/;

    const newErrors = { name: "", email: "", phone: "", topic: "", message: "", api: "" };
    if (!formData.name) newErrors.name = contactSection.errors.name;
    if (!formData.email) newErrors.email = contactSection.errors.email;
    else if (!emailRegex.test(formData.email)) newErrors.email = contactSection.errors.email;
    if (!formData.phone) newErrors.phone = contactSection.errors.phone;
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = contactSection.errors.phone;
    if (!formData.topic) newErrors.topic = contactSection.errors.topic;
    if (!formData.message) newErrors.message = contactSection.errors.message;

    // If there are errors, update the state and stop the submission process
    if (Object.values(newErrors).some(error => error)) {
      setErrors(newErrors);
      setIsLoading(false);
      setIsSubmitDisabled(false);
      return;
    }

    // Make API request to submit the form data
    const apiUrl = `${process.env.REACT_APP_API_URL}v1/api/contact`;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "The message could not be sent");

      // Show success message if the API call was successful
      setSuccessMessage(data.success ? contactSection.success : data.message);
      setFormData({ name: "", email: "", phone: "", topic: "", message: "", userPublicIP: "" });
      setErrors({ name: "", email: "", phone: "", topic: "", message: "", api: "" });
    } catch (error) {
      console.error("Error:", error);
      setErrors(prevErrors => ({ ...prevErrors, api: contactSection.errors.api }));
    } finally {
      setIsLoading(false);
      setIsSubmitDisabled(false);
    }
  };

  return (
    <Element name="contact-section" className="contact-section">
      <img src="/images/guys.jpg" alt="Background" className="background-image" />
      <div className="contact-overlay"></div>
      <div className="title-container">
        <h1 className="main-title">{contactSection.title}</h1> {/* Use translated title */}
        <h2 className="main-subtitle">{contactSection.subtitle}</h2> {/* Use translated subtitle */}
      </div>

      <section className="contact-content">
        <div className="text-section">
          <p>{contactSection.writeToUs}</p> {/* Use translated contact title */}
          <h2 className="contact-title">{contactSection.contactTitle}</h2> {/* Use translated contact title */}
          <p className="contact-description">
            {contactSection.contactDescription} {/* Use translated contact description */}
            <br/>
            {contactSection.contactDescription2} {/* Use translated contact description */}
          </p>
          <br />
          <ul className="icon-list">
            <li> <FaUser /> {contactSection.email}</li> {/* Use translated email label */}
            <li> <FaWhatsapp /> {contactSection.phone}</li> {/* Use translated phone label */}
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
                placeholder={contactSection.form.name} /* Use translated placeholder for name */
                className="contact-input"
                value={formData.name}
                onChange={handleChange}
                maxLength={50}
              />
              {errors.name && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.name} {/* Display error message for name */}
                </div>
              )}

              <input
                type="email"
                name="email"
                placeholder={contactSection.form.email} /* Use translated placeholder for email */
                className="contact-input"
                value={formData.email}
                onChange={handleChange}
                maxLength={50}
              />
              {errors.email && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.email} {/* Display error message for email */}
                </div>
              )}

              <input
                type="tel"
                name="phone"
                placeholder={contactSection.form.phone} /* Use translated placeholder for phone */
                className="contact-input"
                pattern="[0-9]*"
                value={formData.phone}
                onChange={handleChange}
                maxLength={15}
              />
              {errors.phone && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.phone} {/* Display error message for phone */}
                </div>
              )}

              <input
                type="text"
                name="topic"
                placeholder={contactSection.form.topic} /* Use translated placeholder for topic */
                className="contact-input"
                value={formData.topic}
                onChange={handleChange}
                maxLength={50} 
              />
              {errors.topic && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.topic} {/* Display error message for topic */}
                </div>
              )}

              <textarea
                name="message"
                placeholder={contactSection.form.message} /* Use translated placeholder for message */
                className="contact-textarea"
                value={formData.message}
                onChange={handleChange}
                maxLength={500}
              ></textarea>
              <div className="character-count">
                {formData.message.length}/500 {/* Display message character count */}
              </div>

              {errors.message && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.message} {/* Display error message for message */}
                </div>
              )}

              {errors.api && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.api} {/* Display general API error message */}
                </div>
              )}

              <button 
                type="submit" 
                className="contact-send-form" 
                disabled={isSubmitDisabled} 
              >
                {contactSection.form.submit} 
              </button>
            </form>
          )}
          {isLoading && (
            <Modal show={isLoading} backdrop="static" keyboard={false} centered className='contact-overlay'> 
              <Modal.Body className="d-flex justify-content-center align-items-center" style={{ height: '100vh', background: 'transparent' }}> 
                <Spinner animation="border" role="status" variant='light'> 
                  <span className="sr-only">Loading...</span> 
                </Spinner>
              </Modal.Body>
            </Modal>
          )}
        </div>
      </section>
    </Element>
  );
};

export default ContactComponent;