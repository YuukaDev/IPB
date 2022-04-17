import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import NextLink from "next/link";
import { PriceTag } from "./PriceTag";

export const ProductCard = ({ product }) => {
  return (
    <Stack
      spacing={useBreakpointValue({
        base: "4",
        md: "5",
      })}
    >
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
              borderRadius={useBreakpointValue({
                base: "md",
                md: "xl",
              })}
            />
          </NextLink>
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {product.name}
          </Text>
          <PriceTag price={product.price.formatted_with_code} currency="USD" />
        </Stack>
        <HStack>
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            12 Reviews
          </Text>
        </HStack>
      </Stack>
    </Stack>
  );
};
