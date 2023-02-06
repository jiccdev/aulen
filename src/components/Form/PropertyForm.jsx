import React from 'react';
import Link from 'next/link';
import { icons } from '../../components/Icons';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../../../styles/components/Forms/PlanForm.module.css';
import stylesModal from '../../../styles/components/Modal/PlanForm.module.css';
import { Col } from 'react-bootstrap';
// import FadeComponent from '../Reveal/FadeComponent';

const PropertyForm = ({ titleContentForm, textAlign, subtitle, ...props }) => {
  const { haveAction1, haveAction2 } = { ...props };
  const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline, GrClose } = icons;

  /** On form submit */
  const onSubmit = (ev) => {
    ev.preventDefault();
  };

  // console.log('componentProps', !!haveAction1);

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

      {/* <FadeComponent right cascade opposite duration={1400}> */}
        <Form className={styles.form} onSubmit={onSubmit} id="planForm">
          <h3
            style={{
              textAlign: textAlign || 'left',
            }}
          >
            {titleContentForm}
          </h3>
          {subtitle === '' ? '' : <p>{subtitle}</p>}

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

          <Row className={styles.rowBtnForm}>
            {!!haveAction1 && (
              <Col sm={12} lg={6}>
                <Form.Group className={styles.formGroup}>
                  <Button type="submit" className={styles.btnSubmit}>
                    {haveAction1?.text || ''}
                  </Button>
                </Form.Group>
              </Col>
            )}

            {!!haveAction2 && (
              <Col sm={12} lg={6}>
                <Form.Group className={styles.formGroup}>
                  <Button type="submit" className={styles.btnSubmit}>
                    {haveAction2?.text || ''}
                  </Button>
                </Form.Group>
              </Col>
            )}
          </Row>

          <Form.Group
            className={styles.formGroup}
            controlId="formBasicCheckbox"
          >
            {/* <Form.Check
              type="checkbox"
              label="Al continuar estás aceptando los términos y condiciones y la política de privacidad"
              className={styles.formCheck}
              name="terms"
            /> */}
            <Link href="/" target="_blank" className={styles.formCheck}>
              Al continuar estás aceptando los términos y condiciones y la
              política de privacidad
            </Link>
          </Form.Group>
        </Form>
      {/* </FadeComponent> */}
    </div>
  );
};

export default PropertyForm;
