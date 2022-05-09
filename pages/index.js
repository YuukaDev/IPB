import Hero from "../components/Hero/Hero";
import Highlight from "../components/Highlight/Highlight";
import Navigation from "../components/Navigation/Navigation";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import About from "../components/About/About";

import commerce from "../lib/commerce";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list({
    limit: 9,
  });
  const { data: categories } = await commerce.products.list({
    category_slug: ["rpg"]
  })
  return {
    props: {
      products,
      categories
    }
  }
}

export default function Home({ products, categories }) {
  return (
    <div>
      <Navigation />
      <Hero />
      <FeaturedSection products={products} />
      <Highlight />
      <About />
    </div >
  )
}
