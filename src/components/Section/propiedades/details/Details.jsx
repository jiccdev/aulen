import React from 'react';
import { parseToCLPCurrency } from '../../../../utils';
import styles from '../../../../../styles/components/propiedades/details/Details.module.css';

const Details = ({ filtredData }) => {
  console.log('dsdsd', filtredData);
  return (
    filtredData &&
    filtredData?.map((detail) => (
      <section key={detail.cod} className={styles.detailContainer}>
        <h2>{detail.address?.city}</h2>
        <h4>Publicado por {detail.createdBy?.username}</h4>

        <div className={styles.pricesContainer}>
          <h3>Desde</h3>
          <p className={styles.ufPrice}>UF {detail.price?.uf}</p>
          <p className={styles.clpPrice}>
            {parseToCLPCurrency(detail.price?.clp)}
          </p>
        </div>

        <div className={styles.deptoPropsContainer}>
          <span>
            <strong>Superficie:</strong> {detail.squareMeters} m<sup>2</sup>
          </span>
          <span>
            <strong>Superficie:</strong> {detail.bedrooms} dormitorios
          </span>
          <span>
            <strong>Superficie:</strong> {detail.bathrooms} baños
          </span>
        </div>
      </section>
    ))
  );
};

export default Details;
