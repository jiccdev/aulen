import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutSection from '../../../src/components/Section/LayoutSection';
import CustomerExperience from '../../../src/components/Section/adminstracion-de-arriendo/CustomerExperience/CustomerExperience';
import HeaderSection from '../../../src/components/Section/unidades-en-remate/HeaderSection';
import { InvestmentForm } from '../../../src/components/InvestmentForm/InvestmentForm';
import { investmentFormData } from '../../../src/api/fakeData/investmentForm';
import HeroSection from '../../../src/components/Section/unidades-en-remate/HeroSection';
import HeadPage from '../../../src/components/HeadPage/HeadPage';

export const UnidadesEnRemate = () => {
  return (
    <>
      <HeadPage title="Unidades en remate" />

      <LayoutSection>
        <HeaderSection />
      </LayoutSection>

      <LayoutSection>
        <HeroSection />
      </LayoutSection>

      <LayoutSection>
        {investmentFormData.length > 0
          ? investmentFormData.map((el, index) => (
              <InvestmentForm key={index} formData={el} isForm />
            ))
          : null}
      </LayoutSection>

      <LayoutSection>
        <CustomerExperience />
      </LayoutSection>
    </>
  );
};

export default UnidadesEnRemate;
