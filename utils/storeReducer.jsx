export const initialState = {
  totalItems: 0,
  lineItems: [],
};

const storeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART":
      return { ...state, ...payload };
    default:
      throw new Error(`This is unknown action type ${action.type}`);
  }
};

export default storeReducer;
