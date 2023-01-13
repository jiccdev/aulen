import Image from "next/image"
import React from "react"
import styles from "../../../../styles/components/soy-inversionista/unidades-nuevas/FeaturedCard.module.css"

export const FeaturedCard = ({cod, img, name, location, price, bedroom, bathroom, size}) => {
  return(
    <>
    <article className={`${styles.customCol} ${styles.card}`}>
      <div>
        <Image />
      </div>
      <div className={`${styles.customCol}`}>
        <h3 className={`${styles.card__name}`}></h3>
        <p className={`${styles.card__location}`}></p>
      </div>
      <div className={`${styles.customCol}`}>
        <p className={`${styles.card__price}`}></p>
      </div>
      <div className={`${styles.customRow}`}>
        <div className={`${styles.customCol} ${styles.card__specs}`}>
          <p className={`${styles.card__specs__bedroom}`}></p>
          <p className={`${styles.card__specs__bathroom}`}></p>
          <p className={`${styles.card__specs__size}`}></p>
        </div>
        <button className={`${styles.card__details__btn}`}></button>
      </div>
    </article>
    </>
  )
}
export default FeaturedCard