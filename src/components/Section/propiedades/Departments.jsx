import React, { useState } from 'react';
import Link from 'next/link';
import RSelect from '../../RSelect/RSelect';
import AdvancedSearchForm from '../../Form/AdvancedSearchForm';
import DepartmentItem from './DepartmentItem';
import OutstandingProjects from './OutstandingProjects';
import IconFilter from '../../IconFilter/IconFilter';
import { icons } from '../../Icons/index.js';
import { orderDepartmentBy } from '../../../api/fakeData/selects';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../../../../styles/components/propiedades/Departments.module.css';

const Departments = ({ data, realtorId, statusId }) => {
  const [isGrid, setIsGrid] = useState(false);
  const [isList, setIsList] = useState(false);
  const { BiMap } = icons;

  const onOrderDepartmentByChange = (option) => {
    console.log(option);
    console.log(orderDepartmentBy[0]);
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
        <div className={styles.containerForm}>
          <form>
            <RSelect
              options={orderDepartmentBy}
              defaultValue={orderDepartmentBy[0]}
              onChange={onOrderDepartmentByChange}
            />
          </form>
        </div>

        <div>
          {/* FILTAR PROPIEDADES */}
          <IconFilter
            isGrid={isGrid}
            setIsGrid={setIsGrid}
            isList={isList}
            setIsList={setIsList}
          />
        </div>
      </div>

      <Col xl={9} className={styles.col}>
        <Row className={styles.rowItems}>
          {data &&
            data.map((department) => (
              <DepartmentItem
                key={department?.id}
                department={department}
                isGrid={isGrid}
                isList={isList}
                realtorId={realtorId}
                statusId={statusId}
              />
            ))}
        </Row>
      </Col>

      <Col xl={3} className={styles.colForm}>
        {/* BÚSQUEDA AVANZADA */}
        <AdvancedSearchForm />

        {/* PROYECTOS DESTACADOS */}
        <OutstandingProjects
          data={data}
          realtorId={realtorId}
          statusId={statusId}
        />
      </Col>
    </Row>
  );
};

export default Departments;
