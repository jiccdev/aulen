import React from "react";
import CustomerExperience from "../../../src/components/Section/adminstracion-de-arriendo/CustomerExperience/CustomerExperience";
import LayoutSection from "../../../src/components/Section/LayoutSection";

import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from "../../../src/components/Section/quiero-arrendar/HeroSection/HeroSection";
import WhyLease from "../../../src/components/Section/quiero-arrendar/WhyLease/WhyLease";
export const QuieroVender = () => {
    return(
        <>
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