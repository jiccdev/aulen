import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutSection from "../../../src/components/Section/LayoutSection";
import CustomerExperience from "../../../src/components/Section/adminstracion-de-arriendo/CustomerExperience/CustomerExperience";
import HeaderSection from "../../../src/components/Section/unidades-en-remate/HeaderSection";


export const UnidadesEnRemate = () =>{
  return(
    <>
    <LayoutSection>
      <HeaderSection />
    </LayoutSection>

    <LayoutSection>
      <CustomerExperience />
    </LayoutSection>
    </>
  )
}


export default UnidadesEnRemate