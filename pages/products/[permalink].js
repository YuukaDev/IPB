import Navigation from "../../components/Navigation/Navigation";
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
    const addToCart = () => commerce.cart.add(product.id).then((response) => console.log(response));
    return (
        <>
            <Navigation />
            <Box maxW="lg"
                mx="auto"
                px={{
                    base: "4",
                    md: "8",
                    lg: "12",
                }}
                py={{
                    base: "6",
                    md: "8",
                    lg: "12",
                }}>
                <Stack>
                    <div class="header-product parallax" style={{
                        backgroundImage: `url(${product.image.url})`,
                        backgroundPosition: "50% calc(50% + 0px)",
                    }}></div>
                    <Box position="relative">
                        <AspectRatio ratio={4 / 3}>
                            <Image
                                cursor="pointer"
                                _hover={{
                                    transform: "scale(1.05)",
                                    transition: "1s all ease",
                                }}
                                transition="1s all ease"
                                src={product.image.url}
                                alt={product.name}
                                draggable="false"
                                fallback={<Skeleton />}
                            />
                        </AspectRatio>
                    </Box>
                    <Stack display="flex" justifyContent="center" alignItems="center">
                        <Text fontWeight="medium" color="gray.700">
                            {product.name}
                        </Text>
                        <PriceTag price={product.price.formatted_with_code} currency="USD" />
                        <Text fontSize="sm" color="gray.600">
                            12 Reviews
                        </Text>
                    </Stack>
                    <Flex gap="15%" justifyContent="center" alignItems="center">
                        <Box
                            mt="20px"
                            p="10px 15px"
                            _hover={{
                                transition: '0.3s all ease',
                                background: 'transparent',
                                border: '1px solid rgb(27, 19, 60)',
                                fontWeight: "700",
                                color: "rgb(27, 19, 60)",
                                textDecoration: "none"
                            }}
                            transition="0.3s all ease"
                            textAlign="center"
                            bg="rgb(27, 19, 60)"
                            border="1px solid rgb(27, 19, 60)"
                            color="rgb(255, 255, 255)"
                            lineHeight="23.1px"
                            letterSpacing=".2em"
                            fontWeight="500"
                            cursor="pointer"
                        >
                            <Link
                                href="/cart"
                                textTransform="uppercase"
                                _hover={{
                                    textDecoration: "none"
                                }}
                                letterSpacing="2.4px"
                                fontSize="12px"
                            >
                                Cart
                            </Link>
                        </Box>
                        <Box
                            onClick={addToCart}
                            mt="20px"
                            p="10px 15px"
                            _hover={{
                                transition: '0.3s all ease',
                                background: 'transparent',
                                border: '1px solid rgb(27, 19, 60)',
                                fontWeight: "700",
                                color: "rgb(27, 19, 60)",
                                textDecoration: "none"
                            }}
                            transition="0.3s all ease"
                            textAlign="center"
                            bg="rgb(27, 19, 60)"
                            border="1px solid rgb(27, 19, 60)"
                            color="rgb(255, 255, 255)"
                            lineHeight="23.1px"
                            letterSpacing=".2em"
                            fontWeight="500"
                            cursor="pointer"
                        >
                            <Link
                                textTransform="uppercase"
                                _hover={{
                                    textDecoration: "none"
                                }}
                                letterSpacing="2.4px"
                                fontSize="12px"
                            >
                                Add To Cart
                            </Link>
                        </Box>
                    </Flex>
                </Stack>
            </Box>
        </>
    )
}