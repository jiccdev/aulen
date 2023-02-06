import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeaderSection from '../../Section/HeaderSection';
import PropiedadesEnRemate from '../../../assets/img/Inicio/Principal/propiedades-en-remate.jpg';
// import FadeComponent from '../../Reveal/FadeComponent';
import styles from '../../../../styles/components/Inicio/Investing.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Investing = () => {
  return (
    // <FadeComponent duration={500}>
      <div className={styles.investingContainer}>
        <HeaderSection titleSection="¡Invierte en inmuebles con nosotros!" />
        <Row className={styles.rowPlanForm}>
          <Col sm={12} lg={12} xl={12} className={styles.investingCol}>
            {/* <FadeComponent left cascade opposite duration={500}> */}
              <div className={styles.investingColContent}>
                <h2 className={styles.investingColTitle}>
                  Propiedades en remates
                </h2>
                <p>
                  Un modelo de inversión único en el mercado que genera hasta un
                  15% de rentabilidad por operación.
                </p>

                <p>
                  Invierte de manera segura, y cuenta con la asesoría de
                  expertos que te guiaran según tus objetivos, desde la elección
                  del inmueble hasta la capitalización de tu inversión.
                </p>
                <div className={styles.consultationContainer}>
                  <Link href="/" className={styles.consultation}>
                    Quiero una asesoría
                  </Link>
                </div>
              </div>
            {/* </FadeComponent> */}
          </Col>
          {/* <FadeComponent right cascade opposite duration={1000}> */}
            <div className={styles.investingColAbsolute}>
              <Image
                src={PropiedadesEnRemate}
                alt="Propieda en remate"
                className={styles.investingImg}
              />
            </div>
          {/* </FadeComponent> */}
        </Row>
      </div>
    // </FadeComponent>
  );
};

export default Investing;
