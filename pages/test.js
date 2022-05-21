import { useState } from "react";
import Card from "../components/ProductCard/Card";
import commerce from "../lib/commerce";

export async function getStaticProps() {
    const { data: category } = await commerce.categories.list();
    const { data: products } = await commerce.products.list();

    return {
        props: {
            products,
            category,
        }
    }
}

export default function App({ products, category }) {
    const [clicked, setClicked] = useState(false);
    console.log(category);
    return (
        <div>
            <div className="text-navigationColor text-center">
                <div className="flex justify-center items-center gap-8 mt-10">
                    {category.map((categories) => (
                        <div key={categories.id}>
                            <button>{categories.name}</button>
                        </div>
                    ))}
                </div>
                <div className="mt-16 inline-grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8">
                    {products.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
