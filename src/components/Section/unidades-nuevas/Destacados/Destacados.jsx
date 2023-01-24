import React, { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos";
import 'aos/dist/aos.css'
import styles from "../../../../../styles/components/soy-inversionista/unidades-nuevas/Destacados.module.css"
import FeaturedCard from "../FeaturedCard"
import { icons } from "../../../Icons"

export const Destacados = () => {
  const { RiArrowRightSLine, RiArrowLeftSLine } = icons
  useEffect(() => {
    Aos.init()
  })
  return (
    <>
      <section className={`${styles.customCol} ${styles.section}`}>
        <h2 className={`${styles.section__h2}`}>Proyectos destacados</h2>
        <div className={`${styles.customRow}`}>
          <button className={`${styles.customCol} ${styles.button}`}>
            <RiArrowLeftSLine className={`${styles.arrow}`} />
          </button>
          <div className={`${styles.customRow} ${styles.featuredCards}`} data-aos='fade-up' >
            <FeaturedCard  data-aos='fade-up' data-aos-delay="100" />
            <FeaturedCard  data-aos='fade-up' data-aos-delay="200" />
            <FeaturedCard  data-aos='fade-up' data-aos-delay="300" />
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