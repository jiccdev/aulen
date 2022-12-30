import React from "react";
import IconNumber from "../../../IconNumber/IconNumber";
import styles from '../../../../../styles/components/soy-propietario/quiero-arrendar/Steps/Steps.module.css'

export const Steps = () => {
    return(
        <div className={`${styles.customRow}`}>
            <IconNumber />
            <div className={`${styles.customCol}`}>
                <p className={`${styles.steps__p}`}><span className={`${styles.steps__span}`}>Establecemos una estrategia</span> de acuerdo a los objetivos y necesidades planteadas.</p>
            </div>
        </div>
    )
}

export default Steps