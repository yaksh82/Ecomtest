const cart = [];

const product = (state = cart, action) => {
  const payload = action.payload;
  
  switch (action.type) {
    case "ADDITEM":
      const existingProduct = state.find((x) => x.id === payload.id);

      if (existingProduct) {
        return state.map((product) =>
          product.id === payload.id ? { ...product, qty: product.qty + 1 } : product
        );
      } else {
        return [
          ...state,
          {
            ...payload,
            qty: 1,
          },
        ];
      }
      
    case "DELITEM":
      const existingItem = state.find((x) => x.id === payload.id);

      if (existingItem && existingItem.qty === 1) {
        return state.filter((item) => item.id !== existingItem.id);
      } else {
        return state.map((item) =>
          item.id === payload.id ? { ...item, qty: item.qty - 1 } : item
        );
      }

    default:
      return state;
  }
};

export default product;
