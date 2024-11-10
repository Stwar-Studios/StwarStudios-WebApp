import './services-section.css';
import { Element } from 'react-scroll';
import { useTranslations  } from '../translation-provider';
import { scroller } from 'react-scroll';
function ServicesSection(){  
  const scrollToSection = (section : string) => {
    scroller.scrollTo(section, {
      duration: 500,
      delay: 0,
      smooth: 'easeIn'
    });
};
  const { servicesSection } = useTranslations();
  return <>  
    <Element name="services" className="services-section">
      <div>
        <h2 className="mb-5"><strong>{servicesSection.title}</strong></h2>
        <div className="services-container">
          {servicesSection.services.map((service, index) => (
            <div key={index} className={`service-card shadow-lg shadow-${index === 0 ? 'blue' : 'purple'}`}>
              <div className="service-card-content">
                <img src={index === 0 ? "/images/keys.png" : "/images/cloud1.png"} alt={service.title} className="service-icon" />
                <div className="service-title">
                  <h3>{service.title}</h3>
                  <img src={index === 0 ? "/images/line blue.png" : "/images/line purple.png"} alt={`Line${index === 0 ? 'Blue' : 'Purple'}`} className="img-underline" />
                </div>
                <p>{service.description}</p>
                <a href="#us-section" className={`service-btn btn-${index === 0 ? 'blue' : 'purple'}`} onClick={() => scrollToSection('contact-section')}>{service.button}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  </>;
}
export default ServicesSection;