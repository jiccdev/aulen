import React from "react";
import IconNumber from "../../../IconNumber/IconNumber";
import styles from '../../../../../styles/components/soy-propietario/quiero-arrendar/Steps/Steps.module.css'

export const Steps = ({ steps }) => {
  return (
    <>
      {steps.length > 0 ?
        steps.map(el =>
          <div key={el.id} className={`${styles.customRow} ${styles.stepsDiv}`}>
            <IconNumber elNumber={el.id} />
            <div className={`${styles.customCol}`}>
              <span className={`${styles.steps__span}`}>{el.span}</span>
              <p className={`${styles.steps__p}`}> {el.p}</p>
            </div>
          </div>
        )
        : null}
    </>
  )
}

export default Steps