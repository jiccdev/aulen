import React from "react"
import IconNumber from "../../../IconNumber/IconNumber"
import { benefitsData } from "../../../../api/fakeData/newPropertyBenefits"
import styles from "../../../../../styles/components/soy-inversionista/unidades-nuevas/Header.module.css"
import { simpleCardData } from "../../../../api/fakeData/simpleCard"
import SimpleCard from "../SimpleCard"
import FadeComponent from "../../../Reveal/FadeComponent"
export const Header = () => {
  return (
    <section className={`${styles.customCol} ${styles.sectionContainer}`}>
      <header className={`${styles.customCol} ${styles.mainContainer}`}>
      <FadeComponent bottom cascade>
        <div className={`${styles.customCol} ${styles.title}`}>
          <h1 className={`${styles.title__h1}`}>Es momento de invertir en tu nueva propiedad</h1>
          <h2 className={`${styles.title__h2}`}>Te asesoramos en todo el proceso de la compra de tu nuevo activo</h2>
        </div>
        </FadeComponent>
        <div className={`${styles.customRow} ${styles.containerBenefits}`}>
          {benefitsData.length > 0 ?
            benefitsData.map(el =>
              <FadeComponent bottom cascade>
              <div key={el.id} className={`${styles.customCol} ${styles.componentContainer}`}>
                <IconNumber elNumber={el.id} className={`${styles.numberComponent}`} />
                <span className={`${styles.boldP}`}>{el.span}</span>
                <p>{el.p}</p>
              </div></FadeComponent>) : null}
        </div>
      </header>
      <div className={`${styles.customCol} ${styles.chooseInvest}`}>
      <FadeComponent bottom cascade>
        <h2 className={`${styles.chooseInvest__h2}`}>Elige en qué quieres invertir hoy</h2>
        </FadeComponent>
        <div className={`${styles.customRow} ${styles.cardContainer}`}>
          {simpleCardData.length > 0 ?
          simpleCardData.map(el => 
            <SimpleCard img={el.img} title={el.title} />
          ) : null}
        </div>
      </div>
    </section>
  )
}
export default Header