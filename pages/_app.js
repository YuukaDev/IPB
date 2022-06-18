import { ShopProvider } from "../utils/StoreContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import "../styles/style.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function MyApp({ Component, pageProps }) {
  const payPalKey = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  return (
    <PayPalScriptProvider options={{ "client-id": payPalKey }}>
      <ShopProvider>
        <Component {...pageProps} />
      </ShopProvider>
    </PayPalScriptProvider>
  )
}

export default MyApp

