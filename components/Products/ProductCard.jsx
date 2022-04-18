import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import NextLink from "next/link";
import { PriceTag } from "./PriceTag";

export const ProductCard = ({ product }) => {
  return (
    <Stack>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <NextLink href={`/products/${product.permalink}`} passHref>
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
          </NextLink>
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text fontWeight="medium" color="gray.700">
            {product.name}
          </Text>
          <PriceTag price={product.price.formatted_with_code} currency="USD" />
        </Stack>
        <HStack>
          <Text fontSize="sm" color="gray.600">
            12 Reviews
          </Text>
        </HStack>
      </Stack>
    </Stack>
  );
};
