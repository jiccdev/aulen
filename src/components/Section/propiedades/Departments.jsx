import React from 'react';
import Link from 'next/link';
import RSelect from '../../RSelect/RSelect';
import AdvancedSearchForm from '../../Form/AdvancedSearchForm';
import DepartmentItem from './DepartmentItem';
import OutstandingProjects from './OutstandingProjects';
import { icons } from '../../Icons/index.js';
import { propertiesData } from '../../../api/fakeData/properties';
import { orderDepartmentBy } from '../../../api/fakeData/selects';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../../../../styles/components/propiedades/Departments.module.css';

const Departments = () => {
  const { BiMap } = icons;

  const onOrderDepartmentByChange = (option) => {
    console.log(orderDepartmentBy[0]);
    console.log(option);
  };

  return (
    <Row className={styles.rowContainer}>
      <div className={styles.headerProperties}>
        <div>
          <h1 className={styles.title}>Departamentos</h1>
        </div>
        <div>
          <Link href="/" className={styles.urlViewMap}>
            <span className={styles.spanMapIcon}>
              <BiMap />
            </span>
            Ver mapa
          </Link>
        </div>
        <div>
          <RSelect
            options={orderDepartmentBy}
            defaultValue={orderDepartmentBy[0]}
            onChange={onOrderDepartmentByChange}
          />
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
        {/* BÚSQUEDA AVANZADA */}
        <AdvancedSearchForm />

        {/* PROYECTOS DESTACADOS */}
        <OutstandingProjects />
      </Col>
    </Row>
  );
};

export default Departments;
