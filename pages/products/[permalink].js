import { useEffect, useState } from "react";
import commerce from "../../lib/commerce";
import { useRouter } from "next/router";

import Navigation from "../../components/Navigation/Navigation";
import Product from "../../components/ProductOverview/Product";
import Footer from "../../components/Footer/Footer";
import SlugCard from "../../components/ProductCard/SlugCard";
import Spinner from "../../components/Spinner/Spinner";
import useShop from "../../utils/StoreContext";

export default function ProductPage() {
    const router = useRouter();
    const { permalink } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const addToCart = () => commerce.cart.add(product.id).then((response) => console.log(response));

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
            <Footer />
        </>
    )
}