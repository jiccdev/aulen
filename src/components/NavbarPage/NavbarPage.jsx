import React from 'react';
import LogoPage from '../LogoPage/LogoPage';
import Navigation from '../Navigation/Navigation';

/** Bootstrap components */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../../../styles/components/NavbarPage.module.css';

const NavbarPage = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={styles.navbar}
    >
      <Container>
        <Navbar.Brand href="/">
          <LogoPage />
        </Navbar.Brand>
        <Navigation />
      </Container>
    </Navbar>
  );
};

export default NavbarPage;
