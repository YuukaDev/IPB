import commerce from "../lib/commerce";
import ProductContainer from "../components/Products/ProductContainer";
import Navigation from "../components/Navigation/Navigation";

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
      <div className="hero-image" />
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(247, 250, 252)" fill-opacity="1" d="M0,192L1440,160L1440,320L0,320Z"></path></svg>
      <ProductContainer products={products} />
    </div>
  )
}