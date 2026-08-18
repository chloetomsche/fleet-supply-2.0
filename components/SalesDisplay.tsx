"use client";
import { salesProducts } from "@/lib/actions";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SalesDisplay() {
  const [category, setCategory] = useState("");
  const [nextPage, setNextPage] = useState(false);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const results = await salesProducts(category);

      setProducts(results);
    };

    fetchProducts();
  }, [category]);
  return (
    <div className="my-15 flex flex-col gap-6 px-2 md:px-4 lg:px-6">
      <div className="bg-linear-to-br from-[#FF3B3F] via-[#DC2126] to-[#8B0000] px-3 md:px-4 lg:px-6 py-4 md:py-6 lg:py-8 rounded-sm">
        <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">
          Today's Deals
        </h2>

        {/* page 1 buttons */}
        {!nextPage && (
          <div className="flex justify-between items-center mb-3 md:mb-5 lg:mb-6 overflow-x-auto">
            <div className="flex gap-1.5 md:gap-2">
              {[
                "",
                "Power Tools",
                "Hand Tools",
                "Outdoor Equipment",
                "Gardening",
                "Work Wear",
              ].map((cat) => (
                <button
                  key={cat}
                  className={`px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm cursor-pointer border-2 border-white transition-colors whitespace-nowrap ${
                    category === cat
                      ? "bg-white text-[#DC2126]"
                      : "text-white hover:bg-white hover:text-[#DC2126]"
                  }`}
                  onClick={() => setCategory(cat)}
                >
                  {cat === "" ? "All" : cat}
                </button>
              ))}
            </div>
            <button
              className="px-2 mx-1.5 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm cursor-pointer border-2 border-white text-white hover:bg-white hover:text-[#DC2126] transition-colors whitespace-nowrap"
              onClick={() => setNextPage(true)}
            >
              More →
            </button>
          </div>
        )}

        {/* page 2 buttons */}
        {nextPage && (
          <div className="flex justify-between items-center mb-3 md:mb-5 lg:mb-6 overflow-x-auto">
            <button
              className="px-2 mx-1.5 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm cursor-pointer border-2 border-white text-white hover:bg-white hover:text-[#DC2126] transition-colors whitespace-nowrap"
              onClick={() => setNextPage(false)}
            >
              ← Back
            </button>
            <div className="flex gap-1.5 md:gap-2">
              {[
                "Pest Control",
                "Farm & Ranch",
                "Patio",
                "Air Conditioning",
                "Appliances",
              ].map((cat) => (
                <button
                  key={cat}
                  className={`px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm cursor-pointer border-2 border-white transition-colors whitespace-nowrap ${
                    category === cat
                      ? "bg-white text-[#DC2126]"
                      : "text-white hover:bg-white hover:text-[#DC2126]"
                  }`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* product cards */}
        <div className="flex justify-start gap-2 md:gap-3 lg:gap-4 overflow-x-auto pb-2">
          {products.slice(0, 10).map((product) => (
            <div
              key={product.slug}
              className="flex flex-col gap-1.5 md:gap-2 bg-white rounded-sm p-2 md:p-3 lg:p-4 w-[140px] min-w-[140px] md:w-[170px] md:min-w-[170px] lg:w-[200px] lg:min-w-[200px] max-w-[200px] shadow-md hover:shadow-lg transition-shadow shrink-0"
            >
              <div className="w-full h-24 md:h-28 lg:h-36 flex items-center justify-center relative group cursor-pointer overflow-hidden rounded-xs">
                <Link href={`/products/${product.slug}`}>
                  <img
                    src={product.src}
                    alt={product.name}
                    className="w-full h-full object-contain transition-all duration-300 group-hover:brightness-75"
                  />
                </Link>
              </div>
              <p className="text-xs md:text-sm font-semibold text-gray-800 line-clamp-2 h-8 md:h-10">
                {product.name}
              </p>
              <div className="flex items-center gap-1.5 md:gap-2 mt-auto">
                <p className="text-[#DC2126] font-bold text-sm md:text-base">
                  ${product.sale_price}
                </p>
                <p className="text-gray-400 line-through text-xs md:text-sm">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
