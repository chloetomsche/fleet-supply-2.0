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
  const { query, season, brand, category, on_sale } = await searchParams;
  return (
    <div>
      <ProductGrid />
    </div>
  );
}
