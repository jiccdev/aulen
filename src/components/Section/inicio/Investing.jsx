import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeaderSection from '../../Section/HeaderSection';
import SoldHome from '../../../assets/img/SoldHome/sold-home.jpg';
import styles from '../../../../styles/components/Inicio/Investing.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Investing = () => {
  return (
    <div className={styles.investingContainer}>
      <HeaderSection titleSection="¡Invierte en inmuebles con nosotros!" />
      <Row className={styles.rowPlanForm}>
        <Col sm={12} lg={12} xl={12} className={styles.investingCol}>
          <div className={styles.investingColContent}>
            <h2 className={styles.investingColTitle}>Propiedades en remates</h2>
            <p>
              Un modelo de inversión único en el mercado que genera hasta un 15%
              de rentabilidad por operación. Invierte de manera segura, y cuenta
              con la asesoría de expertos que te guiaran según tus objetivos,
              desde la elección del inmueble hasta la capitalización de tu
              inversión.
            </p>
            <div className={styles.consultationContainer}>
              <Link href="/" className={styles.consultation}>
                Publica gratis
              </Link>
            </div>
          </div>
        </Col>
        <div className={styles.investingColAbsolute}>
          <Image src={SoldHome} className={styles.investingImg} />
        </div>
      </Row>
    </div>
  );
};

export default Investing;
