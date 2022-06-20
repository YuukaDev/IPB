import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import commerce from "../lib/commerce";

import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";
import { CartItem } from "../components/Cart/CartItem";

import useShop from "../utils/StoreContext";
import CheckoutForm from "../components/Checkout/CheckoutForm";

export default function CartPage() {
    const router = useRouter();
    const { line_items, subtotal, customer, cart } = useShop();
    const [token, setToken] = useState([]);
    const [loading, setLoading] = useState(true);
    const [paymentData, setPaymentData] = useState([]);

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
            getPaypalId();
        }
        if (!customer.name) {
            router.push("/login");
        }
    }, [])

    if (!line_items) {
        setLoading(true);
        return (
            <Spinner isLoading={loading} />
        )
    }

    if (isEmpty) {
        return (
            <div>
                <Navigation />
                Your cart is empty go shop!
            </div>
        );
    }

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

    return (
        <>
            <Navigation />
            <div className="flex justify-center items-center gap-20">
                <table className="flex justify-center items-center flex-col mt-20 gap-10">
                    {line_items.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </table>
                <CheckoutForm paymentID={paymentData?.payment_id} setLoading={setLoading} loading={loading} token={token} />
            </div>
            <div className="mt-20">
                <Footer />
            </div>
        </>
    )
}


