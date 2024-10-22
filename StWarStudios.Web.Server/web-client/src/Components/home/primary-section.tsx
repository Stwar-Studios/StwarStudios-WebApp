import "./primary-section.css"
import { scroller } from 'react-scroll';
//import Button from 'react-bootstrap/Button';
import { FaAngleDown  } from 'react-icons/fa';

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
    <section className="video-showcase">
        <video autoPlay muted loop id="background-video">
          <source src="/images/hologram_1.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
        <div className="video-overlay"></div>
        <div className="content">
          <h2 className="home-title">Avanza al futuro tecnológico</h2>
          <h3 className="home-sub-title mb-4 text-wrap">Empodera tu negocio con las mejores e innovadoras soluciones tecnol&oacute;gicas</h3>
          <div className="video-button">
            {/* <Button variant='outline-light' className="stw-btn-primary" onClick={() =>scrollToSection('services')} >M&aacute;s informaci&oacute;n</Button> */}
            <a href="contact" className="video-button">Contact Us</a>
          </div>
        </div>      
        <div  className="arrow-down">
          <a href="#services" onClick={() =>scrollToSection('services')}><FaAngleDown  size={30}/></a>
        </div>
        
      
    </section>      
  </>;
}

export default PrimarySection;