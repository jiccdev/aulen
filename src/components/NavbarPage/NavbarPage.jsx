import React from 'react';
import LogoPage from '../LogoPage/LogoPage';
import Navigation from '../Navigation/Navigation';

/** Bootstrap components */
import Navbar from 'react-bootstrap/Navbar';
import styles from '../../../styles/components/NavbarPage.module.css';

const NavbarPage = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
      <Navbar.Brand href="/">
        <LogoPage />
      </Navbar.Brand>
      <Navigation />
    </Navbar>
  );
};

export default NavbarPage;
