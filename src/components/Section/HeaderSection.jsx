import React from 'react';
import styles from '../../../styles/components/HeaderSection.module.css';

const HeaderSection = ({ titleSection }) => {
  return (
    <div className={styles.containerSection}>
      <h2 className={styles.h2}>{titleSection || ''}</h2>
    </div>
  );
};

export default HeaderSection;
