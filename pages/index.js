import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Navigation from "../components/Navigation/Navigation";
import TrendingProducts from "../components/Trending/TrendingProducts";
import commerce from "../lib/commerce";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list({
    limit: 9
  });
  return {
    props: {
      products,
    }
  }
}

export default function Home({ products }) {
  console.log(products);
  return (
    <div>
      <Navigation />
      <Hero />
      <TrendingProducts products={products} />
      <Features />
    </div >
  )
}