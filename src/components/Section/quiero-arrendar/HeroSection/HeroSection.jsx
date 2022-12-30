import React from "react";
import styles from '../../../../../styles/components/soy-propietario/quiero-arrendar/HeroSection/HeroSection.module.css'
import OurService from "../../../OurService/OurService";

export const HeroSection = () => {
    return(
        <section className={`${styles.customRow}`}>
            <div className={`${styles.customRow}`} >
                <OurService />
            </div>
            <div className={`${styles.customCol}`} >
                <h1>¡Disfruta de la tranquilidad de arrendar tu propiedad con Aulen!</h1>
                <img src="" alt="" />
            </div>
        </section>
    )
}

export default HeroSection