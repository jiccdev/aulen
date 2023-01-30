import React, { useState } from 'react';
import Link from 'next/link';

/** Bootstrap components */
import Dropdown from 'react-bootstrap/Dropdown';
import styles from '../../../styles/components/NavItem.module.css';

const NavItem = ({ navItem }) => {
  const { name, url, submenu } = navItem;
  const hasdropDownData = navItem?.submenu;

  return hasdropDownData?.length > 0 ? (
    <Dropdown className={styles.dropdown}>
      <Dropdown.Toggle id="dropdown-basic" className={styles.dropdownToggle}>
        {name}
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.dropdownMenu}>
        {submenu &&
          submenu.map((item, index) => (
            <Dropdown.Item
              href={item?.url}
              key={item?.id}
              className={styles.dropdownItem}
            >
              {item?.name}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  ) : (
    <Link
      href={url}
      className={name === 'Intranet' ? styles.navItemBtn : styles.navItem}
    >
      {name}
    </Link>
  );
};

export default NavItem;
