import React from "react";
import styles from '../../../styles/components/soy-propietario/IconNumber.module.css'

export const IconNumber = ({elNumber}) => {
    return(
        <h2 className={`${styles.number}`}>{elNumber}</h2>
    )
}
export default IconNumber