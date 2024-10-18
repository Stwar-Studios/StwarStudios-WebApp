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
          <h1>Nuestro stack tecnol&oacute;gico</h1>
          <div className="icons">
            <div data-tooltip-id="blazor-tooltip" data-tooltip-content="Blazor">
              <SiBlazor className="icon blazor" size={iconSize} />
              <Tooltip float={floatTooltip} place="top" id="blazor-tooltip" />
            </div>
            <div data-tooltip-id="azure-tooltip" data-tooltip-content="Microsoft Azure">
              <SiMicrosoftazure className="icon azure" size={iconSize} />
              <Tooltip float={floatTooltip} place="top" id="azure-tooltip" />
            </div>
            <div data-tooltip-id="dotnet-tooltip" data-tooltip-content=".NET">
              <SiDotnet className="icon dotnet" size={iconSize} />
              <Tooltip float={floatTooltip} place="top" id="dotnet-tooltip" />
            </div>
            <div data-tooltip-id="react-tooltip" data-tooltip-content="React">
              <SiReact className="icon react" size={iconSize} />
              <Tooltip float={floatTooltip} place="top" id="react-tooltip" />
            </div>
            <div data-tooltip-id="angular-tooltip" data-tooltip-content="Angular">
              <SiAngular className="icon angular" size={iconSize} />
              <Tooltip float={floatTooltip} place="top" id="angular-tooltip" />
            </div>
            <div data-tooltip-id="sql-tooltip" data-tooltip-content="MS SQL / Azure SQL" className='combined-icon'>
              <div className='icon sql'>
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