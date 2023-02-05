import React, { useState, useEffect } from 'react';
import RSelect from '../RSelect/RSelect';
import FadeComponent from '../Reveal/FadeComponent';
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
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import styles from '../../../styles/components/AdvancedSearchForm.module.css';

const AdvancedSearchForm = ({
  data,
  setProperties,
  getProperties,
  newProperties,
  setNewProperties,
}) => {
  const [notPropertiesMessage, setNotPropertiesMessage] = useState('');
  const [filtredDataValue, setFiltredDataValue] = useState({
    typeOfOperation: '',
    typeOfProperty: '',
    region: '',
    commune: '',
    surface: '',
    priceCLP: false,
    priceUF: false,
    priceFrom: 0,
    priceFrom: 0,
    priceUpTo: 0,
    bedrooms: '',
    bathrooms: '',
    parkingLots: '',
  });

  const onFormSubmit = (ev) => {
    ev.preventDefault();
  };

  const onOrderDepartmentByChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      typeOfOperation: option?.value,
    });
    console.log('typeOfOperation', filtredDataValue);
  };

  const onTypeOfPropertyChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      typeOfProperty: option?.value,
    });
    console.log('typeOfProperty', filtredDataValue?.typeOfProperty);
  };

  const onRegionsChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      region: option?.value,
    });
    console.log('region', filtredDataValue?.region);
  };

  const onCommunesChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      commune: option?.value,
    });
    console.log('commune', filtredDataValue?.commune);
  };

  const onBedroomsChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      bedrooms: option?.value,
    });
    console.log('bedrooms', filtredDataValue?.bedrooms);
  };

  const onBathroomsChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      bathrooms: option?.value,
    });
    console.log('bathrooms', filtredDataValue?.bathrooms);
  };

  const onParkingLotsChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      parkingLots: option?.value,
    });
    console.log('parkingLots', filtredDataValue?.parkingLots);
  };

  /** Filter Properties by Bathrooms */
  const filterPropertyBarhrooms = async (bathrooms) => {
    const filtredProperties = await data?.filter(
      (property) => property.bathrooms == bathrooms
    );

    if (filtredProperties.length > 0) {
      setNewProperties(filtredProperties);
      setNotPropertiesMessage('');
    } else {
      setNewProperties([]);
      setNotPropertiesMessage('No se encontraron propiedades');
    }
  };

  useEffect(() => {
    filterPropertyBarhrooms(filtredDataValue?.bathrooms);
  }, [filtredDataValue?.bathrooms]);

  console.log('newProperties', newProperties);

  return (
    <FadeComponent right cascade duration={500}>
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

        <Form.Group className="mb-3">
          {notPropertiesMessage && (
            <Alert variant="danger">{notPropertiesMessage}</Alert>
          )}
        </Form.Group>
      </Form>
    </FadeComponent>
  );
};

export default AdvancedSearchForm;
