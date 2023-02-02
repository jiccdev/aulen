import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

/** Bootstrap components */
import Dropdown from 'react-bootstrap/Dropdown';
import styles from '../../../styles/components/NavItem.module.css';

const NavItem = ({ navItem }) => {
  const { route } = useRouter();
  const { name, url, submenu } = navItem;
  const hasdropDownData = navItem?.submenu;

  return hasdropDownData?.length > 0 ? (
    <Dropdown className={styles.dropdown}>
      <Dropdown.Toggle
        id="dropdown-basic"
        className={`${styles.dropdownToggle}`}
      >
        {name}
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.dropdownMenu}>
        {submenu &&
          submenu.map((item) => (
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
      // className={name === 'Intranet' ? styles.navItemBtn : styles.navItem}
      className={route === url ? styles.navItemActive : styles.navItem}
    >
      {name}
    </Link>
  );
};

export default NavItem;
