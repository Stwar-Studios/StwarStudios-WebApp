import './company-desc-section.css';
import { Element } from 'react-scroll';
import { useTranslations  } from '../translation-provider';

function CompanyDescSection() {
  const { companyDescSection } = useTranslations();

  return (
    <Element name="company-desc" className="company-desc text-dark p-4 w-100">
      <div className="p-md-3">
        <h2 className='mb-5'>{companyDescSection.title}</h2>
        <div className='desc-content'>
          {companyDescSection.description}
        </div>
      </div>
    </Element>
  );
}

export default CompanyDescSection;