import commerce from "../lib/commerce";
import { Layout } from "../layout/Layout";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list({
    limit: 9,
  });
  return {
    props: {
      products,
    }
  }
}

export default function Home({ products }) {
  return (
    <div>
      <Layout products={products} />
    </div >
  )
}
