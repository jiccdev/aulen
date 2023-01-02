import React, { Fragment } from 'react';
import HeadPage from '../../src/components/HeadPage/HeadPage';
import LayoutSection from '../../src/components/Section/LayoutSection';
import Departments from '../../src/components/Section/propiedades/Departments';

const Propiedades = () => {
  return (
    <Fragment>
      <HeadPage title="Propiedades" />

      {/* DEPARTAMENTOS */}
      <LayoutSection>
        <Departments />
      </LayoutSection>
    </Fragment>
  );
};

export default Propiedades;
