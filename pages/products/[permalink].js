import { useEffect, useState } from "react";
import commerce from "../../lib/commerce";
import { useRouter } from "next/router";

import Navigation from "../../components/Navigation/Navigation";
import Product from "../../components/ProductOverview/Product";
import Footer from "../../components/Footer/Footer";
import SlugCard from "../../components/ProductCard/SlugCard";
import Spinner from "../../components/Spinner/Spinner";

/*
export async function getStaticPaths() {
    const { data: products } = await commerce.products.list();

    return {
        paths: products.map((product) => ({
            params: {
                permalink: product.permalink,
                relatedProduct: product.related_products
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { permalink } = params;
    const product = await commerce.products.retrieve(permalink, {
        type: 'permalink'
    });

    return {
        props: {
            product,
        }
    }
}
*/

export default function ProductPage() {
    //const addToCart = () => commerce.cart.add(product.id).then((response) => console.log(response));
    const router = useRouter();
    const { permalink } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!permalink) {
            return;
        }

        const fetchProductByPermalink = async (permalink) => {
            try {
                const product = await commerce.products.retrieve(permalink, { type: 'permalink ' });
                setProduct(product);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchProductByPermalink(permalink);
    }, [permalink]);



    if (loading) {
        return <Spinner isLoading={loading} />
    }

    return (
        <>
            <Navigation />
            <Product product={product} />
            <Footer />
        </>
    )
}