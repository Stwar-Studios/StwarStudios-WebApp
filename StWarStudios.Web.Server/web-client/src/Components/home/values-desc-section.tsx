import './values-desc-section.css'
import { Element } from 'react-scroll';
import { FaRegHeart, FaShieldAlt, FaRegHandshake, 
  FaHourglassHalf 
  } from 'react-icons/fa';
import { useTranslations  } from '../translation-provider';


const valuesIconSize = 75;
const iconMapping : any= {
  shield: FaShieldAlt,
  heart: FaRegHeart,
  hourglass: FaHourglassHalf,
  handshake: FaRegHandshake
};
function ValuesDescSection()
{
  const { valuesDescSection } = useTranslations(); 
  const values = valuesDescSection.values as [];
  return (
    <Element name="values-desc" className="values-desc text-dark">
      <div className="">
        <h1 className='text-center'><strong>{valuesDescSection.title}</strong></h1>
        <div className='desc-content'>
          {values.map((val : {title:string, color : string, description : string, icon : string}, index) => {
            const IconComponent = iconMapping[val.icon] || FaShieldAlt; // Si no hay icono, usar el por defecto

            return (
              <div className='values-item' key={index}>
                <IconComponent className='img' size={valuesIconSize} color={val.color} title={val.title} />
                <h2><strong>{val.title}</strong></h2>
                <div className='value-body'>
                  {val.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Element>
  );
}
export default ValuesDescSection;