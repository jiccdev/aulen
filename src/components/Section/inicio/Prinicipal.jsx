import React from 'react';
import Image from 'next/image';
import HeaderSection from '../../Section/HeaderSection';
import Empacando from '../../../../src/assets/img/Inicio/Principal/empacando.webp';
import PropertyForm from '../../Form/PropertyForm';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../../../styles/components/Inicio/Principal.module.css';

const Prinicipal = () => {
  return (
    <div>
      <HeaderSection titleSection="¡Aulén, contigo en cada paso!" />
      <Row className={styles.rowPlanForm}>
        <Col sm={12} lg={7}>
          <Image
            width="100%"
            src={Empacando}
            alt="house"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '10%',
            }}
          />
        </Col>
        <Col sm={12} lg={5}>
          <PropertyForm
            titleContentForm="Vende o arrienda tu propiedad rápido y sin complicaciones"
            textAlign="center"
            subtitle=""
            haveAction1={{
              text: 'QUIERO VENDER',
            }}
            haveAction2={{
              text: 'QUIERO ARRENDAR',
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Prinicipal;
