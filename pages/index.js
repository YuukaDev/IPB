import Hero from "../components/Hero/Hero";
import Navigation from "../components/Navigation/Navigation";
import commerce from "../lib/commerce";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    }
  }
}

export default function Home({ products }) {
  return (
    <div>
      <Navigation />
      <Hero />
    </div>
  )
}