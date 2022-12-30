import React from "react"
import styles from '../../../styles/components/soy-propietario/quiero-arrendar/OurService/OurService.module.css'
export const OurService = () => {
  return (
    <div className={`${styles.customCol} ${styles.OurServiceContainer}`} >
      <img className={`${styles.img}`} />
      <h2 className={`${styles.number}`}>1</h2>
      <p><span className={`${styles.boldP}`}>Publica gratis</span> tu propiedad con fotos y videos profesionales.</p>
    </div>
  )
}

export default OurService