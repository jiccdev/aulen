import React from 'react';
import styles from '../../../../styles/components/Intranet/Login.module.css';

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.loginBox}>
        <div className={styles.left}>
          <div className={styles.topLink}>
            <a href="#">
              <img
                src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download"
                alt=""
                className={styles.image}
              />
              Return home
            </a>
          </div>
          <div className={styles.contact}>
            <form action="">
              <h3>SIGN IN</h3>
              <input type="text" placeholder="USERNAME" />
              <input type="text" placeholder="PASSWORD" />
              <button class="submit" className={styles.submit}>
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightText}>
            <h2>INTRANET</h2>
            <h5>Aulen Propiedades</h5>
          </div>
          <div class="right-inductor" className={styles.rightInductor}>
            <img
              src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
