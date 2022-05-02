import TrendingCard from "./Card";

export default function TrendingProducts({ products }) {
  return (
    <div className="text-navigationColor text-center">
      <h1 className="text-lg tracking-heroWide uppercase leading-3">
        Featured Games
      </h1>
      <span class="inline-grid grid-cols-3 gap-8">
        {products.map((product) => (
          <TrendingCard key={product.id} product={product} />
        ))}
      </span>
    </div>
  );
}
