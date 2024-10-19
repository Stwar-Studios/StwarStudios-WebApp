import "./primary-section.css"
import { scroller } from 'react-scroll';
import Button from 'react-bootstrap/Button';

const scrollToSection = (section : string) => {
    scroller.scrollTo(section, {
      duration: 500,
      delay: 0,
      smooth: 'easeIn'
    });
  };

function PrimarySection()
{
 return <>
 <section className="video-section" >
        <video autoPlay muted loop>
          <source src="/images/hologram_1.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
        <div className="video-overlay"></div>
        <div className="video-text">
          <div></div>
          <span className="home-title">Avanza al futuro tecnológico</span>
          <span className="home-sub-title mb-4 text-wrap">Empodera tu negocio con las mejores e innovadoras soluciones tecnol&oacute;gicas</span>
          <div className="video-button">
            <Button className="btn-more-info" onClick={() =>scrollToSection('services')} >M&aacute;s informaci&oacute;n</Button>
          </div>
        </div>
      </section></>;
}

export default PrimarySection;