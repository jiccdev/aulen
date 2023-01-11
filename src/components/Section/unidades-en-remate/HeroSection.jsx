import React from "react";
import styles from "../../../../styles/components/soy-inversionista/HeroSection/HeroSection.module.css"
import InvestmentStep from "./investmentStep/investmentStep";
import { investmentStepData } from "../../../api/fakeData/investmentStep";
export const HeroSection = () => {
  return(
    <section className={`${styles.customCol}`}>
    <div className={`${styles.customCol} ${styles.mainContainer}`}>
      {investmentStepData.length > 0 ?
      investmentStepData.map(el =>
        <InvestmentStep stepData={el} />
        ) : null}
      <h2>¡Invertir es así de fácil!</h2>
    </div>
    </section>
  )
}
export default HeroSection