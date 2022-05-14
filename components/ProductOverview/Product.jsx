import Swiper from "./Swiper";

const ProductBox = ({ product }) => {
  const delivery = product.has.digital_delivary;
  const inStock = product.inventory.available >= 0;
  return (
    <div class="bg-productBox max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={product.image.url} alt={product.name} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl uppercase tracking-widest text-center mb-2">
          {product.name}
        </div>
        <div className="text-center">
          {delivery ? (
            <span>✔️ Digital Delivery</span>
          ) : (
            <span>❌ Digital Delivery</span>
          )}
          {" | "}
          {inStock ? <span>✔️ In Stock</span> : <span>❌ In Stock</span>}
        </div>
        <p class="text-gray-700 text-3xl text-center mt-8 mb-8">
          Price - {product.price.formatted_with_symbol}
        </p>
        <div className="flex justify-center items-center">
          <button className="font-bold bg-productButton rounded-3xl tracking-widest uppercase py-3 px-5 text-heroColor">
            Add To Cart
          </button>
        </div>
      </div>
      <div class="flex justify-center items-center px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product.categories[1].name}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product.categories[0].name}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Adventure
        </span>
      </div>
    </div>
  );
};

export default function Product({ product }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${product.assets[1].url}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        width: "100%",
      }}
    >
      <div className="flex justify-center items-center h-screen">
        <Swiper />
        <ProductBox product={product} />
      </div>
    </div>
  );
}
