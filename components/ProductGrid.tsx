import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: any[];

};



export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-10 px-4 py-4 md:px-6 md:py-6 lg:px-10 lg:py-10 ">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
