import React from "react"
import styles from "../../../../../styles/components/soy-inversionista/unidades-nuevas/Destacados.module.css"
import FeaturedCard from "../FeaturedCard"
export const Destacados = () => {
  return(
    <>
    <section className={`${styles.customCol}`}>
      <h2 className={`${styles.section__h2}`}>Proyectos destacados</h2>
      <div className={`${styles.customRow}`}>
        <button></button>
        <FeaturedCard />
        <button></button>
      </div>
    </section>
    </>
  )
}

export default Destacados