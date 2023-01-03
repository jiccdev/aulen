import React from "react";
import Image from "next/image";
import sofa from '../../../../img/soy-propietario/sofa.jpg'
import styles from '../../../../../styles/components/soy-propietario/quiero-arrendar/HeroSection/HeroSection.module.css'
import OurService from "../../../OurService/OurService";

export const HeroSection = () => {
    return(
        <section className={`${styles.customRow}`}>
            <div className={`${styles.customRow} ${styles.servicesContainer}`} >
                <OurService />
            </div>
            <div className={`${styles.customCol} ${styles.headerContainer}`} >
                <h1 className={`${styles.heroH1}`} >¡Disfruta de la tranquilidad de arrendar tu propiedad con Aulen!</h1>
                <Image src={sofa} alt="" className={`${styles.heroImage}`} />
            </div>
        </section>
    )
}

export default HeroSection