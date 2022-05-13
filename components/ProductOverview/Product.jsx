import Link from "next/link";

const ProductBox = ({ product }) => {
  const delivery = product.has.digital_delivary;
  const inStock = product.inventory.available >= 0;
  return (
    <div>
      <div className="flex text-navigationColor mt-96 gap-5">
        <div className="justify-center items-center flex">
          <img
            className="w-imageBox h-imageBox rounded-3xl"
            src={product.image.url}
          />
        </div>
        <div className="flex rounded-3xl bg-gray-300 justify-center flex-col items-center h-productBox w-productBox">
          <h1 className="mt-5 text-3xl uppercase tracking-wide">
            {product.name}
          </h1>
          <div className="mt-5 gap-2 justify-center items-center">
            {delivery ? (
              <span>✔️ Digital Delivery</span>
            ) : (
              <span>❌ Digital Delivery</span>
            )}
            {" | "}
            {inStock ? <span>✔️ In Stock</span> : <span>❌ In Stock</span>}
          </div>
          <hr className="mt-5" />
          <p className="text-2xl tracking-wide mt-5">
            Price - {product.price.formatted_with_symbol}
          </p>
          <button className="font-bold mt-5 bg-productButton rounded-3xl tracking-widest bg-transparent uppercase py-3 px-5 text-heroColor">
            Add To Cart
          </button>
          <div className="flex gap-3 mt-5 mb-5">
            <a
              style={{
                border: "1px solid black",
                padding: "5px",
              }}
              href="/"
            >
              {product.categories[1].name}
            </a>
            <a
              style={{
                border: "1px solid black",
                padding: "5px",
              }}
              href="/"
            >
              {product.categories[0].name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Product({ product }) {
  return (
    <div className="flex justify-center flex-col items-center">
      <div
        className="flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${product.assets[1].url}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          width: "100%",
        }}
      >
        <ProductBox product={product} />
      </div>
    </div>
  );
}
