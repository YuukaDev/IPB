import commerce from "../lib/commerce";
import { useState, useEffect } from "react";

import Navigation from "../components/Navigation/Navigation";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import useShop from "../utils/StoreContext";

export default function Checkout() {
    const { cart } = useShop();
    const [token, setToken] = useState([]);
    const [loading, setLoading] = useState(true);
    const [paymentData, setPaymentData] = useState([]);

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
            getPaypalId();
        }
    }, [cart]);

    const getPaypalId = () => {
        commerce.checkout
            .capture(token.id, {
                customer: {
                    firstname: "John",
                    lastname: "Doe",
                    email: "buyer@example.com",
                },
                shipping: {
                    name: "John Doe",
                    country: "US",
                    street: "123 Fake St",
                    town_city: "San Francisco",
                    county_state: "CA",
                    postal_zip_code: "94103",
                },
                fulfillment: {
                    shipping_method: "ship_7RyWOwmK5nEa2V",
                },
                billing: {
                    name: "John Doe",
                    country: "US",
                    street: "123 Fake St",
                    town_city: "San Francisco",
                    county_state: "CA",
                    postal_zip_code: 94103,
                },
                payment: {
                    gateway: "paypal",
                    paypal: {
                        action: "authorize",
                    },
                },
            })
            .then((resp) => {
                setPaymentData(resp);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(true);
            });
    }

    console.log(paymentData);

    return (
        <div>
            <Navigation />
            <CheckoutForm paymentID={paymentData?.payment_id} setLoading={setLoading} loading={loading} token={token} />
        </div>
    )
}

//<button onClick={captureToken}>Click</button>