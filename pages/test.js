import { useState, useEffect } from "react";
import PaypalCheckoutButton from "../components/Checkout/PaypalCheckoutButton";
import useShop from "../utils/StoreContext";
import commerce from "../lib/commerce";

export default function Test() {
    const { cart } = useShop();
    const [token, setToken] = useState(null);
    const product = {
        price: 30
    }

    return (
        <div className="flex justify-center items-center mt-20">
            <PaypalCheckoutButton product={product} />
        </div>
    );
}