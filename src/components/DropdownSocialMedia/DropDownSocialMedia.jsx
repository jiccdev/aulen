import React from 'react';
import { icons } from '../Icons';

/** Bootstrap components */
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from '../../../styles/components/DropdownSocialMedia.module.css';

const DropDownSocialMedia = ({ isModalOpen, setIsModalOpen, handleModal }) => {
  const { BsTelephoneFill, AiOutlineWhatsApp } = icons;

  return (
    <span className={styles.dropdownIconToggle}>
      <DropdownButton id="dropdown-item-button" title="" className={styles.dropdownBtn}>
        <Dropdown.Item as="span" className={styles.dropdownItem}>
          <AiOutlineWhatsApp />
        </Dropdown.Item>
        <Button variant="primary" onClick={() => setIsModalOpen(!isModalOpen)}>
          <BsTelephoneFill />
        </Button>
      </DropdownButton>
    </span>
  );
};

export default DropDownSocialMedia;
