import React from 'react';
import HeadPage from '../../src/components/HeadPage/HeadPage';
import LayoutSection from '../../src/components/Section/LayoutSection';
import MapProperties from '../../src/components/Section/propiedades/MapProperties';

const MapsProperties = () => {
  return (
    <LayoutSection>
      {/* SECCIÓN PROPERTIES MAP */}
      <HeadPage title="Propiedades en Mapa" description="Mapa de Propiedades" />

      <MapProperties />
    </LayoutSection>
  );
};

export default MapsProperties;
