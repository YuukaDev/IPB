import { useState } from "react";
import Image from "next/image";

import Navigation from "../components/Navigation/Navigation";
import Spinner from "../components/Spinner/Spinner";
import { CartItem } from "../components/Cart/CartItem";

import useShop from "../utils/StoreContext";

export default function CartPage() {
    const [loading, setLoading] = useState(false);
    const { line_items, subtotal } = useShop();
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
            <table className="flex justify-center items-center flex-col mt-20 gap-10">
                {line_items.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </table>
            <div className="flex justify-center items-center w-buttonSummary mt-10 flex-col float-right">
                <div className="flex gap-2">
                    <p className="text-center uppercase tracking-widest text-sm mb-3">Total -</p>
                    <span className="text-center uppercase tracking-widest text-sm">{subtotal.formatted_with_symbol}</span>
                </div>
                <button className="font-normal tracking-widest bg-black uppercase hover:bg-transparent hover:border-solid border border-black text-white hover:text-black py-3 px-5 transition-all">
                    Checkout
                </button>
            </div>
        </div>
    )
}