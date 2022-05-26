import { useState } from "react";
import Image from "next/image";

import Navigation from "../components/Navigation/Navigation";
import Spinner from "../components/Spinner/Spinner";
import { CartItem } from "../components/Cart/CartItem";

import useShop from "../utils/StoreContext";

export default function CartPage() {
    const [loading, setLoading] = useState(false);
    const { line_items, subtotal } = useShop();
    console.log(line_items);
    const isEmpty = line_items.length === 0;
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

    return (
        <div>
            <Navigation />
            <div className="mt-20">
                {line_items.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <p>{subtotal.formatted_with_symbol}</p>
        </div>
    )
}