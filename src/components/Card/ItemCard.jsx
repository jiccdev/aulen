import React from 'react';
import Link from 'next/link';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../../../styles/components/CardItem.module.css';

const CardItem = ({ plan }) => {
  const { id, name, supply, brokersInfo, characteristics } = plan;
  return (
    <Col xs={12} md={4} key={id} plan={plan} className={styles.colCard}>
      <Card className={styles.card}>
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.cardTitle}>{name}</Card.Title>
          <div className={styles.supplyContainer}>
            <span className={styles.supply}>
              <strong>{supply}</strong>
            </span>
            <span className={styles?.brokersInfo}>{brokersInfo}</span>
          </div>

          <ul className={styles.characteristics}>
            {characteristics.map((characteristic, index) => (
              <li className={styles.characteristicsItem} key={index}>
                {characteristic}
              </li>
            ))}
          </ul>

          <Card.Footer className={styles.cardFooter}>
            <Link
              href={`/administracion-de-arriendo/plans/${id}`}
              className={styles.moreInfo}
            >
              Más información
            </Link>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardItem;
