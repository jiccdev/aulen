import React from 'react';

/** Bootstrap components */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../../../styles/components/Forms/PlanForm.module.css';
import stylesModal from '../../../styles/components/Modal/PlanForm.module.css';

import { icons } from '../../components/Icons';

const PlanFrom = ({ props }) => {
  const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline, GrClose } = icons;

  /** On form submit */
  const onSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div>
      {props?.show ? (
        <div
          className={stylesModal.closeModal}
          onClick={() => props.setIsModalOpen(!props.isModalOpen)}
        >
          <span>
            <GrClose />
          </span>
        </div>
      ) : (
        ''
      )}

      <Form className={styles.form} onSubmit={onSubmit} id="planForm">
        <h3>¡Despreocúpate por tú propiedad de inversión!</h3>
        <p>Completa el formulacio y entérate como</p>
        <Form.Group className={styles.formGroup} controlId="formBasicName">
          <Form.Label className={styles.label}>
            <FaUserAlt />
          </Form.Label>
          <Form.Control
            type="text"
            className={styles.formControl}
            placeholder="Nombre"
            name="name"
          />
        </Form.Group>

        <Form.Group className={styles.formGroup} controlId="formBasicPhone">
          <Form.Label className={styles.label}>
            <BsTelephoneFill />
          </Form.Label>
          <Form.Control
            type="text"
            className={styles.formControl}
            placeholder="Teléfono celular"
            name="phone"
          />
        </Form.Group>

        <Form.Group className={styles.formGroup} controlId="formBasicEmail">
          <Form.Label className={styles.label}>
            <MdOutlineMailOutline />
          </Form.Label>
          <Form.Control
            type="email"
            className={styles.formControl}
            placeholder="Correo electrónico"
            name="email"
          />
        </Form.Group>

        <Form.Group className={styles.formGroup} controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Al continuar estás aceptando los términos y condiciones y la política de privacidad"
            className={styles.formCheck}
            name="terms"
          />
        </Form.Group>

        <Form.Group className={styles.formGroup}>
          <Button type="submit" className={styles.btnSubmit}>
            Quiero que me contacten
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default PlanFrom;
