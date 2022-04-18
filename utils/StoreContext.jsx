import { createContext, useContext, useReducer } from "react";
import storeReducer, { initialState } from "./storeReducer";
import commerce from "../lib/commerce";

const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const getCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();
      dispatch({
        type: "SET_CART",
        payload: cart,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    dispatch,
    state,
    lineItems: state.lineItems,
    getCart,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

const useShop = () => {
  const context = useContext(StoreContext);

  return context;
};

export default useShop;
