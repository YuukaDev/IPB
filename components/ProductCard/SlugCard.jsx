import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

export default function SlugCard({ productItem }) {
  return (
    <div>
      <div>
        <motion.div
          key={productItem.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href={`/products/${productItem.permalink}`} passHref>
            <div className="w-permalinkCard cursor-pointer">
              <Image
                className="rounded-md"
                loading="lazy"
                width="350"
                height="200"
                src={productItem.image.url}
                alt={productItem.name}
              />
            </div>
          </Link>
        </motion.div>
        <div className="flex justify-between mt-3">
          <p>{productItem.name}</p>
          <span className="text-lg">${productItem.price.formatted}</span>
        </div>
      </div>
    </div>
  );
}
