import { Box, Heading, Text, Image } from "@chakra-ui/react";

export default function CartItems({ lineItems }) {
  return (
    <Box>
      {lineItems.map((product) => (
        <div>
          <Heading>{product.name}</Heading>
          <Image src={product.image.url} />
          <Text>{product.price.formmated_with_code}</Text>
        </div>
      ))}
    </Box>
  );
}
