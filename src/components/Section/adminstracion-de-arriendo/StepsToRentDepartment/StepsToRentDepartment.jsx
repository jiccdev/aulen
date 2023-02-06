import React from 'react';
import HeaderSection from '../../../../../src/components/Section/HeaderSection';
import StepItem from '../../../../../src/components/Card/StepItem';
// import FadeComponent from '../../../Reveal/FadeComponent';
import { stepsToRentDepartmentData } from '../../../../api/fakeData/stepsToRentDepartment';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../../../../../styles/components/administracion-de-arriendo/SoldHome.module.css';

const StepsToRentDepartment = () => {
  return (
    <Row className={styles.rowContainer}>
      <Col xl={8} className={styles.col}>
        <HeaderSection titleSection="¡Manten tú depa ocupado y a tí desocupado!" />

        {/* <FadeComponent bottom cascade duration={1400}> */}
          <Row className={styles.rowItems}>
            {stepsToRentDepartmentData &&
              stepsToRentDepartmentData.map((step) => (
                <StepItem key={step?.id} step={step} />
              ))}
          </Row>
        {/* </FadeComponent> */}
      </Col>
    </Row>
  );
};

export default StepsToRentDepartment;
