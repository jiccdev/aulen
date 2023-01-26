import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SoldHome from '../../../assets/img/SoldHome/sold-home.jpg';
import FadeComponent from '../../Reveal/FadeComponent';
import styles from '../../../../styles/components/Inicio/NewProperties.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NewProperties = () => {
  return (
    <FadeComponent duration={500}>
      <div className={styles.newPropertiesContainer}>
        <Row className={styles.rowNewProperties}>
          <Col sm={12} lg={6} xl={6} className={styles.newPropertiesCol}>
            <FadeComponent left cascade opposite duration={1000}>
              <div className={styles.newPropertiesColAbsolute}>
                <Image src={SoldHome} className={styles.newPropertiesImg} />
              </div>
            </FadeComponent>
          </Col>

          <Col sm={12} lg={6} xl={6} className={styles.newPropertiesCol}>
            <FadeComponent right cascade opposite duration={500}>
              <div className={styles.newPropertiesColContent}>
                <h2 className={styles.newPropertiesColTitle}>
                  Propiedades nuevas
                </h2>
                <p>
                  Un modelo de inversión único en el mercado que genera hasta un
                  15% de rentabilidad por operación. Invierte de manera segura,
                  y cuenta con la asesoría de expertos que te guiaran según tus
                  objetivos, desde la elección del inmueble hasta la
                  capitalización de tu inversión.
                </p>
                <div className={styles.consultationContainer}>
                  <Link href="/" className={styles.consultation}>
                    Quiero una asesoría
                  </Link>
                </div>
              </div>
            </FadeComponent>
          </Col>
        </Row>
      </div>
    </FadeComponent>
  );
};

export default NewProperties;
