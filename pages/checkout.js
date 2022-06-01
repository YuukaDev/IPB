import { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import Navigation from "../components/Navigation/Navigation";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import useShop, { useCartDispatch } from "../utils/StoreContext";

export default function Checkout() {
    const [cart, setCart] = useState([]);
    const [token, setToken] = useState([]);

    const getCart = commerce.cart.retrieve().then((cart) => setCart(cart.id));

    const captureToken = async () =>
        commerce.checkout.generateToken(cart, { type: 'cart' })
            .then((checkout) => console.log(checkout.id))

    return (
        <div>
            <Navigation />
            <CheckoutForm />
            <button onClick={captureToken}>Click</button>
        </div>
    )
}