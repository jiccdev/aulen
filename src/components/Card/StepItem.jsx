import React from 'react';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../../../styles/components/CardStep.module.css';

const StepItem = ({ step }) => {
  const { icon, desc, span } = step;
  return (
    <Col sm={6} md={4}>
      <Card className={styles.card}>
        <Card.Body className={styles.cardBody}>
          <div className={styles.cardIconContainer}>
            <span className={styles.icon}>{icon}</span>
          </div>
          <Card.Text className={styles.cardText}>
            {desc} <span>{span}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default StepItem;
