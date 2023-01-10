import React from "react";
import InvestmentModel from "./investmentModel/InvestmentModel";
import { investmentModelData } from "../../../api/fakeData/investmentModel";

export const HeaderSection = () =>{
  return(
    <header className={``}>
      <h1 className={``}>Nuestro modelo de Inversión remate seguro</h1>
      <h2 className={``}>Único en el mercado que genera hasta un 15% de rentabilidad por operación</h2>
      <div className={``}>
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