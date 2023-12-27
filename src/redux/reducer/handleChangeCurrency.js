const initialState = {
  currency: 'UAH',  // base currency
  exchangeRate: 1, // 1 for the base currency
};

const handleChangeCurrency = (state = initialState, action) => {
  const selectedCurrency = action.payload;
  switch (action.type) {
    case 'CHANGE_CURRENCY':
      return {
        ...state,
        currency: selectedCurrency,
      };
    case 'CHANGE_EXCHANGE_RATE':
      return {
        ...state,
        exchangeRate: action.payload,
      };
    default:
      return state;
  }
};

export default handleChangeCurrency;
