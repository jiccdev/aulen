import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { truncateString, parseToCLPCurrency } from '../../../utils';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../../../../styles/components/propiedades/DepartmentItem.module.css';

const DepartmentItem = ({
  department,
  isGrid,
  isList,
  realtorId,
  statusId,
}) => {
  const { id, image, title, address, price } = department;
  const imageSliced = image?.slice(26, image?.length);

  return (
    <Col md={isGrid ? 4 : isList ? 12 : 4} className={styles.col}>
      <Card className={styles.card}>
        <span
        // className={
        //   status?.name === 'Venta'
        //     ? styles.deptStatusForSales
        //     : styles.deptStatusFeatured
        // }
        >
          {/* {status?.name} */}
        </span>
        <Image
          src={imageSliced}
          alt={`imagen-departamento-${title}`}
          width={300}
          height={200}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
          }}
          className={styles.cardImage}
        />

        <Card.Body className={styles.cardBody}>
          <small className={styles.deptCode}>Cod: {id || ''}</small>
          <Card.Title className={styles.cardTitle}>
            {truncateString(title) || ''}
          </Card.Title>
          <p className={styles.address}>
            {truncateString(address) || ''}, {truncateString(address)}
          </p>
          <div className={styles.priceContainer}>
            <span className={styles.span}>
              Venta: {parseToCLPCurrency(price)}/m<sup>2</sup>
            </span>
            <span>
              <Link
                href={`/propiedades/${id}?realtorId=${realtorId}&statusId=${statusId}`}
                className={styles.details}
              >
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
