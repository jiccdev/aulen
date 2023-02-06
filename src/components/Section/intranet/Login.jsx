import React from 'react';
import Image from 'next/image';
import About from '../../../assets/img/Inicio/Principal/empacando.webp';

import styles from '../../../../styles/components/Intranet/Login.module.css';

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.loginBox}>
        <div className={styles.left}>
          <div className={styles.contact}>
            <form action="">
              <h3>INICIAR SESIÓN</h3>
              <input type="text" name="user" placeholder="Usuario" />
              <input type="text" name="password" placeholder="Contraseña" />
              <button className={styles.submit}>Iniciar sesión</button>
            </form>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightText}>
            <h2>INTRANET</h2>
            <h5>Aulen Propiedades</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
