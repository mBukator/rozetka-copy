import axios from 'axios';

const fetchExchangeRate = async (baseCurrency) => {
  try {
    const exchangeRateResponse = await axios.get(
      `https://open.er-api.com/v6/latest/${baseCurrency}`,
    );
    return exchangeRateResponse.data.rates.USD;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    throw error;
  }
};

export default fetchExchangeRate;
