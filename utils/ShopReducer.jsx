export const initialState = {
  products: [],
  categories: [],
  cart: [],
  checkout: {
    shippingOptions: [],
    checkoutTokenObject: {},
  },
  subtotal: 0,
  total_items: 0,
  total_unique_items: 0,
  line_items: [],
};

const shopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART":
      return { ...state, ...payload };
    case "STORE_PRODUCTS":
      return {
        ...state,
        products: payload.products,
      };
    case "STORE_CATEGORY":
      return {
        ...state,
        categories: payload.categories,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export default shopReducer;
