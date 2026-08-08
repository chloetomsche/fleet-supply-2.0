import { fetchProducts } from "@/lib/data";
import ProductGrid from "@/components/ProductGrid";
export default async function ShopAll({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    season?: string;
    brand?: string;
    category?: string;
    on_sale?: string;
  }>;
}) {
  console.log("shop page rendered");
  const { query } = await searchParams;

  const products = await fetchProducts({
    query,
  });
  console.log(products);

  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
}
