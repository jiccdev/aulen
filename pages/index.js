import React, { Fragment, useEffect, useContext } from 'react';
import Image from 'next/image';
import PlanFrom from '../src/components/Form/PlanFrom';
import House from '../src/img/soy-propietario/house.jpg';
import PropertiesContext from '../src/context/properties/PropertiesContext';
import HeadPage from '../src/components/HeadPage/HeadPage';
import styles from '../styles/Inicio.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { icons } from '../src/components/Icons';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Inicio = () => {
  const { properties, getProperties } = useContext(PropertiesContext);

  useEffect(() => {
    getProperties();
  }, []);

  /** Icon desctructuring  */
  const { FaUserAlt } = icons;

  return (
    <Fragment>
      <HeadPage title="Inicio" />

      <section>
        <h1 className={styles.title}>
          Inicio <FaUserAlt />
        </h1>
        <h1></h1>

        <Row>
          <Col>
            <Image
              height={500}
              width={500}
              src={House}
              alt="house"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </Col>
          <Col>
            <PlanFrom />
          </Col>
        </Row>
      </section>
    </Fragment>
  );
};

export default Inicio;
