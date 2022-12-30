import React from "react"
import styles from '../../../styles/components/soy-propietario/quiero-arrendar/FeatureCard/FeatureCard.module.css'

export const FeatureCard = () => {
  return (
    <div className={`${styles.customCol} ${styles.cardContainer}`}>
      <div className={`${styles.customCol} ${styles.cardImgContainer}`} >
        <img src="" alt="" className={`${styles.card__img}`} />
      </div>
      <div className={`${styles.customCol} ${styles.cardTextContainer}`}>
        <h2 className={`${styles.card__h2}`}>Visibilidad</h2>
        <p className={`${styles.card__p}`}>Publicamos tu propiedad en 43 portales inmobiliarios y compramos servicios destacados.</p>
      </div>

    </div>
  )
}
export default FeatureCard