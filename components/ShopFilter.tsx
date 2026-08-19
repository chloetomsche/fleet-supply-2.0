"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function ShopFilter() {
  const [filter, setFilter] = useState("");
  const [secondFilter, setSecondFilter] = useState("");
  const [isSecondFilter, setIsSecondFilter] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function applyFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    params.set(key, value);

    router.push(`${pathname}?${params.toString()}`);
  }

  function clearFilters() {
    router.push(pathname);
  }

  const categories = [
    "Power Tools",
    "Hand Tools",
    "Outdoor Equipment",
    "Gardening",
    "Pest Control",
    "Farm & Ranch",
    "Work Wear",
    "Patio",
    "Air Conditioning",
    "Appliances",
  ];
  const seasons = ["All", "Spring", "Summer", "Fall", "Winter"];
  const brands = [
    "DEWALT",
    "Milwaukee",
    "Husqvarna",
    "Scotts",
    "Weber",
    "Ortho",
    "Carhartt",
    "Big Gain",
    "Hampton Bay",
    "Frigidaire",
  ];

  return (
    <div className="w-48">
      {!isSecondFilter && (
        <div className="flex flex-col items-start border w-full">
          <button
            className={`border-b w-full text-left px-4 py-2 cursor-pointer hover:bg-[#DC2126] hover:text-white ${
              filter === "" && "bg-[#DC2126] text-white"
            }`}
            onClick={() => {
              setFilter("");
              clearFilters();
            }}
          >
            All
          </button>
          <button
            className={`border-b w-full text-left px-4 py-2 cursor-pointer hover:bg-[#DC2126] hover:text-white ${
              filter === "category" && "bg-[#DC2126] text-white"
            }`}
            onClick={() => {
              setFilter("category");
              setIsSecondFilter(true);
            }}
          >
            Shop by Category
          </button>
          <button
            className={`border-b w-full text-left px-4 py-2 cursor-pointer hover:bg-[#DC2126] hover:text-white ${
              filter === "season" && "bg-[#DC2126] text-white"
            }`}
            onClick={() => {
              setFilter("season");
              setIsSecondFilter(true);
            }}
          >
            Shop by Season
          </button>
          <button
            className={`border-b w-full text-left px-4 py-2 cursor-pointer hover:bg-[#DC2126] hover:text-white ${
              filter === "brand" && "bg-[#DC2126] text-white"
            }`}
            onClick={() => {
              setFilter("brand");
              setIsSecondFilter(true);
            }}
          >
            Shop by Brand
          </button>
          <button
            className={` w-full text-left px-4 py-2 cursor-pointer hover:bg-[#DC2126] hover:text-white ${
              filter === "on_sale" && "bg-[#DC2126] text-white"
            }`}
            onClick={() => {
              setFilter("on_sale");
              router.push(`${pathname}?on_sale=true`);
            }}
          >
            Shop by Sale
          </button>
        </div>
      )}

      {isSecondFilter && (
        <div className="flex flex-col w-full border">
          <button
            className="border-b w-full text-left px-4 py-2 cursor-pointer hover:bg-[#DC2126] hover:text-white font-medium"
            onClick={() => {
              setIsSecondFilter(false);
              clearFilters();
              setFilter("");
            }}
          >
            ← Back
          </button>
          <div className="flex flex-col w-full">
            {filter === "category" &&
              categories.map((category) => (
                <button
                  key={category}
                  className={`border-b w-full text-left px-4 py-2 cursor-pointer hover:bg-[#DC2126] hover:text-white ${
                    secondFilter === category && "bg-[#DC2126] text-white"
                  }`}
                  onClick={() => {
                    applyFilter("category", category);
                    setSecondFilter(category);
                  }}
                >
                  {category}
                </button>
              ))}
            {filter === "season" &&
              seasons.map((season) => (
                <button
                  key={season}
                  className="border-b last:border-b-0 w-full text-left px-4 py-2 cursor-pointer hover:bg-gray-50"
                  onClick={() => applyFilter("season", season)}
                >
                  {season}
                </button>
              ))}
            {filter === "brand" &&
              brands.map((brand) => (
                <button
                  key={brand}
                  className="border-b last:border-b-0 w-full text-left px-4 py-2 cursor-pointer hover:bg-gray-50"
                  onClick={() => applyFilter("brand", brand)}
                >
                  {brand}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
