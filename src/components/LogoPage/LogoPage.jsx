import React from 'react';
import Image from 'next/image';
import LogoAulenPropiedades from '../../assets/img/LogoSite/LOGO-AULEN-PROPIEDADES.png';
import styles from '../../../styles/components/LogoPage.module.css';

const LogoPage = () => {
  return (
    <Image
      src={LogoAulenPropiedades}
      alt="logo-aulen-propiedades"
      // className="img-fluid"
      className={styles.logo}
      width={220}
      height={220}
    />
  );
};

export default LogoPage;
