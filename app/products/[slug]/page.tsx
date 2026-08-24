import { fetchProductBySlug } from "@/lib/data";
import Link from "next/link";

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
    <div className="flex justify-around items-center  my-15">
      <div className="flex flex-col gap-4 ">
        {filterLabel && <h3 className="text-2xl font-medium">{filterLabel}</h3>}
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
        <h2>{product.name}</h2>
        <div className="flex gap-2">
          <p>{product.rating}</p>
          <p>({product.review_count})</p>
        </div>
        <h3>{product.price}</h3>
      </div>
    </div>
  );
}
