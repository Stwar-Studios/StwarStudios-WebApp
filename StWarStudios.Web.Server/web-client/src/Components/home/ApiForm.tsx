import React, { useState } from "react";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

export interface FormErrors extends FormData {
  api: string;
}

interface ApiFormProps {
  onSuccess: (message: string) => void;
}

const ApiForm: React.FC<ApiFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    api: ''
  });

  const [isLoading, setIsLoading] = useState(false);

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,15}$/;

    const newErrors: FormErrors = {
      name: '',
      email: '',
      phone: '',
      topic: '',
      message: '',
      api: ''
    };

    if (!formData.name) newErrors.name = "Por favor, escriba su Nombre.";
    if (!formData.email) newErrors.email = "Por favor, escriba un Correo válido.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Formato de correo inválido.";
    if (!formData.phone) newErrors.phone = "Por favor, escriba un Teléfono válido.";
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = "El teléfono debe contener entre 7 y 15 dígitos.";
    if (!formData.topic) newErrors.topic = "Por favor, escriba un Tema de interés.";
    if (!formData.message) newErrors.message = "Por favor, escriba un Mensaje.";

    if (Object.values(newErrors).some(error => error)) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Error al enviar el formulario');

      await response.json();
      onSuccess("¡Tu mensaje ha sido enviado con éxito!");
      setFormData({ name: '', email: '', phone: '', topic: '', message: '' });
      setErrors({ name: '', email: '', phone: '', topic: '', message: '', api: '' });
    } catch (error) {
      setErrors(prevErrors => ({
        ...prevErrors,
        api: "Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo."
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="contact-input"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <div className="error-message">{errors.name}</div>}

      <input
        type="email"
        name="email"
        placeholder="Your email"
        className="contact-input"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <div className="error-message">{errors.email}</div>}

      <input
        type="tel"
        name="phone"
        placeholder="Your phone number"
        className="contact-input"
        pattern="[0-9]*"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && <div className="error-message">{errors.phone}</div>}

      <input
        type="text"
        name="topic"
        placeholder="Topic"
        className="contact-input"
        value={formData.topic}
        onChange={handleChange}
      />
      {errors.topic && <div className="error-message">{errors.topic}</div>}

      <textarea
        name="message"
        placeholder="Your message"
        className="contact-textarea"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      {errors.message && <div className="error-message">{errors.message}</div>}

      {errors.api && <div className="error-message">{errors.api}</div>}

      <button type="submit" className="contact-send-form" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
};

export default ApiForm;
