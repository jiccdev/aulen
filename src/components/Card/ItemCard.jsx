import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../../../styles/components/ItemCard.module.css';

const ItemCard = ({ children }) => {
  return (
    <Card style={{ width: '18rem' }} className={styles.card}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        {children}
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
