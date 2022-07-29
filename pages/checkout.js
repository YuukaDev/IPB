import commerce from "../lib/commerce";
import { useState, useEffect } from "react";

import Navigation from "../components/Navigation/Navigation";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import useShop from "../utils/StoreContext";
import Footer from "../components/Footer/Footer";
import Empty from "../components/Empty/Empty";

export default function Checkout() {
    const { cart, line_items } = useShop();
    const [token, setToken] = useState([]);
    const [loading, setLoading] = useState(true);
    const isEmpty = line_items.length === 0;

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

    if (isEmpty) {
        return <Empty />;
    }

    return (
        <div>
            <Navigation />
            <div className="h-highlight mb-32">
                <CheckoutForm setLoading={setLoading} loading={loading} token={token} />
            </div>
            <Footer />
        </div>
    )
}