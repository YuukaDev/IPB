import { AspectRatio, Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import NextLink from "next/link";
import { PriceTag } from "./PriceTag";

export const ProductCard = ({ product }) => {
  return (
    <Stack>
      <Box display="flex" flexDir="column">
        <NextLink href={`/products/${product.permalink}`} passHref>
          <Image
            w="350px"
            h="190px"
            borderRadius="16px"
            cursor="pointer"
            _hover={{
              transform: "scale(1.05)",
              transition: "0.3s all ease",
            }}
            transition="0.3s all ease"
            src={product.image.url}
            alt={product.name}
          />
        </NextLink>
      </Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        fontSize="14px"
        fontWeight="500"
      >
        <Text>{product.name}</Text>
        <PriceTag price={product.price.formatted} currency="USD" />
      </Flex>
    </Stack>
  );
};
