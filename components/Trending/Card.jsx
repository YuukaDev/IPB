import Link from "next/link";
import { motion } from "framer-motion";

export default function TrendingCard({ product }) {
  return (
    <div>
      <motion.div
        key={product._id}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href={`/products/${product.permalink}`} passHref>
          <img
            className="max-w-sm rounded-lg cursor-pointer"
            src={product.image.url}
            alt={product.name}
          />
        </Link>
      </motion.div>
      <div className="flex justify-between mt-3">
        <p>{product.name}</p>
        <span className="text-lg">${product.price.formatted}</span>
      </div>
    </div>
  );
}
