import React from 'react';
import './tech-stack-section.css';
import { Element } from 'react-scroll';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // Importa los estilos CSS de tippy.js
import { SiMicrosoftazure, SiDotnet, SiBlazor, SiAngular, SiReact } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { useTranslations  } from '../translation-provider';
import { followCursor } from 'tippy.js';

function TechStackSection() {
  const { techStackSection } = useTranslations();

  return (
    <Element name="tech-stack" className="tech-stack text-white">
      <div className="container">
        <h1 className='text-center mb-5'>{techStackSection.title}</h1>
        <div className="icons">
          <Tippy content={techStackSection.technologies.blazor} followCursor={true} placement="top" plugins={[followCursor]}>
            <div className='icon'>
              <SiBlazor className="blazor" />
            </div>
          </Tippy>
          <Tippy content={techStackSection.technologies.azure} followCursor={true} placement="top" plugins={[followCursor]}>
            <div className='icon'>
              <SiMicrosoftazure className="azure" />
            </div>
          </Tippy>
          <Tippy content={techStackSection.technologies.dotnet} followCursor={true} placement="top" plugins={[followCursor]}>
            <div className='icon'>
              <SiDotnet className="dotnet" />
            </div>
          </Tippy>
          <Tippy content={techStackSection.technologies.react} followCursor={true} placement="top" plugins={[followCursor]}>
            <div className='icon'>
              <SiReact className="react" />
            </div>
          </Tippy>
          <Tippy content={techStackSection.technologies.angular} followCursor={true} placement="top" plugins={[followCursor]}>
            <div className='icon'>
              <SiAngular className="angular" />
            </div>
          </Tippy>
          <Tippy content={techStackSection.technologies.sql} followCursor={true} placement="top" plugins={[followCursor]}>
            <div className='icon combined-icon'>
              <div className='sql'>
                <FaDatabase />
              </div>
            </div>
          </Tippy>
        </div>
      </div>
    </Element>
  );
}

export default TechStackSection;
