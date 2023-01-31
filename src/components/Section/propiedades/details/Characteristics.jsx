import React, { useState } from 'react';
import TableDetails from './TableDetails';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Button, Collapse } from 'react-bootstrap';
import styles from '../../../../../styles/components/propiedades/details/Characteristics.module.css';

const Characteristics = ({ propertyData }) => {
  const [open, setOpen] = useState(false);
  const text = propertyData?.description || 'Sin descripción';
  const shortText = text.length > 400 ? text.substring(0, 300) + '...' : text;

  return (
    <div className={styles.characteristicsContainer}>
      <h2>Características</h2>
      <Row>
        <Col lg={7}>
          <h6>Descripción</h6>
          <Card className={styles.cardDescription}>
            <Card.Body>
              <Card.Text>{shortText}</Card.Text>

              <Collapse in={open}>
                <div id="example-collapse-text">
                  <Card.Text>{text}</Card.Text>
                </div>
              </Collapse>
              {text.length > 400 && (
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className={styles.buttonCollapse}
                >
                  {open ? 'Ver menos' : 'Ver más'}
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={5} className={styles.tableDetailsContainer}>
          <TableDetails propertyData={propertyData} />
        </Col>
      </Row>
    </div>
  );
};

export default Characteristics;
