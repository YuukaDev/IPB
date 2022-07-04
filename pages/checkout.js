import commerce from "../lib/commerce";
import { useState, useEffect } from "react";

import Navigation from "../components/Navigation/Navigation";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import useShop from "../utils/StoreContext";
import Footer from "../components/Footer/Footer";

export default function Checkout() {
    const { cart } = useShop();
    const [token, setToken] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (cart.id) {
            const generateToken = async () => {
                try {
                    const token = await commerce.checkout.generateToken(cart.id, {
                        type: "cart",
                    });

                    setToken(token);
                    setLoading(false);
                } catch (err) {
                    setLoading(true);
                    console.log(err);
                }
            };

            generateToken();
        }
    }, [cart]);

    return (
        <div>
            <Navigation />
            <CheckoutForm setLoading={setLoading} loading={loading} token={token} />
            <Footer />
        </div>
    )
}

//<button onClick={captureToken}>Click</button>