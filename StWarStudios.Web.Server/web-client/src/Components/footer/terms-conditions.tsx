import React from 'react';
import './terms-conditions.css'; 

function TermsConditions() {
  return (
    <section className="terms-section">
      <img src="/images/footer.jpg" alt="Fondo" className="background-image" />
      <div className="overlay"></div>
      <div className="title-container">
        <h1 className="main-title">Nuestros Términos y Condiciones</h1>
        <h2 className="main-subtitle">Conoce los lineamientos que protegen nuestra colaboración</h2>
      </div>
    </section>
  );
}

export default TermsConditions;

