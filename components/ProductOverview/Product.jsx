import { AboutBox } from "./AboutBox";
import { ProductBox } from "./ProductBox";

export default function Product({ product, addToCart }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${product.assets[1].url}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "55vh",
          width: "100%",
        }}
      ></div>
      <div className="-mt-80 flex flex-col justify-center items-center">
        <ProductBox addToCart={addToCart} product={product} />
        <AboutBox product={product} />
      </div>
    </>
  );
}

