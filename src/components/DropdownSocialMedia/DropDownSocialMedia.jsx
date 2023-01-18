import React from 'react';
import { icons } from '../Icons';

/** Bootstrap components */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from '../../../styles/components/DropdownSocialMedia.module.css';

const DropDownSocialMedia = ({ isModalOpen, setIsModalOpen, handleModal }) => {
  const { BsTelephoneFill, AiOutlineWhatsApp, BsPlusLg } = icons;

  return (
    <span className={styles.dropdownIconToggle}>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <div className={styles.msNavContainer}>
              <ul className={styles.msNav}>
                <input
                  type="checkbox"
                  id="ms-menu"
                  className={styles.msMenuToggle}
                  name="ms-menu-toggle"
                />
                <div className={styles.bgChange}></div>

                <li className={`${styles.msLi} ${styles.msLi2} `}>
                  <a href="https://www.whatsapp.com/?lang=es" target="_blank">
                    <span class="fa fa-flask">
                      <AiOutlineWhatsApp />
                    </span>
                  </a>
                </li>
                <li
                  className={`${styles.msLi} ${styles.msLi1}`}
                  onClick={() => setIsModalOpen(!isModalOpen)}
                >
                  <a
                    href="#"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    <span class="fa fa-fort-awesome">
                      <BsTelephoneFill />
                    </span>
                  </a>
                </li>
                <li className={styles.msMain}>
                  <a href="javascript:void(0)">
                    <label className="ms-menu-toggle-lbl" for="ms-menu">
                      <BsPlusLg
                        style={{
                          fontSize: '2rem',
                          color: '#fff',
                          position: 'relative',
                          top: '.9rem',
                        }}
                      />
                    </label>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <DropdownButton
        id="dropdown-item-button"
        title=""
        className={styles.dropdownBtn}
      >
        <Dropdown.Item as="span" className={styles.dropdownItem}>
          <AiOutlineWhatsApp />
        </Dropdown.Item>
        <Button variant="primary" onClick={() => setIsModalOpen(!isModalOpen)}>
          <BsTelephoneFill />
        </Button>
      </DropdownButton> */}
    </span>
  );
};

export default DropDownSocialMedia;
