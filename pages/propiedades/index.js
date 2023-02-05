import React, { Fragment, useState, useContext, useEffect } from 'react';
import PropertiesContext from '../../src/context/properties/PropertiesContext';
import HeadPage from '../../src/components/HeadPage/HeadPage';
import LayoutSection from '../../src/components/Section/LayoutSection';
import Departments from '../../src/components/Section/propiedades/Departments';

const Propiedades = () => {
  const {
    properties,
    setProperties,
    property,
    getProperties,
    newProperties,
    setNewProperties,
  } = useContext(PropertiesContext);
  const [realtorId, setRealtorId] = useState(1);
  const [statusId, setStatusId] = useState(1);

  useEffect(() => {
    // getProperties(realtorId, statusId);
    getProperties(5, 5);
  }, []);

  // console.log('properties: ', properties);

  return (
    <Fragment>
      <HeadPage title="Propiedades" />

      {/* DEPARTAMENTOS */}
      <LayoutSection>
        <Departments
          data={properties}
          setProperties={setProperties}
          dataProperty={property}
          realtorId={realtorId}
          statusId={statusId}
          getProperties={getProperties}
          newProperties={newProperties}
          setNewProperties={setNewProperties}
        />
      </LayoutSection>
    </Fragment>
  );
};

export default Propiedades;
