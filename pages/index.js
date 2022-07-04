import commerce from "../lib/commerce";
import { Layout } from "../layout/Layout";
import { useEffect } from "react";

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
  const cart = commerce.cart.retrieve();

  useEffect(() => {
    if (!cart) {
      window.location.reload();
    }
  }, [])

  return (
    <div>
      <Layout products={products} />
    </div >
  )
}
