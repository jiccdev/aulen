import React, { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos";
import 'aos/dist/aos.css'
import styles from "../../../../../styles/components/soy-inversionista/unidades-nuevas/Destacados.module.css"
import FeaturedCard from "../FeaturedCard"
import { icons } from "../../../Icons"
import GliderJs from "../../../GliderJs/GliderJs";

export const Destacados = () => {
  const { RiArrowRightSLine, RiArrowLeftSLine } = icons
  useEffect(() => {
    Aos.init()
  })
  return (
    <>
      <section className={`${styles.customCol} ${styles.section}`}>
        <h2 className={`${styles.section__h2}`}>Proyectos destacados</h2>
        <div className={`${styles.customRow} ${styles.container}`}>
          <div className={`${styles.customRow} ${styles.containerGlider}`} data-aos='fade-up' >
            <GliderJs>
            <FeaturedCard  data-aos='fade-up' data-aos-delay="100" />
            <FeaturedCard  data-aos='fade-up' data-aos-delay="200" />
            <FeaturedCard  data-aos='fade-up' data-aos-delay="300" />
            <FeaturedCard  data-aos='fade-up' data-aos-delay="300" />
            <FeaturedCard  data-aos='fade-up' data-aos-delay="300" />
            </GliderJs>
          </div>
        </div>
      </section>
    </>
  )
}

export default Destacados