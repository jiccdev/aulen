import React from 'react';
import Link from 'next/link';
import SmallLogoAulen from '../../../../assets/img/LogoSite/SMALL-LOGO-AULEN.png';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../../../../../styles/components/propiedades/details/Executive.module.css';
import Image from 'next/image';

const Executive = () => {
  return (
    <div className={styles.executiveContainer}>
      <Row className={styles.row}>
        <Col md={3} className={styles.col}>
          <Image
            src={SmallLogoAulen}
            height={50}
            width="auto"
            className={styles.executiveImg}
          />
        </Col>
        <Col md={9}>
          <h3>Ejecutivo </h3>
          <p>Aulen Propiedades</p>
          <p>956305238</p>
          <p>956305238</p>

          <form>
            <div>
              <Link href="/" className={styles.contactBtn}>
                Contactar
              </Link>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Executive;
