import React from "react";
import styles from '../../../styles/components/PublishingForm.module.css';

export const PublishingForm = () => {
  return (
    <form className={`${styles.customCol} ${styles.form}`} >
      <header className={`${styles.customCol} ${styles.form__header}`}>
        <h2>¡Publica tu propiedad gratis!</h2>
        <h3>COMPLETA EL FORMULARIO</h3>
      </header>
      <main className={`${styles.customCol} ${styles.form__inputs}`}>
        <div className={`${styles.customRow} ${styles.form__inputs__name}`}>
          <img />
          <input type="text" placeholder="Nombre" />
        </div>
        <div className={`${styles.customRow} ${styles.form__inputs__tel}`}>
          <img />
          <input type="text" placeholder="Teléfono celular" />
        </div>
        <div className={`${styles.customRow} ${styles.form__inputs__email}`}>
          <img />
          <input type="text" placeholder="Correo electrónico"/>
        </div>
        <label className={styles.customRow}>
          <input type="checkbox" id="publishingFormTerms" value="form_terms" />
          Al continuar estás aceptando los términos y condiciones y la política de privacidad.
        </label>
      </main>
      <button className={styles.form__btn}>ENVIAR</button>
    </form>
  )
}