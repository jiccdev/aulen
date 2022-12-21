import React from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';

/** Bootstrap components */
import Container from 'react-bootstrap/Container';

const LayoutPage = ({ children }) => {
  return (
    <Container>
      <HeaderPage />
      {/* Content */}
      <main>{children}</main>

      {/* Footer */}
    </Container>
  );
};

export default LayoutPage;
