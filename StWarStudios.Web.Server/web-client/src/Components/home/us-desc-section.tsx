import './us-desc-section.css'
import { Element } from 'react-scroll';
import { FaLaptop} from 'react-icons/fa';
import { useTranslations  } from '../translation-provider';

function UsDescSection() {
  const { usDescSection } = useTranslations(); 

  return (
    <>
      <Element name="us-desc" className="us-desc text-dark">
        <div className="us-content">
          <div className="us-title">
            <h1>
              <strong>{usDescSection.title}</strong>
            </h1>
            <img src="/images/line purple.png" className="us-img" alt="LinePurple" />
          </div>
          <div className="us-content">
            {usDescSection.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
            <p>
              <strong>{usDescSection.closingStatement}</strong>
            </p>
          </div>
        </div>
        <div className="us-icon">
          <FaLaptop size={200} color="#3f3f3f" />
        </div>
      </Element>
    </>
  );
}
export default UsDescSection;