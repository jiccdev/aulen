import api from '../../src/api';

const PropertiesServices = {
  getProperties: async (realtorId, statusId) => {
    const response = await api.get(
      `properties?realtorId=${realtorId}&statusId=${statusId}`
    );
    return response.data;
  },

  getProperty: async (id) => {
    const response = await api.get(`properties/${id}`);
    return response.data;
  },
};

export default PropertiesServices;
