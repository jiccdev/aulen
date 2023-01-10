import React from "react"
import styles from "../../../../../styles/components/soy-inversionista/investmentModel/InvestmentModel.module.css"

export const InvestmentModel = ({investment}) => {
  return(
    <>
      <div className={``}>
        {investment.img}
        <div className={``}>
          <h2 className={``}>{investment.h2}</h2>
          <p className={``}>{investment.p}</p>
        </div>
      </div>
    </>
  )
}
export default InvestmentModel