import React from 'react';
import styles from '../../styles/SoyPropietario.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PublishingForm } from '../../src/components/PublishingForm/PublishingForm';



const SoyPropietario = () => {
  return (
    <section>
      <h1>¡Vende tu propiedad rápido y sin complicaciones!</h1>
      <img src='' alt='' />
      <PublishingForm />
    </section>
  );
};

export default SoyPropietario;
