import { Box, Stack, Heading, Flex, Link, HStack } from "@chakra-ui/react";
import { useCartState } from "../utils/StoreContext";
import { CartItems } from "../components/Cart/CartItems";
import { CartOrderSummary } from "../components/Cart/CartOrderSummary";
import Navigation from "../components/Navigation/Navigation";

export default function CartPage() {
    const { line_items, subtotal, line_total } = useCartState();
    const isEmpty = line_items.length === 0;

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
            <Box
                maxW={{
                    base: "3xl",
                    lg: "7xl",
                }}
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
                }}
            >
                <Stack
                    direction={{
                        base: "column",
                        lg: "row",
                    }}
                    align={{
                        lg: "flex-start",
                    }}
                    spacing={{
                        base: "8",
                        md: "16",
                    }}
                >
                    <Stack
                        spacing={{
                            base: "8",
                            md: "10",
                        }}
                        flex="2"
                    >
                        <Heading fontSize="2xl" fontWeight="extrabold">
                            Shopping Cart (
                            {line_items.length > 1
                                ? `${line_items.length} items`
                                : `${line_items.length} item`}
                            )
                        </Heading>
                        <Stack spacing="6">
                            {line_items.map((item) => (
                                <CartItems key={item.id} {...item} />
                            ))}
                        </Stack>
                    </Stack>
                    <Flex direction="column" align="center" flex="1">
                        <CartOrderSummary subtotal={subtotal} line_total={subtotal} />
                        <HStack mt="6" fontWeight="semibold">
                            <p>or</p>
                            <Link color="blue.500">Continue shopping</Link>
                        </HStack>
                    </Flex>
                </Stack>
            </Box>
        </div>
    )
}