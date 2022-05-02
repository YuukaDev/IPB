import Link from "next/link";
import { motion } from "framer-motion";

export default function TrendingCard({ product }) {
  return (
    <div className="mt-16 mb-40">
      <motion.div
        key={product._id}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href={`/products/${product.permalink}`} passHref>
          <img
            className="max-w-sm rounded-lg"
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
