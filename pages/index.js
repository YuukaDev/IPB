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
    <div >
      <Navigation />
    </div>
  )
}