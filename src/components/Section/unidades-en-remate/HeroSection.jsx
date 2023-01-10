import React from "react";
import styles from "../../../../styles/components/soy-inversionista/HeroSection/HeroSection.module.css"
export const HeroSection = () => {
  return(
    <section className={`${styles.customCol}`}>
    <div className={`${styles.customCol} ${styles.mainContainer}`}>
      <div className={`${styles.customRow} ${styles.divContainer}`}>
        <div className={`${styles.customRow}`}>
          <h2>1</h2>
          <div className={`${styles.customCol}`}>
            <h3>Hola</h3>
            <p>Texto</p>
          </div>
        </div>
      </div>
      <h2>¡Invertir es así de fácil!</h2>
    </div>
    </section>
  )
}
export default HeroSection