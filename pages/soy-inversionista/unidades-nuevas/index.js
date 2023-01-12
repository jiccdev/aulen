import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutSection from "../../../src/components/Section/LayoutSection";
import Header from "../../../src/components/Section/unidades-nuevas/Header/Header";
import Departments from "../../../src/components/Section/propiedades/Departments";
export const UnidadesNuevas = () => {
  return(
    <>
    <LayoutSection>
      <Header />
    </LayoutSection>

    <LayoutSection>
      <Departments />
    </LayoutSection>
    </>
  )
}
export default UnidadesNuevas