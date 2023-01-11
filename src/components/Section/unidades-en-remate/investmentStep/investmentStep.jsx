import React from "react";
import styles from "../../../../../styles/components/soy-inversionista/HeroSection/investmentStep/InvestmentStep.module.css"
export const InvestmentStep = ({ stepData }) => {
  return (
    <div key={stepData.id} className={`${styles.customRow} ${styles.divContainer} ${stepData.style}`}>
      {stepData.img}
      <div className={`${styles.customRow}`}>
        <h2 className={`${styles.step__h2}`}>{stepData.id}</h2>
        <div className={`${styles.customCol} ${styles.textContainer}`}>
          <h3 className={`${styles.step__h3}`}>{stepData.h3}</h3>
          <p className={`${styles.step__p}`}>{stepData.p}</p>
        </div>
      </div>
    </div>
  )
}
export default InvestmentStep