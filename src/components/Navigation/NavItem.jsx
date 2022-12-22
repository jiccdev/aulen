import React from 'react';
import Link from 'next/link';

/** Bootstrap components */
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from '../../../styles/components/NavItem.module.css';

const NavItem = ({ navItem }) => {
  const { name, url, submenu } = navItem;
  const hasdropDownData = navItem?.submenu;

  return hasdropDownData?.length > 0 ? (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {name}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {submenu &&
          submenu.map((item, index) => (
            <Dropdown.Item href={item?.url} key={item?.id}>
              {item?.name}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  ) : (
    <Link href={url} className={styles.navItem}>
      {name}
    </Link>
  );
};

export default NavItem;
