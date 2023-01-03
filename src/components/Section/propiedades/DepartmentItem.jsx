import React from 'react';
import Image from 'next/image';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../../../../styles/components/propiedades/DepartmentItem.module.css';

const DepartmentItem = ({ department }) => {
  const { cod, name, address, price, image, squareMeters } = department;
  return (
    <Col sm={6} md={4} className={styles.col}>
      <Card className={styles.card}>
        <Image
          src={image}
          alt={`image-${name}`}
          width={291}
          height={200}
          style={{
            objectFit: 'cover',
            position: 'center',
          }}
        />
        <Image />
        <Card.Body className={styles.cardBody}>
          <Card.Text className={styles.cardText}>
            {name} <span className={styles.spanText}>{price}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DepartmentItem;
