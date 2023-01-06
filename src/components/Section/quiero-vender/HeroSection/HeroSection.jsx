import React from "react";
import styles from '../../../../../styles/components/soy-propietario/quiero-vender/HeroSection/HeroSection.module.css';
import keyImg from '../../../../img/soy-propietario/key.jpg'
import Image from "next/image";
import { PublishingForm } from '../../../PublishingForm/PublishingForm.jsx';
import { publishingFormData } from "../../../../api/fakeData/publishingForm"; /** revisar el indice según lo que quiera el form */

export const HeroSection = () => {
  return (
    <header className={`${styles.customCol} ${styles.sellPageHeader}`}>
      <h1>¡Vende tu propiedad rápido y sin complicaciones!</h1>
      <div className={`${styles.customRow} ${styles.imgAndForm}`}>
        <div className={`${styles.customRow} ${styles.imgContainer}`}>
          <Image className={`${styles.imgHeader}`} src={keyImg} alt='' />
        </div>
        <PublishingForm formData={publishingFormData[0]} />
      </div>
    </header>
  )
}

export default HeroSection