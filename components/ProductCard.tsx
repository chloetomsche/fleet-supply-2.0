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
  };
};
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <p>{product.name}</p>
      <Link href={`/products/${product.slug}`}>
        <img
          src={product.src}
          className="cursor-pointer hover:brightness-75"
          alt={product.description}
    
        />
      </Link>
    </div>
  );
}
