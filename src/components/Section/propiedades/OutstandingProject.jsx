import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { truncateStringSmall } from '../../../utils';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../../../../styles/components/propiedades/PropiedadDestacada.module.css';

const OutstandingProject = ({ data, realtorId, statusId }) => {
  return (
    <Col>
      <Card>
        <Link
          href={`/propiedades/${data.id}?realtorId=${realtorId}&statusId=${statusId}`}
          className={styles.link}
        >
          {/* <Image
            src={data.image}
            alt={`imagen-destacada-${data.title}`}
            priority
            className={styles.outstandingProject__image}
            height={220}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              height: '100px',
              width: '100%',
            }}
          /> */}
          <img
            src={data?.image}
            alt={`imagen-departamento-${data?.title}`}
            className={styles.outstandingProject__image}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              height: '100px',
              width: '100%',
            }}
          />
          <p className={styles.deptName}>
            {truncateStringSmall(data.title) || ''}
          </p>
          <span className={styles.code}>Cod: {data.id}</span>
        </Link>
      </Card>
    </Col>
  );
};

export default OutstandingProject;
