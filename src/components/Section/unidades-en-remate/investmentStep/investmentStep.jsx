import React from "react";
import styles from "../../../../../styles/components/soy-inversionista/HeroSection/investmentStep/InvestmentStep.module.css"
export const InvestmentStep = ({stepData}) => {
  return(
    <div className={`${styles.customRow} ${styles.divContainer}`}>
        <div className={`${styles.customRow}`}>
          <h2 className={`${styles.step__h2}`}>1</h2>
          <div className={`${styles.customCol} ${styles.textContainer}`}>
            <h3 className={`${styles.step__h3}`}>Hola</h3>
            <p className={`${styles.step__p}`}>Texto</p>
          </div>
        </div>
      </div>
  )
}
export default InvestmentStep