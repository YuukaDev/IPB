import { CartProvider } from "../utils/StoreContext";

import "../styles/style.css";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
