import React, { useEffect, useContext } from 'react';
import CustomersContext from '../../../../context/customers/CustomersContext';
import CustomerCard from '../../../Card/CustomerCard';
import GliderJs from '../../../../components/GliderJs/GliderJs';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';

const CustomerExperience = () => {
  const { customers, getAllCustomers } = useContext(CustomersContext);

  console.log(customers);

  useEffect(() => {
    getAllCustomers();
  }, []);

  return (
    <Row>
      <GliderJs>
        {customers &&
          customers.map((customer) => (
            <CustomerCard key={customer?.id} customer={customer} />
          ))}
      </GliderJs>
    </Row>
  );
};

export default CustomerExperience;
