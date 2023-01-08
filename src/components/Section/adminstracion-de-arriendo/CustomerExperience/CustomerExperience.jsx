import React, { useEffect, useContext } from 'react';
import CustomersContext from '../../../../context/customers/CustomersContext';
import HeaderSection from '../../HeaderSection';
import CustomerCard from '../../../Card/CustomerCard';
import GliderJs from '../../../../components/GliderJs/GliderJs';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import styles from '../../../../../styles/components/administracion-de-arriendo/CustomerExperience.module.css';

const CustomerExperience = () => {
  const { customers, getAllCustomers } = useContext(CustomersContext);

  useEffect(() => {
    getAllCustomers();
  }, []);

  return (
    <section id="customerExperience">
      <Row className={styles.customerExperience}>
        <HeaderSection titleSection="Conoce la experiencia de nuestros clientes" />
        <GliderJs>
          {customers &&
            customers.map((customer) => (
              <CustomerCard key={customer?.id} customer={customer} />
            ))}
        </GliderJs>
      </Row>
    </section>
  );
};

export default CustomerExperience;
