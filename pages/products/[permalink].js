import { useEffect, useState } from "react";
import { useCartDispatch } from "../../utils/StoreContext";
import { useRouter } from "next/router";

import commerce from "../../lib/commerce";

import Navigation from "../../components/Navigation/Navigation";
import Product from "../../components/ProductOverview/Product";
import Footer from "../../components/Footer/Footer";
import SlugCard from "../../components/ProductCard/SlugCard";
import Spinner from "../../components/Spinner/Spinner";

export default function ProductPage() {
    const { setCart } = useCartDispatch();
    const router = useRouter();

    const { permalink } = router.query;

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const addToCart = () => commerce.cart.add(product.id).then(({ cart }) => setCart(cart));

    const fetchProductByPermalink = async (permalink) => {
        try {
            const product = await commerce.products.retrieve(permalink, { type: 'permalink ' });
            setProduct(product);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

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
                    <SlugCard productItem={productItem} />
                ))}
            </div>
            <Footer />
        </>
    )
}