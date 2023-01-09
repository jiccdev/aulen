import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import HeadPage from '../../src/components/HeadPage/HeadPage';
import PropertiesContext from '../../src/context/properties/PropertiesContext';
import GalleryCarousel from '../../src/components/GalleryCarousel/GalleryCarousel';
import Details from '../../src/components/Section/propiedades/details/Details';


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

  return (
    <Container>
      <HeadPage title={`Departamento-${propertyId}`} />
      <h2>Departamento {propertyId}</h2>

      <Row>
        <Col xs={12} md={8}>
          <GalleryCarousel data={data} />
          dsdsd
        </Col>

        <Col xs={12} md={4} className={styles.col}>
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
    </Container>
  );
};

export default PropiedadId;
