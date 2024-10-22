import './homepage.css';
import React from 'react';
import PrimarySection from './home/primary-section';
import CompanyDescSection from './home/company-desc-section';
import ServicesSection from './home/services-section';
import TechStackSection from './home/tech-stack-section';
import UsDescSection from './home/us-desc-section';
import ValuesDescSection from './home/values-desc-section';

const HomePage = () => {
  return (
    <div className='home-page'>
      {/* Sección del video */}
      <PrimarySection></PrimarySection>
      <ServicesSection></ServicesSection>
      {/* <CompanyDescSection></CompanyDescSection>
      <TechStackSection></TechStackSection>
      <UsDescSection></UsDescSection>
      <ValuesDescSection></ValuesDescSection>  */}
      {/* Sección de servicios */}
      
    </div>
  );
};
export default HomePage;
