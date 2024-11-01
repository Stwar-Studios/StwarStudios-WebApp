import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';
import {AppVersion} from './Components/app-version';



const Footer: React.FC = () => {
  const version = AppVersion();
  return (
    <footer className="footer py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-left">
            © {new Date().getFullYear()} StWar Studios - Todos los derechos reservados.
          </Col>
          <Col md={6} className="text-center text-md-right">
            <a href="/privacy" className="footer-link">Política de Privacidad</a> | 
            <a href="/terms" className="footer-link">Términos y Condiciones</a>
          </Col>
          
        </Row>
        <div className='version-info'>
          <span className='ms-4'>{version || 'Loading...'}</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
