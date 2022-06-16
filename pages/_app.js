import { ShopProvider } from "../utils/StoreContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { UserProvider } from "@auth0/nextjs-auth0";

import "../styles/style.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import '@algolia/autocomplete-theme-classic';

function MyApp({ Component, pageProps }) {
  const payPalKey = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  return (
    <PayPalScriptProvider options={{ "client-id": payPalKey }}>
      <UserProvider>
        <ShopProvider>
          <Component {...pageProps} />
        </ShopProvider>
      </UserProvider>
    </PayPalScriptProvider>
  )
}

export default MyApp

