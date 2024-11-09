import React, {useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.css';



const Footer: React.FC = () => {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [version, setVersion] = useState(''); 
  const [build, setBuild] = useState('');

  const handleOpenTermsModal = () => setShowTermsModal(true);
  const handleCloseTermsModal = () => setShowTermsModal(false);

  const handleOpenPrivacyModal = () => setShowPrivacyModal(true);
  const handleClosePrivacyModal = () => setShowPrivacyModal(false);

  useEffect(() => { fetch('/version.txt') 
    .then((response) => response.text()) 
    .then((text) => 
    { 
      const lines = text.split('\n'); 
      if (lines.length >= 2) 
      { 
        setVersion(lines[0]);
        setBuild(lines[1]); 
      }
    }); 
  }, []);
  
  return (
    <>
   <footer className="footer">
   <Container>
  <Row className="text-center">
    <Col md={3} className="footer-logo text-center">
      <img
        src="images/logo.png"
        alt="StWar Studios Logo"
        className="logo-image"
      />
      <Col className='footer-text1'>
        <p className="line-one">STWAR</p>
        <p className="line-two">Studios</p>
      </Col>
    </Col>

    <Col md={6} className="text-center">
      <div className="footer-buttons">
        <Button
          variant="link"
          onClick={handleOpenPrivacyModal}
          className="footer-link"
        >
          Política de Privacidad
        </Button>
        <Button
          variant="link"
          onClick={handleOpenTermsModal}
          className="footer-link"
        >
          Términos y Condiciones
        </Button>       
      </div>
      <hr className='mt-4'/>
      <Col className='mt-4 text-center'>
        <p>
          Versión <strong>{version}</strong>
        </p>
        <p className='ms-2'>
          Build <strong>{build}</strong>
        </p>
      </Col>
    </Col>
  </Row>
<Row className="text-center">
  <Col>
    <hr />
    <div className="footer-text">
      © {new Date().getFullYear()} StWar Studios - Todos los derechos reservados.
      <Col md={1} className="footer-social ms-auto">
        <FontAwesomeIcon icon={faFacebookSquare} className="facebook-icon" />
        <FontAwesomeIcon icon={faTwitterSquare} className="twitter-icon" />
        <FontAwesomeIcon icon={faYoutubeSquare} className="youtube-icon" />
        <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
      </Col>
    </div>
  </Col>
</Row>

  </Container>
</footer>


      <Modal show={showTermsModal} onHide={handleCloseTermsModal}>
        <Modal.Header>
          <Modal.Title>Términos y Condiciones</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Bienvenido a <b>StWar Studios</b>.</p>
          <p>Al acceder y utilizar nuestro sitio web, aceptas estos Términos y Condiciones. <b>StWar Studios</b> proporciona servicios de desarrollo de software y web, y el uso de este sitio está sujeto a las siguientes reglas y lineamientos. Por favor, lee cuidadosamente este documento, ya que establece los derechos y responsabilidades que tienes como usuario.</p>
          <p>En este documento, el término <b>"Usuario"</b> se refiere a cualquier persona que acceda a nuestra página web o utilice nuestros servicios. <b>"Servicios"</b> se refiere a cualquier servicio ofrecido por StWar Studios, incluyendo, pero no limitado a, desarrollo de software, desarrollo web y asesoría técnica.</p>
          <p><b>StWar Studios</b> no se hace responsable de daños directos, indirectos, incidentales o consecuenciales que puedan resultar del uso o incapacidad de uso de nuestros servicios. Esto incluye, pero no se limita a, fallos técnicos, pérdida de datos o cualquier otra consecuencia derivada de la utilización de nuestros servicios.</p>
          <p>Para obtener más detalles, puedes revisar nuestra Política de Privacidad en el enlace correspondiente.</p>
          <p>Si tienes alguna pregunta sobre estos términos, puedes contactarnos en <b>contact@stwarstudios.com</b>.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTermsModal}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showPrivacyModal} onHide={handleClosePrivacyModal}>
        <Modal.Header>
          <Modal.Title>Política de Privacidad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>En <b>StWar Studios</b>, nos comprometemos a proteger la privacidad de nuestros usuarios. Esta política de privacidad describe cómo recolectamos, utilizamos, protegemos y compartimos tu información personal cuando utilizas nuestros servicios.</p>
          <p>Recopilamos información personal cuando interactúas con nuestro sitio web o servicios, incluyendo tu nombre, correo electrónico y otra información relevante. Usamos esta información para ofrecerte mejores servicios y mantenerte informado sobre actualizaciones o cambios importantes.</p>
          <p>Tu información no será vendida ni compartida con terceros sin tu consentimiento, excepto para cumplir con la ley o con fines operacionales relacionados con la prestación de nuestros servicios.</p>
          <p>Nos aseguramos de proteger tu información personal utilizando medidas de seguridad apropiadas. Sin embargo, no podemos garantizar que la transmisión de información por Internet sea completamente segura.</p>
          <p>Si tienes alguna pregunta sobre nuestra política de privacidad, puedes contactarnos en <b>contact@stwarstudios.com</b>.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePrivacyModal}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Footer;


