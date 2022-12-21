import React, { Fragment } from 'react';
import NavItem from './NavItem';
import { navigationData } from '../../api/fakeData/navigation';
import styles from '../../../styles/components/NavbarPage.module.css';

/** Bootstrap components */
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Fragment>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className={styles.navbarToggler}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={styles.navbar}>
          {navigationData &&
            navigationData.map((navItem) => (
              <NavItem key={navItem?.id} navItem={navItem} />
            ))}
        </Nav>
      </Navbar.Collapse>
    </Fragment>
  );
};

export default Navigation;
