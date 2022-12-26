import React, { Fragment } from 'react';
import HeadPage from '../../src/components/HeadPage/HeadPage';
import Plans from '../../src/components/Section/adminstracion-de-arriendo/Plans/Plans';
import CustomerExperience from '../../src/components/Section/adminstracion-de-arriendo/CustomerExperience/CustomerExperience';
import LayoutSection from '../../src/components/Section/LayoutSection';

const AdministracionDeArriendo = () => {
  return (
    <Fragment>
      <HeadPage title="Administración de arriendo" />

      {/* CONOCE NUESTROS PLANES */}
      <LayoutSection>
        <Plans />
      </LayoutSection>

      {/* CONOCE LA EXPERIENCIA DE NUESTROS CLIENTES */}
      <LayoutSection>
        <CustomerExperience />
      </LayoutSection>
    </Fragment>
  );
};

export default AdministracionDeArriendo;
