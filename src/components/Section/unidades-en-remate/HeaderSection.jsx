import React from "react";
import styles from "../../../../styles/components/soy-inversionista/HeaderSection/HeaderSection.module.css"
import InvestmentModel from "./investmentModel/InvestmentModel";
import { investmentModelData } from "../../../api/fakeData/investmentModel";

export const HeaderSection = () =>{
  return(
    <header className={`${styles.customCol} ${styles.headerContainer}`}>
      <h1 className={`${styles.header__h1}`}>Nuestro modelo de Inversión remate seguro</h1>
      <h2 className={`${styles.header__h2}`}>Único en el mercado que genera hasta un 15% de rentabilidad por operación</h2>
      <div className={`${styles.customRow} ${styles.investmentModelContainer}`}>
        {investmentModelData.length > 0 ?
        investmentModelData.map(el =>
          <InvestmentModel investment={el} />
          )
        : null}
      </div>
    </header>
  )
}
export default HeaderSection