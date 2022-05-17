import Link from "next/link";
import { FaSteam } from "react-icons/fa";

const ProductBox = ({ product }) => {
  const delivery = product.has.digital_delivary;
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
          <button className="font-bold w-full bg-productButton rounded-3xl tracking-widest uppercase py-3 px-5 text-heroColor">
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

const AboutBox = ({ product }) => {
  return (
    <div className="w-2/4 mb-96">
      <div className="mt-16">
        <h1 className="uppercase tracking-widest text-lg">Visuals</h1>
        <video>
          <source src={product.assets[2].url} type="video/mp4" />
        </video>
      </div>
      <div className="mt-16">
        <h1 className="uppercase tracking-widest text-lg">About Game</h1>
        <p className="text-gray-700 text-md mt-2 mb-2">
          {product.attributes[0].value}
        </p>
      </div>
    </div>
  );
};

export default function Product({ product }) {
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
        <ProductBox product={product} />
        <AboutBox product={product} />
      </div>
    </>
  );
}

