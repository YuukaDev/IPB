import { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import Navigation from "../components/Navigation/Navigation";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import useShop from "../utils/StoreContext";

export default function Checkout() {
    const { line_items, cart, products } = useShop();
    const [checkout, setCheckout] = useState([]);

    console.log(cart);

    const captureToken = async () => {
        try {
            const tokenId = await commerce.checkout.generateToken(cart.id, {
                type: "cart"
            });

        } catch (err) {
            return console.log(err.message);
        }
    }

    const captureOrder = async () => {
        commerce.checkout.capture(checkout, line_items).then((response) => console.log(response))
    }

    return (
        <div>
            <Navigation />
            <CheckoutForm />
            <button onClick={captureOrder}>Click</button>
        </div>
    )
}

//<button onClick={captureToken}>Click</button>