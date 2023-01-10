import React from 'react';
import { icons } from '../../../../../components/Icons';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../../../../../styles/components/propiedades/details/tabs/Transportation.module.css';

const TransportationTab = () => {
  const { FaWalking } = icons;

  return (
    <Row className={styles.row}>
      <Col md={6} className={styles.col}>
        <h2>Estaciones de metro</h2>
        <p>
          <span className={styles.icon}>
            <FaWalking />
          </span>
          <span>Las Torres 2 mins- 125 metros</span>
        </p>
      </Col>
      <Col md={6} className={styles.col}>
        <h2>Paraderos</h2>
        <p>
          <span className={styles.icon}>
            <FaWalking />
          </span>
          <span>(M) Las Torres 0 mins - 1 metro</span>
        </p>
        <p>
          <span className={styles.icon}>
            <FaWalking />
          </span>
          <span>Villa Alegre/Las Torres 4 mins - 347 metros</span>
        </p>
      </Col>
    </Row>
  );
};

export default TransportationTab;
