### CartItems

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
        <CloseButton onClick={removeItem} />
      </Flex>
    </Flex>
  );
};


### CartOrderSummary 

import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";

const OrderSummaryItem = ({ label, value, children }) => {
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={"gray.600"}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = ({ subtotal, line_total }) => {
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>
      <Stack spacing="6">
        <OrderSummaryItem
          label="Subtotal"
          value={subtotal.formatted_with_symbol}
        />
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total Price
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {subtotal.formatted_with_symbol}
          </Text>
        </Flex>
        <OrderSummaryItem label="Shipping & taxes calculated at checkout"></OrderSummaryItem>
      </Stack>
      <Button
        colorScheme="red"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
      >
        Checkout
      </Button>
    </Stack>
  );
};
