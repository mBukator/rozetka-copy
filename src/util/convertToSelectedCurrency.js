// currencyUtils.js
const convertToSelectedCurrency = (price, exchangeRate, selectedCurrency) => {
  return exchangeRate ? 
    (selectedCurrency === 'UAH' ? (price / exchangeRate).toFixed(2) : price.toFixed(2))
    : '';
};

export default convertToSelectedCurrency;
