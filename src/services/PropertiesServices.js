import api from '../../src/api';

const PropertiesServices = {
  getProperties: async () => {
    const response = await api.get('/users');
    const data = await response.data;
    return data;
  },

  getProperty: async (id) => {
    const response = await api.get(`user/${id}`);
    const data = await response.data;
    return data;
  },
};

export default PropertiesServices;
