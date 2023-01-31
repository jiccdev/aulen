import api from '../../src/api';

const PropertiesServices = {
  getProperties: async (realtorId, statusId) => {
    const response = await api.get(
      `properties?realtorId=${realtorId}&statusId=${statusId}`
    );
    return response.data;
  },

  getProperty: async (id, realtorId, statusId) => {
    const response = await api.get(
      `properties/${id}?realtorId=${realtorId}&statusId=${statusId}`
    );
    return response.data;
  },

  getPagination: async (limit, page) => {
    const response = await api.get(`/properties?limit=${limit}&page=${page}`);
    return response.data;
  },
};

export default PropertiesServices;
