import React from 'react';
import Link from 'next/link';
import { propertiesData } from '../../../api/fakeData/properties';
import AdvancedSearchForm from '../../Form/AdvancedSearchForm';
import DepartmentItem from './DepartmentItem';
import { icons } from '../../Icons/index.js';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../../../../styles/components/propiedades/Departments.module.css';

const Departments = () => {
  const { BiMap } = icons;
  return (
    <Row className={styles.rowContainer}>
      <div className={styles.headerProperties}>
        <div>
          <h1 className={styles.title}>Departamentos</h1>
        </div>
        <div>
          <Link href="/" className={styles.urlViewMap}>
            <span>
              <BiMap />
            </span>
            Ver mapa
          </Link>
        </div>
        <div>
          Ordenar por:
          <select>
            <option>Menor precio</option>
            <option>Mayor precio</option>
            <option>Menor superficie</option>
            <option>Mayor superficie</option>
          </select>
        </div>
      </div>
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
