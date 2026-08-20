import { fetchProductsByFilter } from "@/lib/data";
import ProductGrid from "@/components/ProductGrid";
import ShopFilter from "@/components/ShopFilter";
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
  console.log("searchParams:", { query, season, brand, category, on_sale });
  const onSale = on_sale === "true" ? true : undefined;

  const products = await fetchProductsByFilter({
    query,
    season,
    brand,
    category,
    on_sale: onSale,
  });

  console.log("products being passed to grid:", products.length);
  return (
    <div className="flex justify-center gap-15 mt-20">
      <div className="flex flex-col">
        <div className="flex gap-2 ">
          <h4 className="text-2xl font-medium mb-5">Results</h4>
          <p>({products.length})</p>
        </div>

        <ShopFilter />
      </div>
      <ProductGrid products={products} />
    </div>
  );
}
