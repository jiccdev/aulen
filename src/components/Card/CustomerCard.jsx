import React from 'react';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../../../styles/components/CardItem.module.css';

const CustomerCard = ({ customer }) => {
  const { avatar, email, first_name, last_name } = customer;
  return (
    <Col>
      <blockquote>
        <Card style={{ width: 'auto' }} className={styles.card}>
          <Card.Img variant="top" src={avatar} className={styles.cardImg} />
          <Card.Body className={styles.cardBody}>
            <Card.Text className={styles.cardText}>
              "En mi experiencia, encuentro que son eficientes solucionando
              cualquier problema o duda que uno tenga. cálidos y profesionales
              en su accionar. Es una Empresa 100% recomendable. Estoy muy
              contenta con su trabajo"
            </Card.Text>
            <Card.Title className={styles.cardTitle}>
              {first_name} {last_name || ''}
              <small className={styles.cardTextSmall}>{email}</small>
            </Card.Title>
          </Card.Body>
        </Card>
      </blockquote>
    </Col>
  );
};

export default CustomerCard;
