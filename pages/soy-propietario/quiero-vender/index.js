import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutSection from '../../../src/components/Section/LayoutSection';
import Plans from '../../../src/components/Section/adminstracion-de-arriendo/Plans/Plans';
import CustomerExperience from '../../../src/components/Section/adminstracion-de-arriendo/CustomerExperience/CustomerExperience';
import HeroSection from '../../../src/components/Section/quiero-vender/HeroSection/HeroSection';
import StepsSection from '../../../src/components/Section/quiero-vender/StepsSection/StepsSection';
import HeadPage from '../../../src/components/HeadPage/HeadPage';

import Layout from '../../../pages/soy-propietario/quiero-vender/Layout';

const QuieroVender = () => {
  return (
    <React.Fragment>
      <HeadPage title="Quiero vender" />

      <Layout>
        <LayoutSection>
          <HeroSection />
        </LayoutSection>

        <LayoutSection>
          <StepsSection />
        </LayoutSection>

        <LayoutSection>
          <Plans />
        </LayoutSection>
      </Layout>

      <LayoutSection>
        <CustomerExperience />
      </LayoutSection>
    </React.Fragment>
  );
};

export default QuieroVender;
