import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutSection from "../../../src/components/Section/LayoutSection";
import CustomerExperience from "../../../src/components/Section/adminstracion-de-arriendo/CustomerExperience/CustomerExperience";
import HeaderSection from "../../../src/components/Section/unidades-en-remate/HeaderSection";
import { InvestmentForm } from "../../../src/components/InvestmentForm/InvestmentForm";
import { investmentFormData } from "../../../src/api/fakeData/investmentForm";


export const UnidadesEnRemate = () =>{
  return(
    <>
    <LayoutSection>
      <HeaderSection />
    </LayoutSection>

    <LayoutSection>
      {investmentFormData.length > 0 ?
      investmentFormData.map(el =>
        <InvestmentForm formData={el} />
        ) : null
      }
    </LayoutSection>

    <LayoutSection>
      <CustomerExperience />
    </LayoutSection>
    </>
  )
}


export default UnidadesEnRemate