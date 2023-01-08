import React from 'react';
import HeaderSection from '../../../../../src/components/Section/HeaderSection';
import CardItem from '../../../../../src/components/Card/ItemCard';
import { plansData } from '../../../../../src/api/fakeData/plans';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../../../../styles/AdministracionDeArriendo.module.css';

const Plans = () => {
  return (
    <Row className={styles.rowContainer}>
      <Col md={12} xl={9} className={styles.col}>
        <HeaderSection titleSection="Conoce nuestros planes" />

        <Row className={styles.rowItems}>
          {plansData &&
            plansData.map((plan) => <CardItem key={plan?.id} plan={plan} />)}
        </Row>
      </Col>
    </Row>
  );
};

export default Plans;
