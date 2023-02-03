import React, { Fragment } from 'react';
import Inicio from './inicio';
import HeadPage from '../src/components/HeadPage/HeadPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <Fragment>
      <HeadPage title="Inicio" />

      {/* INICIO */}
      <Inicio />
    </Fragment>
  );
};

export default Home;
