import React, { useState } from 'react';
import PropertiesContext from './PropertiesContext';
import { propertiesData } from '../../api/fakeData/properties';

/** API Services */
import PropertiesServices from '../../services/PropertiesServices';

const PropertiesProvider = ({ children }) => {
  const [data, setData] = useState(propertiesData);
  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState({});
  const [statusCodeMsg, setStatusCodeMsg] = useState('');

  /** Get Properties */
  const getProperties = async (realtorId, statusId) => {
    try {
      const response = await PropertiesServices.getProperties(
        realtorId,
        statusId
      );
      setProperties(response?.data);
    } catch (error) {
      const { statusCode } = error.response.data;
      setStatusCodeMsg(statusCode) && new Error(error.response.data);
    }
  };

  /** Get Property */
  const getProperty = async (id, realtorId, statusId) => {
    try {
      const response = await PropertiesServices.getProperty(
        id,
        realtorId,
        statusId
      );
      setProperty(response);
    } catch (error) {
      const { statusCode } = error.response.data;
      setStatusCodeMsg(statusCode) && new Error(error.response.data);
    }
  };

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        property,
        getProperties,
        getProperty,
        contextData: [data, setData],
        // getPagination,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
