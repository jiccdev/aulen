import React from 'react';
import Image from 'next/image';
import { parseToCLPCurrency } from '../../../utils';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../../../../styles/components/propiedades/DepartmentItem.module.css';

const DepartmentItem = ({ department }) => {
  const { cod, name, price, image, squareMeters, address } = department;

  return (
    <Col sm={6} md={4} className={styles.col}>
      <Card className={styles.card}>
        <Image
          src={image}
          alt={`imagen-departamento-${name}`}
          width="100%"
          height={200}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
          }}
        />

        <Card.Body className={styles.cardBody}>
          <small>Cod: {cod || ''}</small>
          <Card.Title className={styles.cardTitle}>{name || ''}</Card.Title>
          <p>{address || ''}</p>
          <div>
            <span>
              Venta: {parseToCLPCurrency(price)}/m<sup>2</sup>
            </span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DepartmentItem;
