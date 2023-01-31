import React, { useState } from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import DropDownSocialMedia from '../DropdownSocialMedia/DropDownSocialMedia';
import FooterPage from '../FooterPage/FooterPage';
import ModalPlanForm from '../Modal/ModalPlanForm';

/** Bootstrap components */
import Container from 'react-bootstrap/Container';
import styles from '../../../styles/components/LayoutPage.module.css';

const LayoutPage = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /** handle modal */
  const handleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <Container fluid className="m-0 p-0">
      {/* Header */}
      <HeaderPage />

      {/* Content */}
      <Container fluid className={styles.layout}>
        <main>{children}</main>
      </Container>

      {/* Footer */}
      <FooterPage />

      {/* Dropdown social media */}
      <DropDownSocialMedia
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleModal={handleModal}
      />

      {/* Modal */}
      {isModalOpen && (
        <ModalPlanForm
          show={isModalOpen}
          onHide={() => setIsModalOpen(false)}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </Container>
  );
};

export default LayoutPage;
