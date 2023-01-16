import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeaderSection from '../../Section/HeaderSection';
import SoldHome from '../../../assets/img/SoldHome/sold-home.jpg';
import styles from '../../../../styles/components/Inicio/NewProperties.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NewProperties = () => {
  return (
    <div className={styles.newPropertiesContainer}>
      <HeaderSection titleSection="¡Invierte en inmuebles con nosotros!" />
      <Row className={styles.rowNewProperties}>
        <Col sm={12} lg={6} xl={6} className={styles.newPropertiesCol}>
          <div className={styles.newPropertiesColAbsolute}>
            <Image src={SoldHome} className={styles.newPropertiesImg} />
          </div>
        </Col>

        <Col sm={12} lg={6} xl={6} className={styles.newPropertiesCol}>
          <div className={styles.newPropertiesColContent}>
            <h2 className={styles.newPropertiesColTitle}>
              Propiedades en remates
            </h2>
            <p>
              Un modelo de inversión único en el mercado que genera hasta un 15%
              de rentabilidad por operación. Invierte de manera segura, y cuenta
              con la asesoría de expertos que te guiaran según tus objetivos,
              desde la elección del inmueble hasta la capitalización de tu
              inversión.
            </p>
            <div className={styles.consultationContainer}>
              <Link href="/" className={styles.consultation}>
                Quiero una asesoría
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewProperties;
