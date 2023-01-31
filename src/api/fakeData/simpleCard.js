import Image from 'next/image';
import styles from '../../../styles/components/soy-inversionista/SimpleCard.module.css';

export const simpleCardData = [
  {
    img: (
      <Image
        className={`${styles.card__img}`}
        src={require('../../img/soy-propietario/apartment.jpg')}
        alt="card-imagen-departamentos"
      />
    ),
    title: 'DEPARTAMENTOS',
  },
  {
    img: (
      <Image
        className={`${styles.card__img}`}
        src={require('../../img/soy-propietario/parking.jpg')}
        alt="card-imagen-estacionamientos"
      />
    ),
    title: 'ESTACIONAMIENTOS',
  },
  {
    img: (
      <Image
        className={`${styles.card__img}`}
        src={require('../../img/soy-propietario/storageroom.jpg')}
        alt="card-imagen-bodega"
      />
    ),
    title: 'BODEGA',
  },
];
