import axios from 'axios';
const token = '2WyiQh7CBv4JzQnO4no8Ac6cLNfG73pV';

const ExchangeRateServices = {
  getExchangeRateUF: async () => {
    const response = await axios.get(
      `https://apilayer.com/api/endpoint?param1=value1&param2=value2&apikey=${token}}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
};

export default ExchangeRateServices;
