import React from 'react';
import styles from '../../../styles/components/HeaderSection.module.css';

const HeaderSection = ({ titleSection, fontSize }) => {
  return (
    <div className={styles.containerSection}>
      <h2 className={fontSize ? styles.h2_3xl : styles.h2}>
        {titleSection || ''}
      </h2>
    </div>
  );
};

export default HeaderSection;
