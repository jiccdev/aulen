import React, { Fragment } from 'react';
import Executive from './Executive';
import { parseToCLPCurrency } from '../../../../utils';
import { icons } from '../../../../components/Icons';
import styles from '../../../../../styles/components/propiedades/details/Details.module.css';

const Details = ({ filtredData, propertyData }) => {
  const { BiBuildingHouse, IoBedOutline, FaBath } = icons;
  return (
    <Fragment>
      {Object.keys(propertyData).length > 0 ? (
        <section key={propertyData.id} className={styles.detailContainer}>
          <h2>{propertyData?.address}</h2>
          <h4>
            Publicado por {propertyData.createdBy?.username || 'Username'}
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
              {propertyData?.surface_m2 === null ? '' : ''} m<sup>2</sup> útiles
            </span>
            <span>
              <strong>
                <IoBedOutline />
              </strong>{' '}
              {propertyData?.bedrooms === null ? '' : ''} dormitorios
            </span>
            <span>
              <strong>
                <FaBath />
              </strong>{' '}
              {propertyData?.bathrooms === null ? '' : ''} baños
            </span>
          </div>
        </section>
      ) : null}

      <Executive filtredData={filtredData} propertyData={propertyData}/>
    </Fragment>
  );
};

export default Details;
