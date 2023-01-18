import React from "react"
import styles from "../../../../../styles/components/soy-inversionista/unidades-nuevas/Destacados.module.css"
import FeaturedCard from "../FeaturedCard"
import { icons } from "../../../Icons"
export const Destacados = () => {
  const { RiArrowRightSLine, RiArrowLeftSLine } = icons
  return (
    <>
      <section className={`${styles.customCol} ${styles.section}`}>
        <h2 className={`${styles.section__h2}`}>Proyectos destacados</h2>
        <div className={`${styles.customRow}`}>
          <button className={`${styles.customCol} ${styles.button}`}>
            <RiArrowLeftSLine className={`${styles.arrow}`} />
          </button>
          <div className={`${styles.customRow} ${styles.featuredCards}`}>
            <FeaturedCard data-aos='fade-in' />
            <FeaturedCard />
            <FeaturedCard />
          </div>
          <button className={`${styles.customCol} ${styles.button}`}>
            <RiArrowRightSLine className={`${styles.arrow}`} />
          </button>
        </div>
      </section>
    </>
  )
}

export default Destacados