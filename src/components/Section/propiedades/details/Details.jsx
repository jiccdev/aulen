import React from 'react';

const Details = ({ filtredData }) => {
  console.log('dsdsd', filtredData);
  return (
    filtredData &&
    filtredData?.map((detail) => (
      <section key={detail.cod}>
        <h3>{detail.cod}</h3>
        <h3>{detail.name}</h3>
      </section>
    ))
  );
};

export default Details;
