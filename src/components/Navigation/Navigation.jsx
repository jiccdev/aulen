import React, { Fragment } from 'react';
import NavItem from './NavItem';
import { navigationData } from '../../api/fakeData/navigation';

/** Bootstrap components */
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Fragment>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
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
