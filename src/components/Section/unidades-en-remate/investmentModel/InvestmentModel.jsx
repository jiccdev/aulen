import React from "react"
import styles from "../../../../../styles/components/soy-inversionista/investmentModel/InvestmentModel.module.css"

export const InvestmentModel = ({investment}) => {
  return(
    <>
      <div className={`${styles.customCol} ${styles.mainContainer}`}>
        {investment.img}
        <div className={`${styles.customCol}`}>
          <h2 className={`${styles.investment__h2}`}>{investment.h2}</h2>
          <p className={`${styles.investment__p}`}>{investment.p}</p>
        </div>
      </div>
    </>
  )
}
export default InvestmentModel