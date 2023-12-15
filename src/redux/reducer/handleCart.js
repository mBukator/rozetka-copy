const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case 'ADD_PRODUCT':
      // check if exist
      const existForAdd = state.find((x) => x.id === product.id);
      if (existForAdd) {
        return state.map((x) => (x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x));
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            quantity: 1,
          },
        ];
      }
      break;
    case 'DELETE_PRODUCT':
      const existForDelete = state.find((x) => x.id === product.id);
      if (existForDelete.quantity === 1) {
        return state.filter((x) => x.id !== existForDelete.id);
      } else {
        return state.map((x) => (x.id === product.id ? { ...x, quantity: x.quantity - 1 } : x));
      }
      break;
    default:
      return state;
      break;
  }
};

export default handleCart;
