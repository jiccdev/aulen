import React from 'react';
import NavbarPage from '../NavbarPage/NavbarPage';
import styles from '../../../styles/components/Header.module.css';

const HeaderPage = () => {
  return (
    <header className={styles.header}>
      <NavbarPage />
    </header>
  );
};

export default HeaderPage;
