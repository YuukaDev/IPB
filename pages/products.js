import { useState, useEffect, useMemo } from "react";

import Navigation from "../components/Navigation/Navigation";
import List from "../components/List/List";
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

export default function Example({ category, products }) {
    const [selected, setSelected] = useState(category);
    const [items, setItems] = useState(products);

    const handleFilter = async () => {
        const product = await commerce.products.list({
            category_slug: selected.slug
        })
        setItems(product.data);
    }

    useEffect(() => {
        handleFilter();
    }, [items])

    return (
        <>
            <Navigation />
            <div className="mt-16 flex justify-center items-center gap-5">
                <List selected={selected} setSelected={setSelected} category={category} />
            </div>
            <div className="text-navigationColor text-center">
                <div className="mt-16 inline-grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8">
                    {items.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>

    )
}
