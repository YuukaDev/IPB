import NextLink from "next/link";
import NextImage from "next/image";
import {
  Box,
  Flex,
  Link,
  Icon,
  Badge,
  useColorMode,
  Button,
} from "@chakra-ui/react";

import ipbLogo from "../../public/logo_1.png";

import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useCartState } from "../../utils/StoreContext";
import DarkMode from "../ThemeChanger/DarkMode";

export default function Navigation() {
  const { line_items } = useCartState();
  //const { colorMode } = useColorMode();
  return (
    <Box
      zIndex="1"
      as="nav"
      top="0"
      pos="sticky"
      letterSpacing=".16em"
      fontSize="14px"
      color="#fff"
      textTransform="uppercase"
      fontWeight="500"
      backgroundColor="rgb(16, 16, 16)"
      display="flex"
      alignItems="center"
      padding="15px 10%"
    >
      <NextLink href="/">
        <NextImage width="80" height="55" src={ipbLogo} />
      </NextLink>
      <Flex width="90%" justifyContent="center" alignItems="center" gap="30px">
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
            opacity="1"
            _hover={{
              opacity: "0.5",
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
            Hottest
          </Link>
        </NextLink>
        <NextLink href="#" passHref>
          <Link
            _hover={{
              textDecoration: "none",
            }}
          >
            About
          </Link>
        </NextLink>
        <NextLink href="#" passHref>
          <Link
            _hover={{
              textDecoration: "none",
            }}
          >
            Support
          </Link>
        </NextLink>
      </Flex>
      <Flex width="0" gap="15px" fontSize="24px" cursor="pointer">
        <Icon as={AiOutlineSearch} />
        <Icon as={AiOutlineShoppingCart} />
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
    </Box>
  );
}

/*
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
          {JSON.stringify(products.length > 0) ? (
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
              {JSON.stringify(products.length)}
            </Badge>
          ) : (
            ""
          )}
        </Flex>
      </Box>
*/

/*
 <Box
      boxShadow="lg"
      as="nav"
      display="flex"
      alignItems="center"
      bg="rgb(16, 16, 16)"
      zIndex="1"
      top="0"
      pos="sticky"
      fontSize="14px"
      color="#000"
      textTransform="uppercase"
      fontWeight="500"
      padding="15px 7%"
    >
      <NextLink href="/">
        <NextImage width="80" height="55" src={ipbLogo} />
      </NextLink>
      <Flex
        color="#fff"
        width="90%"
        justifyContent="center"
        alignItems="center"
        gap="20px"
      >
        <NextLink href="/">
          <Link
            fontSize="1.1em"
            transition="0.5s all ease"
            textDecoration="none"
            _hover={{
              transition: "0.5s all ease",
              transform: "scale(1.1)",
              textDecoration: "none",
            }}
          >
            <Button
              fontSize={{
                sm: "1em",
                md: "0.5em",
                lg: "1em",
                xl: "1.2em",
              }}
              size="md"
              variant="ghost"
            >
              Home
            </Button>
          </Link>
        </NextLink>
        <NextLink href="/">
          <Link
            fontSize="1.1em"
            transition="0.5s all ease"
            textDecoration="none"
            _hover={{
              transition: "0.5s all ease",
              transform: "scale(1.1)",
              textDecoration: "none",
            }}
          >
            <Button
              fontSize={{
                sm: "1em",
                md: "0.5em",
                lg: "1em",
                xl: "1.2em",
              }}
              size="md"
              variant="ghost"
            >
              Shop
            </Button>
          </Link>
        </NextLink>
        <NextLink href="/">
          <Link
            fontSize="1.1em"
            transition="0.5s all ease"
            textDecoration="none"
            _hover={{
              transition: "0.5s all ease",
              transform: "scale(1.1)",
              textDecoration: "none",
            }}
          >
            <Button
              fontSize={{
                sm: "1em",
                md: "0.5em",
                lg: "1em",
                xl: "1.2em",
              }}
              size="md"
              variant="ghost"
            >
              About
            </Button>
          </Link>
        </NextLink>
        <NextLink href="/">
          <Link
            fontSize="1.1em"
            transition="0.5s all ease"
            textDecoration="none"
            _hover={{
              transition: "0.5s all ease",
              transform: "scale(1.1)",
              textDecoration: "none",
            }}
          >
            <Button
              fontSize={{
                sm: "1em",
                md: "0.5em",
                lg: "1em",
                xl: "1.2em",
              }}
              size="md"
              variant="ghost"
            >
              Support
            </Button>
          </Link>
        </NextLink>
      </Flex>
      <Flex color="#fff" width="0" gap="15px" fontSize="24px" cursor="pointer">
        <Icon as={AiOutlineSearch} />
        <NextLink href="/cart" passHref>
          <Icon as={AiOutlineShoppingCart} />
        </NextLink>
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
        <DarkMode />
      </Flex>
    </Box>
*/
