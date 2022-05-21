import Navigation from "../components/Navigation/Navigation";
import List from "../components/List/List";

import Link from "next/link";
import Image from "next/image";

import commerce from "../lib/commerce";
import { motion } from "framer-motion";

export async function getStaticProps() {
    const { data: products } = await commerce.products.list();
    const { data: category } = await commerce.categories.list();
    return {
        props: {
            products,
            category
        }
    }
}

const Card = ({ product }) => {
    return (
        <div>
            <motion.div
                key={product._id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Link href={`/products/${product.permalink}`} passHref>
                    <div className="w-96 cursor-pointer">
                        <Image
                            className="rounded-md"
                            loading="lazy"
                            width="500"
                            height="250"
                            src={product.image.url}
                            alt={product.name}
                        />
                    </div>
                </Link>
            </motion.div>
            <div className="flex justify-between mt-3">
                <p>{product.name}</p>
                <span className="text-lg">${product.price.formatted}</span>
            </div>
        </div>
    );
};


export default function Example({ category, products }) {
    let filtered = products.filter(product => product.price.raw >= 30);
    console.log(filtered);
    return (
        <div>
            <Navigation />
            <div className="mt-16 flex justify-center items-center gap-5">
                <List category={category} />
            </div>
            <div className="mt-16 inline-grid gap-8 grid-cols-3">
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>

    )
}
