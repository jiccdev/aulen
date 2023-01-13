import React, { Fragment, useState, useContext, useEffect } from 'react';
import PropertiesContext from '../../src/context/properties/PropertiesContext';

import HeadPage from '../../src/components/HeadPage/HeadPage';
import LayoutSection from '../../src/components/Section/LayoutSection';
import Departments from '../../src/components/Section/propiedades/Departments';

const Propiedades = () => {
  const { properties, getProperties } = useContext(PropertiesContext);
  const [realtorId, setRealtorId] = useState(1);
  const [statusId, setStatusId] = useState(1);

  useEffect(() => {
    getProperties(realtorId, statusId);
  }, []);

  console.log('Propiedades index', properties);

  return (
    <Fragment>
      <HeadPage title="Propiedades" />

      {/* DEPARTAMENTOS */}
      <LayoutSection>
        <Departments data={properties} />
      </LayoutSection>
    </Fragment>
  );
};

export default Propiedades;
