import React from 'react';
import Link from 'next/link';
import styles from '../../../../styles/components/FooterPage.module.css';

const NavigationFooter = () => {
  return (
    <div className={styles.navigationFooterContainer}>
      <div className={styles.navigationFooterInfoSection}>
        <Link
          href="/soy-propietario/quiero-arrendar"
          className={styles.navLinkFooter}
        >
          Quiero arrendar
        </Link>
      </div>
      <div className={styles.navigationFooterInfoSection}>
        <Link
          href="/soy-propietario/quiero-vender"
          className={styles.navLinkFooter}
        >
          Quiero vender
        </Link>
      </div>
      <div className={styles.navigationFooterInfoSection}>
        <Link
          href="/soy-inversionista/quiero-invertir"
          className={styles.navLinkFooter}
        >
          Quiero invertir
        </Link>
      </div>
      <div className={styles.navigationFooterInfoSection}>
        <Link href="/contacto" className={styles.navLinkFooter}>
          Contáctanos
        </Link>
      </div>
    </div>
  );
};

export default NavigationFooter;
