"use client";

import { useSearchParams, useRouter } from "next/navigation";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    src: string;
    price: number;
    slug: string;
    description: string;
    rating: number;
    review_count: number;
  };
};
export default function ProductCard({ product }: ProductCardProps) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const productUrl = `/products/${product.slug}?${params.toString()}`;
  const router = useRouter();

  return (
    <div className="flex flex-col gap-3 items-center border rounded-sm px-4 py-4">
      <img
        src={product.src}
        className="cursor-pointer hover:brightness-75"
        alt={product.description}
        onClick={() => {
          router.push(productUrl)
        }}
      />

      <p className="font-bold">{product.name}</p>
      <p className="font-medium">${product.price}</p>
      <div className="flex gap-2">
        <p>{product.rating} stars</p>
        <p className="text-gray-700">({product.review_count})</p>
      </div>
    </div>
  );
}
