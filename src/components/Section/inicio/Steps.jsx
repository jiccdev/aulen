import React from 'react';
import Link from 'next/link';
import HeaderSection from '../../Section/HeaderSection';
// import FadeComponent from '../../Reveal/FadeComponent';
import { stepsData } from '../../../api/fakeData/steps';
import styles from '../../../../styles/components/Inicio/Steps.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Steps = () => {
  return (
    <div className={styles.stepContainer}>
      <HeaderSection titleSection="Vendemos tu propiedad en cuatro simples pasos" />
      <Row className={styles.rowPlanForm}>
        {stepsData?.length > 0
          ? stepsData.map((item) => (
              <Col
                key={item?.id}
                sm={12}
                lg={12}
                xl={3}
                className={styles.stepCol}
              >
                {/* <FadeComponent bottom cascade opposite duration={1500}> */}
                  <Card style={{ width: 'auto' }} className={styles.stepCard}>
                    <Card.Body className={styles.stepCardBody}>
                      <span className={styles.stepsIconContainer}>
                        <strong className={styles.stepsIcon}>
                          {item?.icon}
                        </strong>
                      </span>

                      <span className={styles.stepCardIdContainer}>
                        <strong className={styles.stepCardId}>
                          {item?.id}
                        </strong>
                      </span>
                      <Card.Title className={styles.stepCardTitle}>
                        {item?.title}
                      </Card.Title>

                      <Card.Text>{item?.description}</Card.Text>
                    </Card.Body>
                  </Card>
                {/* </FadeComponent> */}
              </Col>
            ))
          : null}

        {/* <FadeComponent bottom cascade opposite duration={1500}> */}
          <div className={styles.publishForFreeContainer}>
            <Link href="/" className={styles.publishForFreeLink}>
              Publica gratis
            </Link>
          </div>
        {/* </FadeComponent> */}
      </Row>
    </div>
  );
};

export default Steps;
