import api from '../../src/api';

const CustomerServices = {
  getCustomers: async () => {
    const response = await api.get('/users');
    const data = await response.data;
    return data;
  },

  getCustomer: async (id) => {
    const response = await api.get(`user/${id}`);
    const data = await response.data;
    return data;
  },
};

export default CustomerServices;
