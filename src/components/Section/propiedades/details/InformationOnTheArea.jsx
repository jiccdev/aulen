import React, { useState } from 'react';
import TransportationTab from './tabs/TransportationTab';
import EducationTab from './tabs/EducationTab';
import GreenAreas from './tabs/GreenAreas';
import Stores from './tabs/Stores';

/* Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import styles from '../../../../../styles/components/propiedades/details/InformationOnTheArea.module.css';

const InformationOnTheArea = () => {
  const [key, setKey] = useState('transportationTab');

  return (
    <div className={styles.informationOnTheAreaContainer}>
      <Row>
        <Col xs={12} lg={6}>
          <div>
            <h2>Información de la zona</h2>
            <p>Son los puntos más cercanos al inmueble en un rango de 2km.</p>
          </div>

          <Tabs
            className="tabs"
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="transportationTab" title="Transporte">
              <TransportationTab />
            </Tab>
            <Tab eventKey="educationTab" title="Educación">
              <EducationTab />
            </Tab>
            <Tab eventKey="greenAreas" title="Areas verdes">
              <GreenAreas />
            </Tab>
            <Tab eventKey="stores" title="Comercios">
              <Stores />
            </Tab>
          </Tabs>
        </Col>

        <Col xs={12} lg={6}></Col>
      </Row>
    </div>
  );
};

export default InformationOnTheArea;
