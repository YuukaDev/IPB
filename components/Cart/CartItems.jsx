import commerce from "../../lib/commerce";
import { useCartDispatch } from "../../utils/StoreContext";

import {
  CloseButton,
  Flex,
  Button,
  Stack,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import * as React from "react";

export const CartItems = ({ id, price, name, quantity, image }) => {
  const { setCart } = useCartDispatch();
  const handleUpdateCart = ({ cart }) => setCart(cart);

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
      : removeItem();
  };

  const incrementQuantity = () => {
    commerce.cart.update(id, { quantity: quantity + 1 }).then(handleUpdateCart);
  };
  const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart);
  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <Stack direction="row" spacing="5" width="full">
        <Box pt="4">
          <Stack spacing="6px">
            <Text fontWeight="medium">{name}</Text>
          </Stack>
        </Box>
      </Stack>
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <Flex
          height="35px"
          width="110px"
          color="rgb(106, 106, 106)"
          border="1px solid rgb(221, 220, 226)"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button onClick={incrementQuantity} variant="ghost">
            +
          </Button>
          <div>{quantity}</div>
          <Button onClick={decrementQuantity} variant="ghost">
            -
          </Button>
        </Flex>
        <Text
          as="span"
          fontWeight="medium"
          color="gray.700"
          textDecoration="none"
        >
          {price.formatted_with_symbol}
        </Text>
        <CloseButton onClick={() => removeItem} />
      </Flex>
    </Flex>
  );
};
