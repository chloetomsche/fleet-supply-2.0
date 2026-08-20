'use client'
import Link from "next/link";

export default function CategoryCard({
  name,
  src,
}: {
  name: string;
  src: string;
}) {
 

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div className="relative group cursor-pointer overflow-hidden">
        <Link href={`/shop?/category=${name}`}><img
          src={src}
          className="transition-all duration-300 group-hover:brightness-75 w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-sm"
        /></Link>
        
      </div>
      <h3 className="text-2xl md:text-3xl lg:text-3xl">{name}</h3>
    </div>
  );
}
