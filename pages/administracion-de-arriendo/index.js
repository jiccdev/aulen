import React, { Fragment } from 'react';
import HeadPage from '../../src/components/HeadPage/HeadPage';
import LayoutSection from '../../src/components/Section/LayoutSection';
import Plans from '../../src/components/Section/adminstracion-de-arriendo/Plans/Plans';
import CustomerExperience from '../../src/components/Section/adminstracion-de-arriendo/CustomerExperience/CustomerExperience';
import StepsToRentDepartment from '../../src/components/Section/adminstracion-de-arriendo/StepsToRentDepartment/StepsToRentDepartment';
import SoldHome from '../../src/components/Section/adminstracion-de-arriendo/SoldHome/SoldHome';

const AdministracionDeArriendo = () => {
  return (
    <Fragment>
      <HeadPage title="Administración de arriendo" />

      {/* CONOCE NUESTROS PLANES */}
      <LayoutSection>
        <Plans />
      </LayoutSection>

      {/* PASOS PARA ARRENDAR UN DEPARTAMENTO */}
      <LayoutSection>
        <StepsToRentDepartment />
      </LayoutSection>

      {/* CASA VENDIDA */}
      <LayoutSection>
        <SoldHome />
      </LayoutSection>

      {/* CONOCE LA EXPERIENCIA DE NUESTROS CLIENTES */}
      <LayoutSection>
        <CustomerExperience />
      </LayoutSection>
    </Fragment>
  );
};

export default AdministracionDeArriendo;
