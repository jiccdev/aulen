import React, { useState } from 'react';
import CustomersContext from './CustomersContext';

/** API Services */
import CustomersServices from '../../services/CustomerServices';

const CustomersProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  // Get all customers
  const getAllCustomers = async () => {
    const response = await CustomersServices.getCustomers();
    const data = response?.data;
    setCustomers(data);
  };

  return (
    <CustomersContext.Provider
      value={{
        customers,
        getAllCustomers,
      }}
    >
      {children}
    </CustomersContext.Provider>
  );
};

export default CustomersProvider;
