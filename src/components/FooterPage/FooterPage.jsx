import React from 'react';
import AboutFooter from './components/AboutFooter';
import AddressFooter from './components/AddressFooter';
import NavigationFooter from './components/NavigationFooter';
import SocialMediaFooter from './components/SocialMediaFooter';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../../styles/components/FooterPage.module.css';

const FooterPage = () => {
  return (
    <footer className={styles.footerContainer}>
      <Row>
        <Col xs={12} sm={6} xl={3}>
          <AboutFooter />
        </Col>
        <Col xs={12} sm={6} xl={3}>
          <AddressFooter />
        </Col>
        <Col xs={12} sm={6} xl={3}>
          <NavigationFooter />
        </Col>
        <Col xs={12} sm={6} xl={3}>
          <SocialMediaFooter />
        </Col>
      </Row>
    </footer>
  );
};

export default FooterPage;
