          {line_items.length > 0 ? (
            <Badge
              ml="-20px"
              display="flex"
              w="12px"
              h="12px"
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
              colorScheme="purple"
              cursor="auto"
            >
              {line_items.length}
            </Badge>
          ) : (
            ""
          )}

          export default function CartItems({ id, name, quantity, line_total }) {
  const { setCart } = useCartDispatch();
  const handleUpdateCart = ({ cart }) => setCart(cart);
  const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart);

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

  return (
    <Box>
      <Heading>{name}</Heading>
      <Text as="samp">{quantity}</Text>
      <Text>{line_total.formatted_with_symbol}</Text>
      <Flex gap="20px">
        <Button onClick={incrementQuantity}>+</Button>
        <Button onClick={decrementQuantity}>-</Button>
        <Button onClick={removeItem}>x</Button>
      </Flex>
    </Box>
  );
}
