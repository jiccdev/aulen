import React from "react";
import IconNumber from "../../../IconNumber/IconNumber";
import styles from '../../../../../styles/components/soy-propietario/quiero-arrendar/Steps/Steps.module.css'
// import FadeComponent from "../../../Reveal/FadeComponent";
export const Steps = ({ steps }) => {
  return (
    <>
      {steps.length > 0 ?
        steps.map(el =>
          <div key={el.id} className={`${styles.customRow} ${styles.stepsDiv}`}>
            {/* <FadeComponent left cascade> */}
            <IconNumber elNumber={el.id} />
            <div className={`${styles.customCol}`}>
              <span className={`${styles.steps__span}`}>{el.span}</span>
              <p className={`${styles.steps__p}`}> {el.p}</p>
            </div>
            {/* </FadeComponent> */}
          </div>
        )
        : null}
    </>
  )
}

export default Steps