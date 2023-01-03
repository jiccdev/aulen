import React from 'react';
import RSelect from '../RSelect/RSelect';
import {
  typeOfOperation,
  typeOfProperty,
  regions,
  communes,
  bedrooms,
  bathrooms,
  parkingLots,
} from '../../api/fakeData/selects';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../../../styles/components/AdvancedSearchForm.module.css';
import Select from '../../../styles/components/Select.module.css';

const AdvancedSearchForm = () => {
  const onFormSubmit = (ev) => {
    ev.preventDefault();
  };

  const onOrderDepartmentByChange = (option) => {
    console.log(typeOfOperation[0]);
    console.log(option);
  };

  const onTypeOfPropertyChange = (option) => {
    console.log(typeOfProperty[0]);
    console.log(option);
  };

  const onRegionsChange = (option) => {
    console.log(regions[0]);
    console.log(option);
  };

  const onCommunesChange = (option) => {
    console.log(communes[0]);
    console.log(option);
  };

  const onBedroomsChange = (option) => {
    console.log(bedrooms[0]);
    console.log(option);
  };

  const onBathroomsChange = (option) => {
    console.log(bathrooms[0]);
    console.log(option);
  };

  const onParkingLotsChange = (option) => {
    console.log(parkingLots[0]);
    console.log(option);
  };

  return (
    <Form className={styles.form} onSubmit={onFormSubmit}>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Tipo de operación</Form.Label>
        <RSelect
          options={typeOfOperation}
          defaultValue={typeOfOperation[0]}
          onChange={onOrderDepartmentByChange}
          className={styles.rSelect}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Tipo de propiedad</Form.Label>
        <RSelect
          options={typeOfProperty}
          defaultValue={typeOfProperty[0]}
          onChange={onTypeOfPropertyChange}
          className={styles.rSelect}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Región</Form.Label>
        <RSelect
          options={regions}
          defaultValue={regions[0]}
          onChange={onRegionsChange}
          className={styles.rSelect}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Comuna</Form.Label>
        <RSelect
          options={communes}
          defaultValue={communes[0]}
          onChange={onCommunesChange}
          className={styles.rSelect}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Superficie</Form.Label>
        <Form.Control type="text" placeholder="Superficie" name="surface" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Row>
          <Col>
            <Form.Label className={styles.label}>Precio</Form.Label>
          </Col>
          <Col>
            <Form.Check>
              <Form.Check.Input
                type="radio"
                name="price"
                className={styles.radio}
              />
              <Form.Check.Label className={styles.label}>
                Pesos
              </Form.Check.Label>
            </Form.Check>
          </Col>
          <Col>
            <Form.Check>
              <Form.Check.Input
                type="radio"
                name="price"
                className={styles.radio}
              />
              <Form.Check.Label className={styles.label}>UF</Form.Check.Label>
            </Form.Check>
          </Col>
        </Row>
      </Form.Group>

      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label className={styles.label}>Desde</Form.Label>
            <Form.Control type="number" placeholder="Desde" name="from" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label className={styles.label}>Hasta</Form.Label>
            <Form.Control type="number" placeholder="Hasta" name="to" />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Dormitorios</Form.Label>
        <RSelect
          options={bedrooms}
          defaultValue={bedrooms[0]}
          onChange={onBedroomsChange}
          className={styles.rSelect}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Baños</Form.Label>
        <RSelect
          options={bathrooms}
          defaultValue={bathrooms[0]}
          onChange={onBathroomsChange}
          className={styles.rSelect}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Estacionamientos</Form.Label>
        <RSelect
          options={parkingLots}
          defaultValue={parkingLots[0]}
          onChange={onParkingLotsChange}
          className={styles.rSelect}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Button variant="primary" type="submit" className={styles.btnSubmit}>
          Buscar
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AdvancedSearchForm;
