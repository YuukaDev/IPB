import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Card = ({ product }) => {
  return (
    <div>
      <motion.div
        key={product._id}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href={`/products/${product.permalink}`} passHref>
          <div className="max-w-sm cursor-pointer">
            <Image
              style={{
                borderRadius: "14px",
              }}
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

export default function TrendingProducts({ products }) {
  return (
    <div id="hottest" className="mt-14">
      <div className="text-navigationColor text-center">
        <h1 className="text-lg mb-10 tracking-heroWide uppercase leading-3">
          Featured Games
        </h1>
        <div className="inline-grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <div>
          <button className="mt-10 font-normal tracking-widest bg-black uppercase hover:bg-transparent hover:border-solid border border-black text-white hover:text-black py-3 px-5 transition-all">
            All Games
          </button>
        </div>
      </div>
    </div>
  );
}
