import React, { Fragment, useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Inicio from './inicio';

import PlanFrom from '../src/components/Form/PlanFrom';
import House from '../src/img/soy-propietario/house.jpg';
import HeadPage from '../src/components/HeadPage/HeadPage';
import styles from '../styles/Inicio.module.css';
import { icons } from '../src/components/Icons';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  /** Icon desctructuring  */
  const { FaUserAlt } = icons;

  return (
    <Fragment>
      <HeadPage title="Inicio" />

      {/* INICIO */}
      <Inicio />
    </Fragment>
  );
};

export default Home;
