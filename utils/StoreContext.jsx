import { createContext, useReducer, useContext, useEffect } from "react";
import shopReducer, { initialState } from "./shopReducer";
import commerce from "../lib/commerce";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    commerce.products.list().then((res) => {
      dispatch({
        type: "STORE_PRODUCTS",
        payload: {
          products: res.data,
        },
      });
    });
  };

  const getCategory = async () => {
    commerce.categories.list().then((res) => {
      dispatch({
        type: "STORE_CATEGORY",
        payload: res.data,
      });
    });
  };

  const setCart = (payload) => dispatch({ type: "SET_CART", payload });

  const getCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();

      setCart(cart);
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    total_items: state.tota_items,
    products: state.products,
    categories: state.categories,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }

  return context;
};

export default useShop;
