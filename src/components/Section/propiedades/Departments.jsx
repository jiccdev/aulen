import React from 'react';
import { propertiesData } from '../../../api/fakeData/properties';
import AdvancedSearchForm from '../../Form/AdvancedSearchForm';
import DepartmentItem from './DepartmentItem';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../../../../styles/components/propiedades/Departments.module.css';

const Departments = () => {
  return (
    <Row className={styles.rowContainer}>
      <Col xl={9} className={styles.col}>
        <Row className={styles.rowItems}>
          {propertiesData &&
            propertiesData.map((department) => (
              <DepartmentItem key={department?.cod} department={department} />
            ))}
        </Row>
      </Col>

      <Col xl={3} className={styles.colForm}>
        <AdvancedSearchForm />
      </Col>
    </Row>
  );
};

export default Departments;
