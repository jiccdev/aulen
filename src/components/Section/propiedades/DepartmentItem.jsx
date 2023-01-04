import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { truncateString, parseToCLPCurrency } from '../../../utils';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../../../../styles/components/propiedades/DepartmentItem.module.css';

const DepartmentItem = ({ department, isGrid, isList }) => {
  const { cod, name, price, image, squareMeters, address, status } = department;

  return (
    // sm={6} md={4} grid
    // md={12} list
    <Col  md={isGrid ? 4 : isList ? 12 : 4} className={styles.col}>
      <Card className={styles.card}>
        <span
          className={
            status?.name === 'Venta'
              ? styles.deptStatusForSales
              : styles.deptStatusFeatured
          }
        >
          {status?.name}
        </span>
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
          className={styles.cardImage}
        />

        <Card.Body className={styles.cardBody}>
          <small className={styles.deptCode}>Cod: {cod || ''}</small>
          <Card.Title className={styles.cardTitle}>
            {truncateString(name) || ''}
          </Card.Title>
          <p className={styles.address}>
            {truncateString(address?.city) || ''},{' '}
            {truncateString(address?.street)}
          </p>
          <div className={styles.priceContainer}>
            <span className={styles.span}>
              Venta: {parseToCLPCurrency(price)}/m<sup>2</sup>
            </span>
            <span>
              <Link href={`/propiedades/${cod}`} className={styles.details}>
                Detalles
              </Link>
            </span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DepartmentItem;
