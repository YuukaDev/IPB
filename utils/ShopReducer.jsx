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
  customer: {},
};

const shopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART":
      return { ...state, ...payload };
    case "STORE_CART":
      return { ...state, cart: payload.cart };
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
    case "SET_CHECKOUT":
      return {
        ...state,
        ...payload,
      };
    case "SET_CUSTOMER":
      return {
        ...state,
        customer: payload.customer,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export default shopReducer;
