import React from 'react';
import HeaderSection from '../../../../../src/components/Section/HeaderSection';
import StepItem from '../../../../../src/components/Card/StepItem';
import { stepsToRentDepartmentData } from '../../../../api/fakeData/stepsToRentDepartment';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styles from '../../../../../styles/components/administracion-de-arriendo/SoldHome.module.css';

const StepsToRentDepartment = () => {
  return (
    <Row className={styles.rowContainer}>
      <Col xl={8} className={styles.col}>
        <HeaderSection titleSection="Conoce nuestros planes" />

        <Row className={styles.rowItems}>
          {stepsToRentDepartmentData &&
            stepsToRentDepartmentData.map((step) => (
              <StepItem key={step?.id} step={step} />
            ))}
        </Row>
      </Col>
    </Row>
  );
};

export default StepsToRentDepartment;
