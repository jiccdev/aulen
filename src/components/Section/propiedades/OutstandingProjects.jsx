import React from 'react';
import OutstandingProject from './OutstandingProject';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import styles from '../../../../styles/components/propiedades/PropiedadesDestacadas.module.css';

const OutstandingProjects = ({ data }) => {
  console.log('dataXd', data);

  return (
    <Row className={styles.row}>
      <h2 className={styles.titleSection}>Proyectos destacados</h2>
      {data?.length > 0 ? (
        data
          .filter((property) => property?.status === 'Pendiente visacion')
          .slice(0, 2)
          .map((department) => (
            <OutstandingProject key={department.id} data={department} />
          ))
      ) : (
        <p>No existen propiedades destacadas</p>
      )}
    </Row>
  );
};

export default OutstandingProjects;
