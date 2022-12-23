import React, { Fragment } from 'react';
import HeadPage from '../../src/components/HeadPage/HeadPage';
import HeaderSection from '../../src/components/Section/HeaderSection';
import CardItem from '../../src/components/Card/ItemCard';
import { plansData } from '../../src/api/fakeData/plans';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/AdministracionDeArriendo.module.css';

const AdministracionDeArriendo = () => {
  return (
    <Fragment>
      <HeadPage title="Administración de arriendo" />
      <Row className={styles.rowContainer}>
        <Col xl={8} className={styles.col}>
          <Row className={styles.rowItems}>
            <HeaderSection titleSection="Conoce nuestros planes" />
            {plansData &&
              plansData.map((plan) => <CardItem key={plan?.id} plan={plan} />)}
          </Row>
        </Col>

        <Col xl={4}>
          <form>
            ¡Despreocúpate por tu propiedad de inversión! COMPLETA EL FORMULARIO
            Y ENTÉRATE CÓMO
          </form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default AdministracionDeArriendo;
