import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutSection from '../../../src/components/Section/LayoutSection';
import Plans from '../../../src/components/Section/adminstracion-de-arriendo/Plans/Plans';
import CustomerExperience from '../../../src/components/Section/adminstracion-de-arriendo/CustomerExperience/CustomerExperience';
import HeroSection from '../../../src/components/Section/quiero-vender/HeroSection/HeroSection';
import StepsSection from '../../../src/components/Section/quiero-vender/StepsSection/StepsSection';
import HeadPage from '../../../src/components/HeadPage/HeadPage';

const QuieroVender = () => {
  return (
    <>
      <HeadPage title="Quiero vender" />
      <LayoutSection>
        <HeroSection />
      </LayoutSection>

      <LayoutSection>
        <StepsSection />
      </LayoutSection>

      <LayoutSection>
        <Plans />
      </LayoutSection>

      <LayoutSection>
        <CustomerExperience />
      </LayoutSection>
    </>

  );
};

export default QuieroVender;