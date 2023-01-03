import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../../../../styles/components/propiedades/PropiedadDestacada.module.css';

const OutstandingProject = ({ ...props }) => {
  return (
    <Col>
      <Card>
        <Link href={`/propiedades/${props.cod}`} className={styles.link}>
          <Image
            src={props.image}
            alt={`imagen-destacada-${props.name}`}
            priority
            className={styles.outstandingProject__image}
            height={220}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              height: '100px',
              width: '100%',
            }}
          />
          <p className={styles.deptName}>{props.name}</p>
          <span className={styles.code}>Cod: {props.cod}</span>
        </Link>
      </Card>
    </Col>
  );
};

export default OutstandingProject;
