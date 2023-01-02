import React, { useState } from 'react';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../../../styles/components/CardStep.module.css';

const StepItem = ({ step }) => {
  const { icon, desc, span, extraIcon } = step;

  return (
    <Col sm={6} md={4} className={styles.col}>
      <Card className={styles.card}>
        <Card.Body className={styles.cardBody}>
          <div className={styles.cardIconContainer}>
            <span className={styles.icon}>{icon}</span>
          </div>
          <Card.Text className={styles.cardText}>
            {desc} <span className={styles.spanText}>{span}</span>
          </Card.Text>
        </Card.Body>
      </Card>

      {extraIcon?.set ? (
        <span className={styles.extraIcon}>{extraIcon?.arrow}</span>
      ) : null}
    </Col>
  );
};

export default StepItem;
