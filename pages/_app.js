import { ChakraProvider } from "@chakra-ui/react";
import { StoreProvider } from "../utils/StoreContext";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </StoreProvider>
  )
}

export default MyApp
