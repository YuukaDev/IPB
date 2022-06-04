import { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import Navigation from "../components/Navigation/Navigation";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import useShop from "../utils/StoreContext";
import { useForm } from "react-hook-form";

export default function Checkout() {
    const { cart } = useShop();
    const [token, setToken] = useState(null);
    const {
        register,
        handleSubmit,
    } = useForm();

    useEffect(() => {
        if (cart.id) {
            const generateToken = async () => {
                try {
                    const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

                    setToken(token);
                } catch {
                    if (activeStep !== steps.length) history.push('/');
                }
            };

            generateToken();
        }
    }, [cart]);

    function captureCheckout() {
        commerce.checkout.capture(token.id, {
            customer: {
                firstname: register,
                lastname: register,
                email: register
            },
            payment: {
                gateway: "test_gateway",
                card: {
                    number: '4242424242424242',
                    expiry_month: '02',
                    expiry_year: '24',
                    cvc: '123',
                    postal_zip_code: '94107',
                },
            }
        }).then((order) => {
            console.log(order);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <Navigation />
            <CheckoutForm handleSubmit={captureCheckout} register={register} />
        </div>
    )
}

//<button onClick={captureToken}>Click</button>