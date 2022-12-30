import React from 'react';
import styles from '../../../styles/SoyPropietario.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PublishingForm } from '../../../src/components/PublishingForm/PublishingForm';
import LayoutSection from '../../../src/components/Section/LayoutSection';
import Plans from '../../../src/components/Section/adminstracion-de-arriendo/Plans/Plans';
import CustomerExperience from '../../../src/components/Section/adminstracion-de-arriendo/CustomerExperience/CustomerExperience';
import HeroSection from '../../../src/components/Section/quiero-vender/HeroSection/HeroSection';
import StepsSection from '../../../src/components/Section/quiero-vender/StepsSection/StepsSection';


const QuieroVender = () => {
  return (
    <>
      <LayoutSection>
        <HeroSection />
      </LayoutSection>

      <LayoutSection>
        <StepsSection />
      </LayoutSection>

      <main>
        <h2>Conoce nuestros planes</h2>
        {/* <LayoutSection>
            <Plans />
        </LayoutSection> */}
      </main>
        <LayoutSection>
          <CustomerExperience />
        </LayoutSection>
    </>

  );
};

export default QuieroVender;