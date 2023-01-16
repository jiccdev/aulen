import React from 'react';
import LayoutSection from '../../src/components/Section/LayoutSection';
import Principal from '../../src/components/Section/inicio/Prinicipal';
import Lease from '../../src/components/Section/inicio/Lease';
import Steps from '../../src/components/Section/inicio/Steps';
import Investing from '../../src/components/Section/inicio/Investing';
import NewProperties from '../../src/components/Section/inicio/NewProperties';

const Inicio = () => {
  return (
    <LayoutSection>
      {/* SECCIÓN PRINCIPAL */}
      <Principal />

      {/* ARRIENDO POR TÍ */}
      <Lease />

      {/* VENTA DE PROPIEDAD EN 4 PASOS */}
      <Steps />

      {/* INVERTIR EN INMUEBLES CON AULEN */}
      <Investing />

      {/* PROPIEDADES NUEVAS */}
      <NewProperties />
    </LayoutSection>
  );
};

export default Inicio;
