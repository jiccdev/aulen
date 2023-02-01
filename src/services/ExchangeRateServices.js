import axios from 'axios';

const ExchangeRateServices = {
  getExchangeRateUF: async () => {
    const response = await axios.get(
      `https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey=${process.env.NEXT_PUBLIC_API_URL_EXCHANGE_RATE_UF_API_KEY}&formato=json`
    );
    return response.data;
  },
};

export default ExchangeRateServices;
