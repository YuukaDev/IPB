import TrendingCard from "./Card";

export default function TrendingProducts({ products }) {
  return (
    <div id="hottest" className="text-navigationColor text-center">
      <h1 className="text-lg tracking-heroWide uppercase leading-3">
        Featured Games
      </h1>
      <span className="inline-grid grid-cols-3 gap-8 mt-14">
        {products.map((product) => (
          <TrendingCard key={product.id} product={product} />
        ))}
      </span>
      <div>
        <button className="mt-20 font-normal tracking-widest bg-black uppercase hover:bg-transparent hover:border-solid border border-black text-white hover:text-black py-3 px-5 transition-all">
          Shop All
        </button>
      </div>
    </div>
  );
}
