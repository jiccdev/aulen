import React from 'react';
import PlanForm from '../Form/PlanFrom';

/** Bootstrap components */
import Modal from 'react-bootstrap/Modal';
import styles from '../../../styles/components/Modal/PlanForm.module.css';

const ModalPlanForm = ({ ...props }) => {
  return (
    <Modal
      {...props}
      size="auto"
      aria-labelledby="contained-modal-title-vcenter"
      className={styles.modal}
      centered
    >
      {/* modal content */}

      <PlanForm />
    </Modal>
  );
};

export default ModalPlanForm;
