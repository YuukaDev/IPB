import { Box } from "@chakra-ui/react";
import { ProductGrid } from "./ProductGrid";
import { ProductCard } from "./ProductCard";

export default function ProductsCard({ products }) {
  return (
    <Box w="55%" mx="auto" mt="-50px">
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  );
}
