import { useEffect, useState } from "react";
import { useCartDispatch } from "../../utils/StoreContext";
import { useRouter } from "next/router";

import commerce from "../../lib/commerce";

import Navigation from "../../components/Navigation/Navigation";
import Product from "../../components/ProductOverview/Product";
import Footer from "../../components/Footer/Footer";
import SlugCard from "../../components/ProductCard/SlugCard";
import Spinner from "../../components/Spinner/Spinner";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";

export default function ProductPage() {
    const router = useRouter();
    const { permalink } = router.query;
    const { setCart } = useCartDispatch();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user] = useAuthState(auth);

    const fetchProductByPermalink = async (permalink) => {
        try {
            setLoading(true);
            const product = await commerce.products.retrieve(permalink, { type: 'permalink ' });
            setProduct(product);
            setLoading(false);
        } catch (error) {
            setLoading(true);
        }
    };

    const addToCart = () => {
        if (!user) {
            router.push("/login");
        } else {
            commerce.cart.add(product.id).then(({ cart }) => setCart(cart))
        }
    }

    useEffect(() => {
        if (!permalink) {
            return;
        }
        fetchProductByPermalink(permalink);
    }, [permalink]);

    if (loading) {
        return (
            <>
                <Navigation />
                <Spinner isLoading={loading} />
            </>
        )
    }

    return (
        <>
            <Navigation />
            <Product addToCart={addToCart} product={product} />
            <div className="mt-5 mb-14 flex gap-5 justify-center items-center text-center">
                {product.related_products.map((productItem) => (
                    <SlugCard key={productItem.id} productItem={productItem} />
                ))}
            </div>
            <Footer />
        </>
    )
}