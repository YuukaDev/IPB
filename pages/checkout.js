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

    return (
        <div>
            <Navigation />
            <CheckoutForm register={register} />
        </div>
    )
}

//<button onClick={captureToken}>Click</button>