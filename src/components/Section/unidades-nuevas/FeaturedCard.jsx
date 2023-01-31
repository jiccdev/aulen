import Image from 'next/image';
import React from 'react';
import styles from '../../../../styles/components/soy-inversionista/unidades-nuevas/FeaturedCard.module.css';

export const FeaturedCard = ({
  cod,
  img,
  name,
  location,
  price,
  bedroom,
  bathroom,
  size,
}) => {
  return (
    <>
      <article className={`${styles.customCol} ${styles.card}`}>
        <div>
          <Image
            className={`${styles.card__img}`}
            src={require('../../../img/soy-propietario/house.jpg')}
            alt="imagen-house"
          />
          <p className={`${styles.card__cod}`}>COD: </p>
        </div>
        <div className={`${styles.customCol} ${styles.cardContainer__1}`}>
          <h3 className={`${styles.card__name}`}>CASA PUDAHUEL</h3>
          <p className={`${styles.card__location}`}>LAS TINAJAS</p>
        </div>
        <div className={`${styles.customCol} ${styles.cardContainer__2}`}>
          <p className={`${styles.card__price}`}>VENTA: </p>
        </div>
        <div className={`${styles.customRow} ${styles.cardContainer__3}`}>
          <div className={`${styles.customCol} ${styles.card__specs}`}>
            <p className={`${styles.card__specs__bedroom}`}> DORM.</p>
            <p className={`${styles.card__specs__bathroom}`}> BAÑOS</p>
            <p className={`${styles.card__specs__size}`}> M</p>
          </div>
          <button className={`${styles.card__details__btn}`}>DETALLES</button>
        </div>
      </article>
    </>
  );
};
export default FeaturedCard;
