import React from 'react';
import styles from '../../../../../styles/components/propiedades/details/Details.module.css';

const Details = ({ filtredData }) => {
  console.log('dsdsd', filtredData);
  return (
    filtredData &&
    filtredData?.map((detail) => (
      <section key={detail.cod} className={styles.detailContainer}>
        <h2>{detail.address?.city}</h2>
        <h4>Publicado por {detail.address?.city}</h4>
      </section>
    ))
  );
};

export default Details;
