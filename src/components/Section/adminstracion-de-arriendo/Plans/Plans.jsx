import React, { Fragment } from 'react';
import HeadPage from '../../../../../src/components/HeadPage/HeadPage';
import HeaderSection from '../../../../../src/components/Section/HeaderSection';
import CardItem from '../../../../../src/components/Card/ItemCard';
import PlanFrom from '../../../../../src/components/Form/PlanFrom';
import { plansData } from '../../../../../src/api/fakeData/plans';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../../../../styles/AdministracionDeArriendo.module.css';

const Plans = () => {
  return (
    <Row className={styles.rowContainer}>
      <Col xl={8} className={styles.col}>
        <HeaderSection titleSection="Conoce nuestros planes" />

        <Row className={styles.rowItems}>
          {plansData &&
            plansData.map((plan) => <CardItem key={plan?.id} plan={plan} />)}
        </Row>
      </Col>

      <Col xl={4} className={styles.colForm}>
        <PlanFrom />
      </Col>
    </Row>
  );
};

export default Plans;
