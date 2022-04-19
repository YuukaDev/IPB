import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "../utils/StoreContext";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </CartProvider>
  )
}

export default MyApp
