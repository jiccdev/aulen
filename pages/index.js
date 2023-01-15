import React, { Fragment, useState, useEffect, useContext } from 'react';
import Inicio from './inicio';
import Lease from '../src/components/Section/inicio/Lease';

import HeadPage from '../src/components/HeadPage/HeadPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <Fragment>
      <HeadPage title="Inicio" />

      {/* INICIO */}
      <Inicio />

      {/* NOS ENCARGAMOS DE TÚ ARRIENDO POR TÍ */}
      <Lease />
    </Fragment>
  );
};

export default Home;
