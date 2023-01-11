import Image from "next/image";
import houseImg from "../../img/soy-propietario/house.jpg"
import React from "react";
import styles from '../../../styles/components/soy-inversionista/InvestmentForm.module.css';
import { icons } from '../Icons';
/** Recibe un objeto con los datos. */
export const InvestmentForm = ({ formData }) => {
  const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline } = icons
  return (
    <form className={`${styles.customRow} ${styles.mainContainer}`} >
      <div className={`${styles.customRow} ${styles.submainContainer}`}>
        <Image className={styles.image} src={houseImg} />
        <div className={`${styles.customCol} ${styles.form}`}>
          <header className={`${styles.customCol} ${styles.form__header}`}>
            <h2>{formData.h2}</h2>
            <h3>{formData.h3}</h3>
          </header>
          <main className={`${styles.customCol} ${styles.form__inputs}`}>
            <div className={`${styles.customRow} ${styles.form__inputs__name}`}>
              <FaUserAlt className={styles.formIcon} />
              <input type="text" placeholder="Nombre" />
            </div>
            <div className={`${styles.customRow} ${styles.form__inputs__tel}`}>
              <BsTelephoneFill className={styles.formIcon} />
              <input type="text" placeholder="Teléfono celular" />
            </div>
            <div className={`${styles.customRow} ${styles.form__inputs__email}`}>
              <MdOutlineMailOutline className={styles.formIcon} />
              <input type="text" placeholder="Correo electrónico" />
            </div>
          </main>
          <button className={styles.form__btn}>{formData.btn}</button>
        </div>
      </div>
    </form>
  )
}