import NextLink from "next/link";
import NextImage from "next/image";
import {
  Box,
  Flex,
  Link,
  Icon,
  Image,
  Badge,
  useColorMode,
  Heading,
} from "@chakra-ui/react";

import ipbLogo from "../../public/ipb-logo.jpg";

import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useCartState } from "../../utils/StoreContext";
import DarkMode from "../ThemeChanger/DarkMode";

export default function Navigation() {
  const { line_items } = useCartState();
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        zIndex="1"
        as="nav"
        top="0"
        pos="sticky"
        letterSpacing=".12em"
        fontSize="14px"
        color={colorMode === "light" ? "#1b133c" : "white"}
        textTransform="uppercase"
        fontWeight="500"
        display="flex"
        alignItems="center"
        padding="30px 5%"
      >
        <Flex w="100%" m="0 auto" alignItems="center">
          <NextLink href="/">
            <Heading as="h3" fontSize="1.5em">
              Igrice Prodaja Balkan
            </Heading>
          </NextLink>
          <Flex
            width="65%"
            justifyContent="center"
            alignItems="center"
            gap="20px"
          >
            <NextLink href="#">Home</NextLink>
            <NextLink href="#">Shop</NextLink>
            <NextLink href="#">About</NextLink>
            <NextLink href="#">
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
            <NextLink href="/cart" passHref>
              <Icon as={AiOutlineShoppingCart} />
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
            <DarkMode />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
