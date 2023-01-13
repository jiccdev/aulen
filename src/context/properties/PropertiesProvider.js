import React, { useState } from 'react';
import PropertiesContext from './PropertiesContext';
import { propertiesData } from '../../api/fakeData/properties';

/** API Services */
import PropertiesServices from '../../services/PropertiesServices';

const PropertiesProvider = ({ children }) => {
  const [data, setData] = useState(propertiesData);
  const [properties, setProperties] = useState([]);
  const [statusCodeMsg, setStatusCodeMsg] = useState('');

  /** Get Properties */
  const getProperties = async (realtorId, statusId) => {
    try {
      const response = await PropertiesServices.getProperties(
        realtorId,
        statusId
      );
      setProperties(response.data);
    } catch (error) {
      const { statusCode } = error.response.data;
      setStatusCodeMsg(statusCode) && new Error(error.response.data);
    }
  };

  return (
    <PropertiesContext.Provider
      value={{ properties, getProperties, contextData: [data, setData] }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
