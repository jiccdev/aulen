import React from 'react';
import { useRouter } from 'next/router';

const PropiedadId = () => {
  const { query } = useRouter();
  const { propertyId } = query;

  return <div>Propiedad {propertyId}</div>;
};

export default PropiedadId;
