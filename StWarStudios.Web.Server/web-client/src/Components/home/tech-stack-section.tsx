import React from 'react';
import './tech-stack-section.css';
import { Element } from 'react-scroll';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // Importa los estilos CSS de tippy.js
import { SiMicrosoftazure, SiDotnet, SiBlazor, SiAngular, SiReact } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

function TechStackSection() {
  return (
    <>
      <Element name="tech-stack" className="tech-stack text-white">
        <div className="container">
          <h1 className='text-center mb-5'>Nuestro stack tecnol&oacute;gico</h1>
          <div className="icons">
            <Tippy content="Blazor" followCursor='horizontal' placement="top">
              <div className='icon'>
                <SiBlazor className="blazor" />
              </div>
            </Tippy>
            <Tippy content="Microsoft Azure" followCursor={true} placement="top">
              <div className='icon'>
                <SiMicrosoftazure className="azure" />
              </div>
            </Tippy>
            <Tippy content=".NET" followCursor={true} placement="top">
              <div className='icon'>
                <SiDotnet className="dotnet" />
              </div>
            </Tippy>
            <Tippy content="React" followCursor={true} placement="top">
              <div className='icon'>
                <SiReact className="react" />
              </div>
            </Tippy>
            <Tippy content="Angular" followCursor={true} placement="top">
              <div className='icon'>
                <SiAngular className="angular" />
              </div>
            </Tippy>
            <Tippy content="MS SQL / Azure SQL" followCursor={true} placement="top">
              <div className='icon combined-icon'>
                <div className='sql'>
                  <FaDatabase />
                </div>
              </div>
            </Tippy>
          </div>
        </div>
      </Element>
    </>
  );
}

export default TechStackSection;
