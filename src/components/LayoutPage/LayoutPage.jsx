import React from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';

/** Bootstrap components */
import Container from 'react-bootstrap/Container';

const LayoutPage = ({ children }) => {
  return (
    <Container fluid>
      {/* Header */}
      <HeaderPage />

      {/* Content */}
      <Container className="bg-light">
        <main>{children}</main>
      </Container>

      {/* Footer */}
    </Container>
  );
};

export default LayoutPage;
