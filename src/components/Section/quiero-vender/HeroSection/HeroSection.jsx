import React from "react";
import styles from '../../../../../styles/components/soy-propietario/quiero-vender/HeroSection/HeroSection.module.css';
import { PublishingForm } from '../../../PublishingForm/PublishingForm.jsx';

export const HeroSection = () => {
    return(
    <header className={`${styles.customCol} ${styles.sellPageHeader}`}>
      <h1>¡Vende tu propiedad rápido y sin complicaciones!</h1>
      <div className={`${styles.customRow} ${styles.imgContainer}`}>
        <img className={`${styles.imgHeader}`} src='' alt='' />
        <PublishingForm />
      </div>
    </header>
    )
}

export default HeroSection