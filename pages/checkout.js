import commerce from "../lib/commerce";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import Navigation from "../components/Navigation/Navigation";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import useShop from "../utils/StoreContext";

export default function Checkout() {
    const { cart } = useShop();
    const [token, setToken] = useState(null);
    const { register } = useForm();

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

    return (
        <div>
            <Navigation />
            <CheckoutForm register={register} />
        </div>
    )
}

//<button onClick={captureToken}>Click</button>