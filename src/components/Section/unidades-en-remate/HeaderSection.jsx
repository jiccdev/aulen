import React from "react";
import InvestmentModel from "./investmentModel/InvestmentModel";

export const HeaderSection = () =>{
  return(
    <header className={``}>
      <h1 className={``}>Nuestro modelo de Inversión remate seguro</h1>
      <h2 className={``}>Único en el mercado que genera hasta un 15% de rentabilidad por operación</h2>
      <div className={``}>
        <InvestmentModel />
      </div>
    </header>
  )
}
export default HeaderSection