import Navigation from "../../components/Navigation/Navigation";
import Product from "../../components/ProductOverview/Product";
import commerce from "../../lib/commerce";

export async function getStaticPaths() {
    const { data: products } = await commerce.products.list();

    return {
        paths: products.map((product) => ({
            params: {
                permalink: product.permalink,
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
    //const addToCart = () => commerce.cart.add(product.id).then((response) => console.log(response));
    console.log(product);
    return (
        <>
            <Navigation />
            <Product product={product} />
        </>
    )
}