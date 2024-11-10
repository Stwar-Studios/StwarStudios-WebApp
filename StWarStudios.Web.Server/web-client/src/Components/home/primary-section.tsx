import "./primary-section.css"
import { scroller } from 'react-scroll';
import { FaAngleDown  } from 'react-icons/fa';
import { useTranslations  } from '../translation-provider';

const scrollToSection = (section : string) => {
    scroller.scrollTo(section, {
      duration: 500,
      delay: 0,
      smooth: 'easeIn'
    });
  };

function PrimarySection()
{  
  const { videoShowcase } = useTranslations();
  const { homeTitle, homeSubTitle, contactButton, servicesArrowTitle, htmlVideoFallback } = videoShowcase;
 return <>
    <section className="video-showcase">
      <video autoPlay muted loop id="background-video">
        <source src="/images/hologram_1.mp4" type="video/mp4" />
        {htmlVideoFallback}
      </video>
      <div className="video-overlay"></div>
      <div className="content">
        <h2 className="home-title">{homeTitle}</h2>
        <h3 className="home-sub-title mb-4 text-wrap">{homeSubTitle}</h3>
        <div className="video-button">
          <a href="#contact-section" className="video-button" onClick={() => scrollToSection('contact-section')}>
            {contactButton}
          </a>
        </div>
      </div>
      <div className="arrow-down">
        <a title={servicesArrowTitle} href="#services" onClick={() => scrollToSection('services')}>
          <FaAngleDown size={30} />
        </a>
      </div>
    </section>   
  </>;
}

export default PrimarySection;