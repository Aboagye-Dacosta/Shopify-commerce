import { Product } from "./ProductItem";
import ProductItem from "./ProductItem";
import GridDisplay from "./GridDisplay";

function ProductsDisplay({ products }: { products: Product[] }) {
  return (
    <GridDisplay cols={4}>
      {products.map((item) => (
        <ProductItem
          key={item["id"]}
          product={item}
          onClick={() => console.log("clicked")}
        />
      ))}
    </GridDisplay>
  );
}

export default ProductsDisplay;
