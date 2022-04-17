import commerce from "../lib/commerce";
import ProductContainer from "../components/Products/ProductContainer";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    }
  }
}


export default function Home({ products }) {
  const getProducts = () => {
    commerce.products.list().then((product) => console.log(product));
  }
  return (
    <div >
      <button onClick={getProducts}>Get Products</button>
      <ProductContainer products={products} />
    </div>
  )
}