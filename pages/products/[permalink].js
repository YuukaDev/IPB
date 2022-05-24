import commerce from "../../lib/commerce";

import Navigation from "../../components/Navigation/Navigation";
import Product from "../../components/ProductOverview/Product";
import Footer from "../../components/Footer/Footer";
import SlugCard from "../../components/ProductCard/SlugCard";

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

export default function ProductPage({ product }) {
    const addToCart = () => commerce.cart.add(product.id).then((response) => console.log(response));
    console.log(product);
    return (
        <>
            <Navigation />
            <Product addToCart={addToCart} product={product} relatedProduct={product.related_products} />
            <div className="mt-5 mb-14 flex gap-5 justify-center items-center text-center">
                {product.related_products.map((productItem) => (
                    <SlugCard productItem={productItem} />
                ))}
            </div>
            <Footer />
        </>
    )
}