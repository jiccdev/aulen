import React, { useContext } from 'react';
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
import Container from 'react-bootstrap/Container';
import styles from '../../styles/components/propiedades/details/Details.module.css';
import { icons } from '../../src/components/Icons';

const PropiedadId = () => {
  const { query } = useRouter();
  const { propertyId } = query;
  const { contextData } = useContext(PropertiesContext);
  const [data] = contextData;
  const { BsHeart } = icons;

  const filtredData = data
    ?.filter((item) => item?.cod == propertyId)
    .map((item) => item);

  const { address } = filtredData[0];

  return (
    <Container>
      <HeadPage title={`Departamento-${propertyId}`} />
      <ul className={styles.propertyTypeInfo}>
        <li>
          <Link href="/propiedades">Volver al listado</Link>
        </li>
        <li>Departamentos</li>
        <li>Venta Proyectos</li>
        <li>{address?.city}</li>
        <li>{address?.country}</li>
      </ul>

      <Row className={styles.row}>
        <Col xs={12} xl={8}>
          <GalleryCarousel filtredData={filtredData} />
          <Characteristic filtredData={filtredData} />
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
          <Details filtredData={filtredData} />
        </Col>
      </Row>

      <InformationOnTheArea />
    </Container>
  );
};

export default PropiedadId;
