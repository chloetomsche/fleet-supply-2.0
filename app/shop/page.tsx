import { fetchProductsByFilter } from "@/lib/data";
import ProductGrid from "@/components/ProductGrid";
import ShopFilter from "@/components/ShopFilter";
import PriceFilter from "@/components/PriceFilter";
import AvailabilityFilter from "@/components/AvailabilityFilter";
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
 
  const onSale = on_sale === "true" ? true : undefined;

  const products = await fetchProductsByFilter({
    query,
    season,
    brand,
    category,
    on_sale: onSale,
  });

  return (
    <div className="flex flex-col px-10">
      <img src="/shop-banner2.svg" className="rounded-md" />
      <div className="flex justify-center gap-15 mt-20">
        <div className="flex flex-col">
          <div className="flex gap-2 ">
            <h4 className="text-2xl font-medium mb-5">Results</h4>
            <p>({products.length})</p>
          </div>

          <ShopFilter />
          <PriceFilter />
          <AvailabilityFilter />
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
