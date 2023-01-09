import React from 'react';
import TableDetails from './TableDetails';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../../../../styles/components/propiedades/details/Characteristics.module.css';

const Characteristics = ({ filtredData }) => {
  console.log('filtredDataaa', filtredData);

  return (
    <div className={styles.characteristicsContainer}>
      <h2>Características</h2>
      <Row>
        <Col lg={7}>
          <h6>Descripción</h6>
          <p>
            ¡Esta propiedad participa en el sorteo de un año de arriendo gratis!
          </p>
          <p>
            ¡Esta propiedad participa en el sorteo de un año de arriendo gratis!
          </p>
          <p>
            ¡WOW! Esta propiedad está con descuento: 50.00% de descuento por los
            primeros 2 meses, preguntar por los detalles de la promoción.. Este
            descuento no considera los gastos comunes. Los descuentos se aplican
            sobre el valor publicado Esta unidad no cuenta con bodega y/o
            estacionamiento
          </p>
        </Col>
        <Col lg={5}>
          <TableDetails />
        </Col>
      </Row>
    </div>
  );
};

export default Characteristics;
