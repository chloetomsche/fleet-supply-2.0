"use client";
import { searchRecommendedProducts } from "@/lib/actions";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showDropDown, setShowDropDown] = useState(false);

  const router = useRouter();

  const debouncedSearch = useDebouncedCallback(async (searchTerm) => {
    if (searchTerm.length < 2) {
      setSearchResults([]);
      return;
    }

    const results = await searchRecommendedProducts(searchTerm);
    setShowDropDown(true);
    setSearchResults(results);
  }, 300);

  return (
    <form
      className="flex w-full items-start"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("button clicked, userInput:", userInput);
        router.push(`/shop?query=${userInput}`);
        setShowDropDown(false);
        setUserInput("");
      }}
    >
      <div className="flex w-full focus-within:ring-2 focus-within:ring-[#DC2126] rounded-xs group">
        <div className="flex flex-col relative w-full">
          <input
            onChange={(event) => {
              setUserInput(event.target.value);
              debouncedSearch(event.target.value);
            }}
            value={userInput}
            placeholder="What can we help you find today?"
            className="w-full text-xs md:text-sm lg:text-base border border-black  group-focus-within:border-transparent rounded-l-xs px-2 py-1.5 md:py-2 outline-none"
          />
          {showDropDown && (
            <ul className="absolute top-full left-0 w-full bg-white border border-black z-50 border-t-0">
              {searchResults.slice(0, 5).map((result) => (
                <li
                  key={result.slug}
                  className="px-2 py-2 hover:bg-gray-100 cursor-pointer border-b"
                  onClick={() => {
                    setShowDropDown(false);
                    setUserInput("");
                  }}
                >
                  <Link href={`/products/${result.slug}`}>{result.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="bg-[#DC2126] w-7 md:w-8 lg:w-10 flex items-center justify-center rounded-r-xs shrink-0 self-start py-1.75 md:py-2.25 hover:cursor-pointer">
          <img
            src="/search.png"
            className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
          />
        </button>
      </div>
    </form>
  );
}
