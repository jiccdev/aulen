import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import PropertiesContext from '../../src/context/properties/PropertiesContext';
import SlickComponents from '../../src/components/Slick/SlickComponents';

/** Bootstrap componets */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from '../../styles/components/Slick.module.css';

const PropiedadId = () => {
  const { query } = useRouter();
  const { propertyId } = query;
  const { contextData } = useContext(PropertiesContext);
  const [data] = contextData;

  return (
    <Container>
      <h2>Departamento {propertyId}</h2>
      <SlickComponents />
    </Container>
  );
};

export default PropiedadId;
