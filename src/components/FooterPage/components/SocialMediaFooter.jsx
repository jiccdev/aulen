import React from 'react';
import { icons } from '../../../components/Icons';
import styles from '../../../../styles/components/FooterPage.module.css';

const SocialMediaFooter = () => {
  const { TfiFacebook, BsInstagram, AiFillYoutube } = icons;
  return (
    <div className={styles.socialMediaFooterContainer}>
      <div className={styles.socialMediaTopInfo}>
        <h3>Síguenos en:</h3>
      </div>
      <ul className={styles.socialMediaNavbarNav}>
        <li className={styles.socialMediaNavItem}>
          <a
            href="https://www.facebook.com/aulenpropiedades"
            target="_blank"
            className={styles.socialMediaNavLink}
          >
            <TfiFacebook className={styles.icon} />
          </a>
        </li>
        <li className={styles.socialMediaNavItem}>
          <a
            href="https://www.instagram.com/aulenpropiedades/"
            target="_blank"
            className={styles.socialMediaNavLink}
          >
            <BsInstagram className={styles.icon} />
          </a>
        </li>
        <li className={styles.socialMediaNavItem}>
          <a
            href="https://www.youtube.com"
            target="_blank"
            className={styles.socialMediaNavLink}
          >
            <AiFillYoutube className={styles.icon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaFooter;
