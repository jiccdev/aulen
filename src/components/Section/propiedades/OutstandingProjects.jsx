import React from 'react';
import { propertiesData } from '../../../api/fakeData/properties';
import OutstandingProject from './OutstandingProject';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../../../../styles/components/propiedades/PropiedadesDestacadas.module.css';

const OutstandingProjects = () => {
  return (
    <Row className={styles.row}>
      <h2 className={styles.titleSection}>Proyectos destacados</h2>
      {propertiesData?.length > 0 ? (
        propertiesData
          .filter((property) => property?.status?.name === 'Destacado')
          .slice(0, 2)
          .map(({ cod, name, image }) => (
            <OutstandingProject key={cod} cod={cod} name={name} image={image} />
          ))
      ) : (
        <p>No existen propiedades destacadas</p>
      )}
    </Row>
  );
};

export default OutstandingProjects;
