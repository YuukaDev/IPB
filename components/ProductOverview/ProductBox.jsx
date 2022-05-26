import Link from "next/link";
import { FaSteam } from "react-icons/fa";

export const ProductBox = ({ product, addToCart }) => {
  const delivery = product.has.digital_delivery;
  const inStock = product.inventory.available >= 0;
  return (
    <div className="bg-productBox max-w-sm rounded-xl overflow-hidden shadow-2xl">
      <img className="w-full" src={product.image.url} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-semibold text-lg uppercase tracking-widest text-center mb-2">
          {product.name}
        </div>
        <hr className="mt-2 mb-2" />
        <div className="flex justify-center items-center gap-1 w-64 m-auto text-center bg-gray-200 rounded-full py-1 text-sm font-semibold text-gray-700">
          <FaSteam fontSize="1.2em" />
          {" | "}
          {delivery ? (
            <span>✔️ Digital Delivery</span>
          ) : (
            <span>❌ Digital Delivery</span>
          )}
          {" | "}
          {inStock ? <span>✔️ In Stock</span> : <span>❌ In Stock</span>}
        </div>
        <p className="text-gray-700 text-3xl text-center font-bold mt-7 mb-7">
          {product.price.formatted_with_symbol}
        </p>
        <div className="flex justify-center items-center">
          <button
            onClick={addToCart}
            className="font-bold w-full bg-productButton rounded-3xl tracking-widest uppercase py-3 px-5 text-heroColor shadow-outline"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <Link href="/" passHref>
            <a>{product.categories[1].name}</a>
          </Link>
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <Link href="/" passHref>
            <a>{product.categories[0].name}</a>
          </Link>
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <Link href="/" passHref>
            <a>Adventure</a>
          </Link>
        </span>
      </div>
    </div>
  );
};
