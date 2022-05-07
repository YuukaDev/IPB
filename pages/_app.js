import { CartProvider } from "../utils/StoreContext";

import "../styles/style.css";
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
