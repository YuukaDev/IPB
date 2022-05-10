import { Layout } from "../layout/Layout";

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
      <Layout products={products} />
    </div >
  )
}
