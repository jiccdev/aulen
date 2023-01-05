import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import PropertiesContext from '../../src/context/properties/PropertiesContext';
import GalleryCarousel from '../../src/components/GalleryCarousel/GalleryCarousel';

/** Bootstrap componets */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const PropiedadId = () => {
  const { query } = useRouter();
  const { propertyId } = query;
  const { contextData } = useContext(PropertiesContext);
  const [data] = contextData;

  console.log(data);

  return (
    <Container>
      <h2>Departamento {propertyId}</h2>

      <Row>
        <Col xs={12} md={7}>
          <GalleryCarousel data={data} />
        </Col>

        <Col xs={12} md={5}>
          Más Información
        </Col>
      </Row>
    </Container>
  );
};

export default PropiedadId;
