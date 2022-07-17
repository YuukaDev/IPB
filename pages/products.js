import { useState, useEffect } from "react";
import commerce from "../lib/commerce";

import Navigation from "../components/Navigation/Navigation";
import List from "../components/List/List";
import Card from "../components/ProductCard/Card";

import GridLoader from "react-spinners/GridLoader";
import useShop from "../utils/StoreContext";

export async function getStaticProps() {
    const { data: category } = await commerce.categories.list();

    return {
        props: {
            category,
        }
    }
}


export default function Example({ category }) {
    const { products } = useShop();
    const [selected, setSelected] = useState(category);
    const [items, setItems] = useState(products);
    const [sorted, setSorted] = useState(items);
    const [searched, setSearched] = useState("");
    const [isLoading, setLoading] = useState(false);
    const recipesInput = "recipesInput";

    const listData = {
        onChange: (e) => setSearched(e.target.value),
        recipesInput,
        sorted,
        setSorted,
        selected,
        setSelected,
        category,
    }

    const handleFilter = async () => {
        try {
            if (selected) {

                setLoading(true);

                const product = await commerce.products.list({
                    category_slug: selected.slug
                });

                setItems(product.data);
                setLoading(false);
            }
        } catch (err) {
            setLoading(false);
            console.log(err.message);
        }
    }

    useEffect(() => {
        handleFilter();
    }, [selected])

    const Loader = () => {
        return (
            <div className="mt-32 flex justify-center items-center">
                <GridLoader margin={30} color="#34de01" loading={isLoading} size={30} />
            </div>
        )
    }

    const renderedCard = (
        <div className="mt-16 inline-grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8">
            {
                items.filter((val) => {
                    if (searched == "") {
                        return val;
                    } else if (val.name.toLowerCase().includes(searched.toLowerCase())) {
                        return val;
                    }
                }).map((product) => (
                    <Card isLoading={isLoading} key={product.id} product={product} />
                ))
            }
        </div>
    )

    return (
        <>
            <Navigation />
            <div className="mt-16 flex justify-center items-center gap-5">
                <List {...listData} />
            </div>
            <div className="text-navigationColor text-center">
                {isLoading ? <Loader /> : renderedCard}
            </div>
        </>
    )
}

