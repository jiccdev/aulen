import React from 'react';
import Image from 'next/image';
import sofa from '../../../../img/soy-propietario/sofa.jpg';
import styles from '../../../../../styles/components/soy-propietario/quiero-arrendar/HeroSection/HeroSection.module.css';
import OurService from '../../../OurService/OurService';
// import FadeComponent from '../../../Reveal/FadeComponent';

export const HeroSection = () => {
  return (
    <section className={`${styles.customRow} ${styles.sectionHeroContainer}`}>
      <div className={`${styles.customRow} ${styles.servicesContainer}`}>
        <OurService />
      </div>
      {/* <FadeComponent right cascade> */}
        <div className={`${styles.customCol} ${styles.headerContainer}`}>
          <h1 className={`${styles.heroH1}`}>
            ¡Disfruta de la tranquilidad de arrendar tu propiedad con Aulen!
          </h1>
          <Image
            src={sofa}
            alt="imagen-hero"
            className={`${styles.heroImage}`}
          />
        </div>
      {/* </FadeComponent> */}
    </section>
  );
};

export default HeroSection;
