import React, { Fragment } from 'react';
import Executive from './Executive';
import { parseToCLPCurrency } from '../../../../utils';
import { icons } from '../../../../components/Icons';
import styles from '../../../../../styles/components/propiedades/details/Details.module.css';

const Details = ({ filtredData }) => {
  console.log('dsdsd', filtredData);
  const { BiBuildingHouse, IoBedOutline, FaBath } = icons;
  return (
    <Fragment>
      {filtredData &&
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
                <strong>
                  <BiBuildingHouse />
                </strong>{' '}
                {detail.squareMeters} m<sup>2</sup> útiles
              </span>
              <span>
                <strong>
                  <IoBedOutline />
                </strong>{' '}
                {detail.bedrooms} dormitorios
              </span>
              <span>
                <strong>
                  <FaBath />
                </strong>{' '}
                {detail.bathrooms} baños
              </span>
            </div>
          </section>
        ))}

      <Executive filtredData={filtredData} />
    </Fragment>
  );
};

export default Details;
