import React from 'react';
import Image from 'next/image';
import PlanFrom from '../../../../components/Form/PlanFrom';
import SoldHomeImg from '../../../../../src/assets/img/SoldHome/sold-home.jpg';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../../../../../styles/components/administracion-de-arriendo/SoldHome.module.css';

const SoldHome = () => {
  return (
    <Row className={styles.rowContainerSoldHome}>
      <Col xl={8} className={styles.colSoldHome}>
        <Image
          src={SoldHomeImg}
          alt="Sold Home"
          width={420}
          height={500}
          className={styles.img}
          style={{
            objectFit: 'cover',
            position: 'center',
            borderRadius: '15%',
          }}
        />
      </Col>

      <Col xl={4} className={styles.colForm}>
        <PlanFrom />
      </Col>
    </Row>
  );
};

export default SoldHome;
