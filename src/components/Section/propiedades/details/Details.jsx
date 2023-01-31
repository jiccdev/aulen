import React, { Fragment } from 'react';
import Executive from './Executive';
import { parseToCLPCurrency } from '../../../../utils';
import { icons } from '../../../../components/Icons';
import styles from '../../../../../styles/components/propiedades/details/Details.module.css';

// !api uf
// import axios from 'axios';

// const API_KEY = '2WyiQh7CBv4JzQnO4no8Ac6cLNfG73pV';
// const API_URL = `https://api.apilayer.com/exchange_rates/convert?from=CLP&to=CLF&amount=1&apikey=${API_KEY}`;

// services
// https://openexchangerates.org
// https://apilayer.com/docs api key=2WyiQh7CBv4JzQnO4no8Ac6cLNfG73pV

const Details = ({ propertyData }) => {
  const { BiBuildingHouse, IoBedOutline, FaBath } = icons;

  return (
    <Fragment>
      {Object.keys(propertyData).length > 0 ? (
        <section key={propertyData.id} className={styles.detailContainer}>
          <h2>{propertyData?.address}</h2>
          <h4>
            Publicado por {propertyData?.realtor?.name || 'Sin nombre'}{' '}
            {propertyData.realtor?.lastName}
          </h4>

          <div className={styles.pricesContainer}>
            <h3>Desde</h3>

            <p className={styles.ufPrice}>UF {propertyData?.price || 232443}</p>
            <p className={styles.clpPrice}>
              {parseToCLPCurrency(propertyData.price)}
            </p>
          </div>

          <div className={styles.deptoPropsContainer}>
            <span>
              <strong>
                <BiBuildingHouse />
              </strong>{' '}
              {propertyData?.surface_m2 ? propertyData?.surface_m2 : '0'} m
              <sup>2</sup> útiles
            </span>
            <span>
              <strong>
                <IoBedOutline />
              </strong>{' '}
              {propertyData?.bedrooms
                ? propertyData?.bedrooms
                : 'Sin dormitorios'}{' '}
              dormitorios
            </span>
            <span>
              <strong>
                <FaBath />
              </strong>{' '}
              {propertyData?.bathrooms ? propertyData?.bathrooms : 'Sin baños'}{' '}
              baños
            </span>
          </div>
        </section>
      ) : null}

      <Executive propertyData={propertyData} />
    </Fragment>
  );
};

export default Details;
