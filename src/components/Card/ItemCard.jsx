import React from 'react';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../../../styles/components/CardItem.module.css';

const CardItem = ({ plan }) => {
  const { id, name, supply, brokersInfo, characteristics } = plan;
  return (
    <Col
      xs={12}
      md={4}
      key={plan?.id}
      plan={plan}
      className={id % 2 === 0 ? styles.colCardSecundary : styles.colCardPrimary}
    >
      <Card
        className={id % 2 === 0 ? styles.cardSecundary : styles.cardPrimary}
      >
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
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardItem;
