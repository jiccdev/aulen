import React from "react"
import styles from '../../../styles/components/soy-propietario/quiero-arrendar/OurService/OurService.module.css'
import IconNumber from "../IconNumber/IconNumber"
import { OurServicesData } from '../../api/fakeData/OurServices'
import { icons } from "../Icons"
export const OurService = () => {
  
  return (
    <>
    {OurServicesData !== 0 ? OurServicesData.map(el => <div key={el.id} className={`${styles.customCol} ${styles.OurServiceContainer}`} >
        {el.img}
        <IconNumber elNumber={el.id} />
        <p><span className={`${styles.boldP}`}>{el.span}</span>{el.p}</p>
      </div>) : null}
    </>

  )
}

export default OurService