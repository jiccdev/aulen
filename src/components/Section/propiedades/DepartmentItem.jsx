import React from 'react';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import styles from '../../../../styles/components/propiedades/DepartmentItem.module.css';

const DepartmentItem = ({ department }) => {
  const { cod, name, address, price, image, squareMeters } = department;
  return (
    <Col sm={6} md={4} className={styles.col}>
      <Card className={styles.card}>
        <Card.Img variant="top" src="holder.js/100px180" />
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
