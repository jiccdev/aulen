import React, { Fragment, useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import HeadPage from '../../src/components/HeadPage/HeadPage';
import PropertiesContext from '../../src/context/properties/PropertiesContext';
import GalleryCarousel from '../../src/components/GalleryCarousel/GalleryCarousel';
import Details from '../../src/components/Section/propiedades/details/Details';
import Characteristic from '../../src/components/Section/propiedades/details/Characteristics';
import InformationOnTheArea from '../../src/components/Section/propiedades/details/InformationOnTheArea';

/** Bootstrap componets */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/components/propiedades/details/Details.module.css';
import { icons } from '../../src/components/Icons';

const PropiedadId = () => {
  const { getProperty, property, contextData } = useContext(PropertiesContext);
  const { query } = useRouter();
  const { propertyId } = query;
  const [data] = contextData;
  const { BsHeart } = icons;

  useEffect(() => {
    // getProperty(propertyId, 1, 1);
    getProperty(propertyId, 5, 5);
  }, [propertyId]);

  console.log('Property', property);

  return (
    <Fragment>
      <HeadPage title={`Departamento-x`} />
      <ul className={styles.propertyTypeInfo}>
        <li>
          <Link href="/propiedades">Volver al listado</Link>
        </li>
        <li>Departamentos</li>
        <li>Venta Proyectos</li>
        <li>{property?.commune}</li>
        <li>{property?.address}</li>
      </ul>

      <Row className={styles.row}>
        <Col xs={12} xl={8}>
          <GalleryCarousel images={property?.images} />
          <Characteristic propertyData={property} />
        </Col>

        <Col xs={12} xl={4} className={styles.col}>
          <div className={styles.deptoDetailsShare}>
            <Link href="/" className={styles.shareLink}>
              Compartir
            </Link>{' '}
            |{' '}
            <Link href="/" className={styles.printLink}>
              Imprimir
            </Link>{' '}
            <span className="">
              <BsHeart />
            </span>
          </div>
          <Details propertyData={property} />
        </Col>
      </Row>

      <InformationOnTheArea />
    </Fragment>
  );
};

export default PropiedadId;
