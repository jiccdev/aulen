import React from 'react';
import Image from 'next/image';
import SoldHomeImg from '../../../../../src/assets/img/SoldHome/sold-home.jpg';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../../../../../styles/components/administracion-de-arriendo/SoldHome.module.css';

const SoldHome = () => {
  return (
    <Row className={styles.rowContainerSoldHome}>
      <Col xl={8} className={styles.colSoldHome}>
        <Image src={SoldHomeImg} alt="Sold Home" className={styles.img} />
      </Col>
    </Row>
  );
};

export default SoldHome;
