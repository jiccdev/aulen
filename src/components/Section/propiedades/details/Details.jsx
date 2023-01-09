import React from 'react';
import styles from '../../../../../styles/components/propiedades/details/Details.module.css';

const Details = ({ filtredData }) => {
  console.log('dsdsd', filtredData);
  return (
    filtredData &&
    filtredData?.map((detail) => (
      <section key={detail.cod}>
        <h2>{detail.cod}</h2>
        <h3>{detail.name}</h3>
      </section>
    ))
  );
};

export default Details;
