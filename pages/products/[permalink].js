import { Box, Button, Heading, Text, Image, Link } from "@chakra-ui/react";
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
        },
        revalidate: 60,
    }
}

export default function ProductPage({ product }) {
    const addToCartHandler = (e) => {
        commerce.cart.add(product, 3).then((response) => console.log(response));
    }
    const removeCartHandler = () => {
        commerce.cart.remove(product).then((response) => console.log(response));
    }
    return (
        <div>
            <Box>
                <Heading>{product.name}</Heading>
                <Image src={product.image.url} />
                <Text>{product.price.formatted_with_code}</Text>
                <Button variant="ghost" bg="crimson" onClick={addToCartHandler}>Add To Cart</Button>
                <Button>
                    <Link href="/">
                        Back To Home
                    </Link>
                </Button>
            </Box>
        </div>
    )
}