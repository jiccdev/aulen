import React from 'react';
import Image from 'next/image';
import HeaderSection from '../../Section/HeaderSection';
import { leaseData } from '../../../api/fakeData/lease';
import styles from '../../../../styles/components/Inicio/Lease.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Lease = () => {
  return (
    <div className={styles.leaseContainer}>
      <HeaderSection titleSection="¡Nos encargamos de tú arriendo por tí!" />
      <Row className={styles.rowPlanForm}>
        {leaseData?.length > 0
          ? leaseData.map((item) => (
              <Col
                key={item?.id}
                sm={12}
                lg={6}
                xl={4}
                className={styles.leaseCol}
              >
                <Card style={{ width: 'auto' }} className={styles.leaseCard}>
                  <Image
                    src={item?.src}
                    alt={`imagen-${item?.title}`}
                    className={styles.cardImage}
                  />
                  <Card.Body className={styles.leaseCardBody}>
                    <Card.Title className={styles.leaseCardTitle}>
                      {item?.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : null}
      </Row>
    </div>
  );
};

export default Lease;
