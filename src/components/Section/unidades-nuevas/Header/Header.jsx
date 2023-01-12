import React from "react"
import IconNumber from "../../../IconNumber/IconNumber"
import { benefitsData } from "../../../../api/fakeData/newPropertyBenefits"
import styles from "../../../../../styles/components/soy-inversionista/unidades-nuevas/Header.module.css"
export const Header = () => {
  return (
    <section className={`${styles.customCol}`}>
      <header className={`${styles.customCol} ${styles.mainContainer}`}>
        <div className={`${styles.customCol} ${styles.title}`}>
          <h1 className={`${styles.title__h1}`}>Es momento de invertir en tu nueva propiedad</h1>
          <h2 className={`${styles.title__h2}`}>Te asesoramos en todo el proceso de la compra de tu nuevo activo</h2>
        </div>
        <div className={`${styles.customRow} ${styles.containerBenefits}`}>
          {benefitsData.length > 0 ?
            benefitsData.map(el =>
              <div key={el.id} className={`${styles.customCol} ${styles.componentContainer}`}>
                <IconNumber elNumber={el.id} className={`${styles.numberComponent}`} />
                <span className={`${styles.boldP}`}>{el.span}</span>
                <p>{el.p}</p>
              </div>) : null}
        </div>
      </header>
      <div>
        <h2>Elige en qué quieres invertir hoy</h2>
        <div>
          {/**component */}
        </div>
      </div>
    </section>
  )
}
export default Header