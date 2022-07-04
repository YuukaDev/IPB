import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";
import { CartItem } from "../components/Cart/CartItem";

import useShop from "../utils/StoreContext";

export default function CartPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { line_items, subtotal, customer } = useShop();
    const isEmpty = line_items.length === 0;

    useEffect(() => {
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
                <div className="flex flex-col gap-7 justify-center items-center h-loginH">
                    <h1 className="uppercase text-navigationColor font-semibold tracking-widest">YOUR CART IS EMPTY</h1>
                    <p className="text-sm font-thin tracking-widest">Go Shop Our Latest Products!</p>
                    <Link href="/products">
                        <button className="font-normal tracking-widest bg-black uppercase hover:bg-transparent hover:border-solid border border-black text-white hover:text-black py-3 px-5 transition-all">
                            Shop Now
                        </button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <>
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
                <button onClick={() => router.push("/checkout")} className="font-normal tracking-widest bg-black uppercase hover:bg-transparent hover:border-solid border border-black text-white hover:text-black py-3 px-5 transition-all">
                    Checkout
                </button>
            </div>
            <div className="mt-80">
                <Footer />
            </div>
        </>
    )
}