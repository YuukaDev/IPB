import NextLink from "next/link";
import { Box, Flex, Link, Icon, Image, Badge } from "@chakra-ui/react";

import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useCartState } from "../../utils/StoreContext";

export default function Navigation() {
  const { line_items } = useCartState();
  return (
    <>
      <Box
        zIndex="1"
        as="nav"
        top="0"
        pos="sticky"
        letterSpacing=".12em"
        fontSize="14px"
        color="#1b133c"
        textTransform="uppercase"
        fontWeight="500"
        backgroundColor="#ffffff"
        display="flex"
        alignItems="center"
        padding="30px 10%"
      >
        <NextLink href="/">
          <Image
            cursor="pointer"
            src={
              "https://cdn.shopify.com/s/files/1/0070/1700/5113/files/AtsukoSiteLogo_9f065aae-ad08-42df-9b9d-da9836dde88a_120x.png?v=1613893342"
            }
          />
        </NextLink>
        <Flex
          width="85%"
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <NextLink href="#" passHref>
            <Link
              _hover={{
                textDecoration: "none",
              }}
            >
              Home
            </Link>
          </NextLink>
          <NextLink href="#" passHref>
            <Link
              _hover={{
                textDecoration: "none",
              }}
            >
              Shop All
            </Link>
          </NextLink>
          <NextLink href="#" passHref>
            <Link
              _hover={{
                textDecoration: "none",
              }}
            >
              Clothing
            </Link>
          </NextLink>
          <NextLink href="#" passHref>
            <Link
              _hover={{
                textDecoration: "none",
              }}
            >
              Accessories
            </Link>
          </NextLink>
          <NextLink href="#" passHref>
            <Link
              _hover={{
                textDecoration: "none",
              }}
              bg="#f7453f"
              p="6px"
              borderRadius="md"
              color="#fff"
            >
              Blog
            </Link>
          </NextLink>
        </Flex>
        <Flex width="0" gap="15px" fontSize="24px" cursor="pointer">
          <Icon as={AiOutlineSearch} />
          <Icon as={AiOutlineUser} />
          <NextLink href="/cart" passHref>
            <Link>
              <Icon as={AiOutlineShoppingCart} />
            </Link>
          </NextLink>
          {JSON.stringify(line_items.length > 0) ? (
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
              {JSON.stringify(line_items.length)}
            </Badge>
          ) : (
            ""
          )}
        </Flex>
      </Box>
    </>
  );
}
