import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "../utils/StoreContext";
import customTheme from "../theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CartProvider>
  )
}

export default MyApp
