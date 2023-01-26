import React from 'react';
import Image from 'next/image';
import HeaderSection from '../../Section/HeaderSection';
import Empacando from '../../../../src/assets/img/Inicio/Principal/empacando.webp';
import PropertyForm from '../../Form/PropertyForm';
import FadeComponent from '../../Reveal/FadeComponent';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../../../styles/components/Inicio/Principal.module.css';

const Prinicipal = () => {
  return (
    <div className={styles.principalContainer}>
      <HeaderSection titleSection="¡Aulén, contigo en cada paso!" />
      <Row className={styles.rowPlanForm}>
        <Col sm={12} lg={7} className={styles.principalCol}>
          <FadeComponent left cascade opposite duration={1400}>
            <Image
              width="100%"
              src={Empacando}
              alt="house"
              className={styles.principalImage}
            />
          </FadeComponent>
        </Col>
        <Col sm={12} lg={5} className={styles.principalCol}>
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
