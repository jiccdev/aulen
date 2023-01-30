import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import LayoutSection from "../../../src/components/Section/LayoutSection";


import CustomerExperience from "../../../src/components/Section/adminstracion-de-arriendo/CustomerExperience/CustomerExperience.jsx";
import HeroSection from "../../../src/components/Section/quiero-arrendar/HeroSection/HeroSection";
import WhyLease from "../../../src/components/Section/quiero-arrendar/WhyLease/WhyLease";
import HeadPage from "../../../src/components/HeadPage/HeadPage";
export const QuieroVender = () => {
    return(
        <>
          <HeadPage title="Quiero arrendar" />

          <LayoutSection>
            <HeroSection />
          </LayoutSection>

          <LayoutSection>
            <WhyLease />
          </LayoutSection>

          <LayoutSection >
            <CustomerExperience />
          </LayoutSection>
        </>
    )
}

export default QuieroVender