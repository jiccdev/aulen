import React from 'react';
import Image from 'next/image';
import HeaderSection from '../../Section/HeaderSection';
// import FadeComponent from '../../Reveal/FadeComponent';
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
                {/* <FadeComponent bottom cascade opposite duration={1500}> */}
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

                  {/* <FadeComponent bottom cascade opposite duration={1500}> */}
                    <ul className={styles.leaseUl}>
                      {item?.itemsList?.length > 0
                        ? item?.itemsList?.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))
                        : null}
                    </ul>
                  {/* </FadeComponent> */}
                {/* </FadeComponent> */}
              </Col>
            ))
          : null}
      </Row>
    </div>
  );
};

export default Lease;
