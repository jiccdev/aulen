import React, { Fragment, useEffect, useContext } from 'react';
import PropertiesContext from '../src/context/properties/PropertiesContext';

import HeadPage from '../src/components/HeadPage/HeadPage';
import styles from '../styles/Inicio.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Inicio = () => {
  const { properties, getProperties } = useContext(PropertiesContext);

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <Fragment>
      <HeadPage title="Inicio" />

      <section>
        <h1 className={styles.title}>Inicio</h1>
      </section>
    </Fragment>
  );
};

export default Inicio;
