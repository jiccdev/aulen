import React, { Fragment, useEffect, useContext } from 'react';
import PropertiesContext from '../src/context/properties/PropertiesContext';

import HeadPage from '../src/components/HeadPage/HeadPage';
import Button from 'react-bootstrap/Button';
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

      <h1 className={styles.title}>Hellow world</h1>
      <Button as="a" variant="primary">
        Button as link
      </Button>
    </Fragment>
  );
};

export default Inicio;
