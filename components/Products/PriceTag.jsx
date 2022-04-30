import { HStack, Text } from "@chakra-ui/react";

export const PriceTag = ({ price, rootProps }) => {
  return (
    <HStack spacing="1" {...rootProps}>
      <Price>{price}</Price>
    </HStack>
  );
};

const Price = ({ children, textProps }) => {
  return (
    <Text
      fontWeight="medium"
      fontSize="17px"
      textDecoration="none"
      {...textProps}
    >
      {children}€
    </Text>
  );
};
