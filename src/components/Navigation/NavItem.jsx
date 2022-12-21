import React from 'react';
import Link from 'next/link';

/** Bootstrap components */
import Nav from 'react-bootstrap/Nav';

const NavItem = ({ navItem }) => {
  const { name, url } = navItem;

  return (
    <Nav.Item href="">
      <Link href={url}>{name}</Link>
    </Nav.Item>
  );
};

export default NavItem;
