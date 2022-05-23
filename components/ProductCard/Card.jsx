import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

const Card = ({ product }) => {
  return (
    <div>
      <motion.div
        key={product.id}
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

export default Card;
