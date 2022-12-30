import React from "react"
import styles from '../../../styles/components/soy-propietario/quiero-arrendar/OurService/OurService.module.css'
import IconNumber from "../IconNumber/IconNumber"
export const OurService = () => {
  return (
    <div className={`${styles.customCol} ${styles.OurServiceContainer}`} >
      <img className={`${styles.img}`} />
      <IconNumber />
      <p><span className={`${styles.boldP}`}>Publica gratis</span> tu propiedad con fotos y videos profesionales.</p>
    </div>
  )
}

export default OurService