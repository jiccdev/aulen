import React, { useEffect } from "react"
import Aos from "aos";
import 'aos/dist/aos.css'
import styles from '../../../styles/components/soy-propietario/quiero-arrendar/OurService/OurService.module.css'
import IconNumber from "../IconNumber/IconNumber"
import { OurServicesData } from '../../api/fakeData/OurServices'
import { icons } from "../Icons"
export const OurService = () => {
  useEffect(() => {
    Aos.init()
  })
  return (
    <>
    {OurServicesData !== 0 ? OurServicesData.map(el => <div 
    key={el.id} 
    className={`${styles.customCol} ${styles.OurServiceContainer}`}
    data-aos='fade-up' data-aos-delay={`${el.id * 100}`} >
        {el.img}
        <IconNumber elNumber={el.id} />
        <p><span className={`${styles.boldP}`}>{el.span}</span>{el.p}</p>
      </div>) : null}
    </>

  )
}

export default OurService