import React from 'react';
import HeaderSection from '../../src/components/Section/HeaderSection';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AdministracionDeArriendo = () => {
  return (
    <Row>
      <Col lg={8}>
        <Row>
          <Col md={4}>Card 1</Col>
          <Col md={4}>Card 2</Col>
          <Col md={4}>Card 3</Col>
        </Row>
      </Col>
      <Col lg={4}>
        <form>
          ¡Despreocúpate por tu propiedad de inversión! COMPLETA EL FORMULARIO Y
          ENTÉRATE CÓMO
        </form>
      </Col>
    </Row>
  );
};

export default AdministracionDeArriendo;
