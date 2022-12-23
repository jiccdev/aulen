import React from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';

/** Bootstrap components */
import Container from 'react-bootstrap/Container';
import styles from '../../../styles/components/LayoutPage.module.css';

const LayoutPage = ({ children }) => {
  return (
    <Container fluid>
      {/* Header */}
      <HeaderPage />

      {/* Content */}
      <Container className={styles.layout}>
        <main>{children}</main>
      </Container>

      {/* Footer */}
    </Container>
  );
};

export default LayoutPage;
