import { createContext, useReducer, useContext, useEffect } from "react";
import shopReducer, { initialState } from "./ShopReducer";
import commerce from "../lib/commerce";
import { collection, getDocs, query, where } from "firebase/firestore";
import db, { auth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ShopContext = createContext(initialState);
const CartDispatchContext = createContext();

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);
  const setCart = (payload) => dispatch({ type: "SET_CART", payload: payload });
  const setCustomer = (payload) =>
    dispatch({ type: "SET_CUSTOMER", payload: { customer: payload } });
  const [user] = useAuthState(auth);

  useEffect(() => {
    getProducts();
    getCart();
    storeCart();
    fetchUser();
  }, [user]);

  const getProducts = async () => {
    try {
      commerce.products.list().then((res) => {
        dispatch({
          type: "STORE_PRODUCTS",
          payload: {
            products: res.data,
          },
        });
      });
    } catch (err) {
      return console.log(err.message);
    }
  };
  

  const getCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();
      setCart(cart);
    } catch (err) {
      console.log(err.message);
    }
  };

  const storeCart = async () => {
    try {
      commerce.cart.retrieve().then((res) => {
        dispatch({
          type: "STORE_CART",
          payload: {
            cart: res,
          },
        });
      });
    } catch (err) {
      return console.log(err.message);
    }
  };

  const generateToken = async (cartId) => {
    if (!cartId) return;
    try {
      const payload = await commerce.checkout.generateToken(cartId, {
        type: "cart",
      });
      dispatch({ type: "SET_CHECKOUT", payload });
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchUser = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setCustomer(data);
    } catch (err) {
      console.error(err);
    }
  };

  const value = {
    cart: state.cart,
    total_items: state.total_items,
    line_items: state.line_items,
    line_total: state.line_total,
    total_unique_items: state.total_unique_items,
    subtotal: state.subtotal,
    products: state.products,
    categories: state.categories,
    customer: state.customer,
    generateToken,
  };

  return (
    <CartDispatchContext.Provider value={{ setCart, setCustomer }}>
      <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    </CartDispatchContext.Provider>
  );
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }

  return context;
};

export default useShop;
export const useCartDispatch = () => useContext(CartDispatchContext);

