import './tech-stack-section.css'
import { Element } from 'react-scroll';
import { Tooltip } from 'react-tooltip'
import { SiMicrosoftazure, SiDotnet, SiBlazor, SiAngular, SiReact } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

const iconSize = 76; // Variable para el tamaño del icono
const floatTooltip = true; // Variable para el atributo float

function TechStackSection()
{
 return <>
    <Element name="tech-stack" className="tech-stack text-white" > 
        <div className="container">
          <h1 className='text-center mb-5'>Nuestro stack tecnol&oacute;gico</h1>
          <div className="icons">
            <div data-tooltip-id="blazor-tooltip" data-tooltip-content="Blazor" className='icon'>
              <SiBlazor className="blazor" size={iconSize} />
              <Tooltip float={floatTooltip} place="top" id="blazor-tooltip" />
            </div>
            <div data-tooltip-id="azure-tooltip" data-tooltip-content="Microsoft Azure" className='icon'>
              <SiMicrosoftazure className="azure" size={iconSize} />
              <Tooltip float={floatTooltip} place="top" id="azure-tooltip" />
            </div>
            <div data-tooltip-id="dotnet-tooltip" data-tooltip-content=".NET" className='icon'>
              <SiDotnet className="dotnet" size={iconSize} />
              <Tooltip float={floatTooltip} place="top" id="dotnet-tooltip" />
            </div>
            <div data-tooltip-id="react-tooltip" data-tooltip-content="React" className='icon'>
              <SiReact className="react" size={iconSize} />
              <Tooltip float={floatTooltip} place="top" id="react-tooltip" />
            </div>
            <div data-tooltip-id="angular-tooltip" data-tooltip-content="Angular" className='icon'>
              <SiAngular className="angular" size={iconSize} />
              <Tooltip float={floatTooltip} place="top" id="angular-tooltip" />
            </div>
            <div data-tooltip-id="sql-tooltip" data-tooltip-content="MS SQL / Azure SQL" className='icon combined-icon'>
              <div className='sql'>
              <FaDatabase className="" size={iconSize} />
              </div>
              <Tooltip float={floatTooltip} place="top" id="sql-tooltip" />
            </div>
          </div>
          </div>        
        </Element>
 </>
}
export default TechStackSection;