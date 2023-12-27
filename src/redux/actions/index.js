export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  };
};

export const deleteProduct = (product) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: product,
  };
};

export const changeCurrency = (currency) => {
  return {
    type: 'CHANGE_CURRENCY',
    payload: currency,
  };
};

export const changeExchangeRate = (exchangeRate) => {
  return {
    type: 'CHANGE_EXCHANGE_RATE',
    payload: exchangeRate,
  };
};