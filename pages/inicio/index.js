import React from 'react';
import LayoutSection from '../../src/components/Section/LayoutSection';
import Principal from '../../src/components/Section/inicio/Prinicipal';
import Lease from '../../src/components/Section/inicio/Lease';
import Steps from '../../src/components/Section/inicio/Steps';

const Inicio = () => {
  return (
    <LayoutSection>
      {/* SECCIÓN PRINCIPAL */}
      <Principal />

      {/* ARRIENDO POR TÍ */}
      <Lease />

      {/* VENTA DE PROPIEDAD EN 4 PASOS */}
      <Steps />
    </LayoutSection>
  );
};

export default Inicio;
