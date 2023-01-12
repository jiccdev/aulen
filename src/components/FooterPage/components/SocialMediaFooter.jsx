import React from 'react';
import styles from '../../../../styles/components/FooterPage.module.css';

const SocialMediaFooter = () => {
  return (
    <ul>
      <li>
        <a
          href="https://www.facebook.com/aulenpropiedades"
          className={styles.navLinkFooter}
        >
          Face
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/aulenpropiedades/"
          className={styles.navLinkFooter}
        >
          Insta
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com" className={styles.navLinkFooter}>
          Linkedin
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaFooter;
