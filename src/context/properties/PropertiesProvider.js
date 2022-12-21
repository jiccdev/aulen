import React, { useState } from 'react';
import PropertiesContext from './PropertiesContext';

/** API Services */
import PropertiesServices from '../../services/PropertiesServices';

const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

  // Get all properties
  const getProperties = async () => {
    const response = await PropertiesServices.getProperties();
    const data = response?.data;
    setProperties(data);
  };

  return (
    <PropertiesContext.Provider value={{ properties, getProperties }}>
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
