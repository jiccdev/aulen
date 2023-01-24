import React, {useEffect} from "react"
import Aos from "aos";
import 'aos/dist/aos.css'
import styles from "../../../../../styles/components/soy-inversionista/investmentModel/InvestmentModel.module.css"

export const InvestmentModel = ({investment}) => {
  useEffect(() => {
    Aos.init()
  })
  return(
    <>
      <div className={`${styles.customCol} ${styles.mainContainer}`} data-aos='fade-up' data-aos-delay={`${investment.id * 100}`} >
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