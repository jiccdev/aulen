import axios from 'axios';

const CustomerServices = {
  getCustomers: async () => {
    const response = await axios.get('https://reqres.in/api/users');
    const data = await response.data;
    return data;
  },

  getCustomer: async (id) => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    const data = await response.data;
    return data;
  },
};

export default CustomerServices;
