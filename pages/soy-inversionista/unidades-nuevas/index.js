import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { InvestmentForm } from "../../../src/components/InvestmentForm/InvestmentForm";
import { investmentFormData } from "../../../src/api/fakeData/investmentForm"
import styles from '../../../styles/components/soy-inversionista/unidades-nuevas/Main.module.css'
import LayoutSection from "../../../src/components/Section/LayoutSection";
import Header from "../../../src/components/Section/unidades-nuevas/Header/Header";
import Departments from "../../../src/components/Section/propiedades/Departments";
export const UnidadesNuevas = () => {
  return(
    <Fragment classname={`${styles.html}`}>
    <LayoutSection>
      <Header />
    </LayoutSection>

    <LayoutSection />
    {investmentFormData.length > 0 ?
      investmentFormData.map(el =>
        <InvestmentForm formData={el} />
        ) : null
      }
    <LayoutSection />

    <LayoutSection>
      <div id="apartments"></div>
      <Departments />
    </LayoutSection>
    
    </Fragment>
  )
}
export default UnidadesNuevas