import React from 'react';
import TableDetails from './TableDetails';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../../../../styles/components/propiedades/details/Characteristics.module.css';

const Characteristics = ({ propertyData }) => {
  return (
    <div className={styles.characteristicsContainer}>
      <h2>Características</h2>
      <Row>
        <Col lg={7}>
          <h6>Descripción</h6>
          <p>{propertyData?.description || 'Sin descripción'}</p>
        </Col>
        <Col lg={5}>
          <TableDetails propertyData={propertyData} />
        </Col>
      </Row>
    </div>
  );
};

export default Characteristics;
