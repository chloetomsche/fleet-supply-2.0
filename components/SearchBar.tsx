"use client";
import { searchProducts } from "@/lib/actions";
import { useState, useEffect } from "react";

export default function SearchBar() {
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    setShowDropDown(true);
    async function fetchResults() {
      const results = await searchProducts(userInput);

      setSearchResults(results);
    }

    fetchResults();
    setSearchResults([]);
  }, [userInput]);

  return (
    <form className="flex w-full items-start">
      <div className="flex flex-col relative w-full">
        <input
          onChange={(event) => setUserInput(event?.target.value)}
          placeholder="What can we help you find today?"
          className="w-full text-xs md:text-sm lg:text-base border border-black rounded-l-xs px-2 py-1.5 md:py-2"
        />
        {showDropDown && (
          <ul className="absolute top-full left-0 w-full bg-white border border-black z-50 border-t-0">
            {searchResults.slice(0, 5).map((result) => (
              <li
                key={result.slug}
                className="px-2 py-2 hover:bg-gray-100 cursor-pointer border-b"
              >
                {result.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button className="bg-[#DC2126] w-7 md:w-8 lg:w-10 flex items-center justify-center rounded-r-xs shrink-0 self-start py-1.75 md:py-2.25">
        <img
          src="/search.png"
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        />
      </button>
    </form>
  );
}
