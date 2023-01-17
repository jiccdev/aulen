import React, { Fragment, useState, useContext, useEffect } from 'react';
import PropertiesContext from '../../src/context/properties/PropertiesContext';
import HeadPage from '../../src/components/HeadPage/HeadPage';
import LayoutSection from '../../src/components/Section/LayoutSection';
import Departments from '../../src/components/Section/propiedades/Departments';

const Propiedades = () => {
  const { properties, property, getProperties } = useContext(PropertiesContext);
  const [realtorId, setRealtorId] = useState(1);
  const [statusId, setStatusId] = useState(1);

  useEffect(() => {
    // getProperties(realtorId, statusId);
    getProperties(5, 5);
  }, []);

  return (
    <Fragment>
      <HeadPage title="Propiedades" />

      {/* DEPARTAMENTOS */}
      <LayoutSection>
        <Departments
          data={properties}
          dataProperty={property}
          realtorId={realtorId}
          statusId={statusId}
        />
      </LayoutSection>
    </Fragment>
  );
};

export default Propiedades;
