"use client";

import Link from "next/link";

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
  return (
    <div className="flex flex-col gap-3 items-center border rounded-sm px-4 py-4">
      <Link href={`/products/${product.slug}`}>
        <img
          src={product.src}
          className="cursor-pointer hover:brightness-75"
          alt={product.description}
        />
      </Link>
      <p className="font-bold">{product.name}</p>
      <p className="font-medium">${product.price}</p>
      <div className="flex gap-2">
        <p>{product.rating} stars</p>
        <p className="text-gray-700">({product.review_count})</p>
      </div>
    </div>
  );
}
