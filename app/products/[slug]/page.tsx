import { fetchProductBySlug } from "@/lib/data";
import Link from "next/link";
import RecommendedProducts from "@/components/RecommendedProducts";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ category: string; brand: string; season: string }>;
}) {
  const { slug } = await params;
  const { category, brand, season } = await searchParams;
  const product = await fetchProductBySlug(slug);

  const filterLabel = category
    ? `Category / ${category}`
    : season
    ? `Season / ${season}`
    : brand
    ? `Brand / ${brand}`
    : `Category / ${product.category}`;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center items-center gap-50 my-15">
        <div className="flex flex-col gap-4 ">
          {filterLabel && (
            <h3 className="text-2xl font-medium">{filterLabel}</h3>
          )}
          <Link href={`/shop`}>
            <button className="text-left font-medium cursor-pointer w-20 hover:font-bold">
              ← Back
            </button>
          </Link>

          <img src={product.src} />
          <div className="flex justify-center gap-2 ">
            <img src={product.src} className="w-36 h-36" />
            <img src={product.src} className="w-36 h-36" />
            <img src={product.src} className="w-36 h-36" />
            <img src={product.src} className="w-36 h-36" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <div className="flex gap-2">
            <p>{product.rating}</p>
            <p>({product.review_count})</p>
          </div>
          <h3 className="text-2xl font-extrabold">${product.price}</h3>
          <div className="flex gap-4 mt-10">
            <button className="text-[#DC2126] border-2 rounded-full px-2 py-2 cursor-pointer hover:bg-[#DC2126] hover:text-white">
              Add to cart
            </button>
            <button className="bg-[#DC2126] rounded-full px-2 text-white cursor-pointer">
              Buy now
            </button>
          </div>
        </div>
      </div>
      <RecommendedProducts />
    </div>
  );
}
