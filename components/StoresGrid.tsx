"use client";

import { useState } from "react";
import stores from "@/constants/stores";
export default function StoresGrid() {
  const [selectedStore, setSelectedStore] = useState<number | null>(null);

  const handleClick = (id: number) => {
    console.log("clicked store:", id);
    if (selectedStore === id) {
      setSelectedStore(null);
    } else {
      setSelectedStore(id);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
        {stores.map((store) => (
          <div
            key={store.id}
            onClick={() => handleClick(store.id)}
            className="cursor-pointer w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-96 "
            style={{
              transformStyle: "preserve-3d",
              transform:
                selectedStore === store.id
                  ? "rotateY(180deg)"
                  : "rotateY(0deg)",
              transition: "transform 0.7s ease",
              position: "relative",
      
            }}
          >
            <div
              style={{ backfaceVisibility: "hidden" }}
              className="absolute inset-0 flex justify-center items-center rounded-sm overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF3B3F] via-[#DC2126] to-[#8B0000]" />
              <div className="absolute inset-0 bg-gradient-to-tl from-[#FF3B3F] via-[#DC2126] to-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <h1 className="relative font-fugaz not-first:text-4xl text-white text-center px-4">
                {store.name.toUpperCase()}
              </h1>
            </div>
            <div
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
              className="absolute inset-0 flex flex-col items-center gap-4 px-4 rounded-sm bg-[#DC2126]"
            >
              <h1 className="font-fugaz text-2xl text-white text-center w-full py-6 border-b border-white/30">
                {store.name.toUpperCase()}
              </h1>
              
                <ul className="grid grid-cols-2 items-center gap-4 list-disc list-outside pl-4 mt-2 w-full">
                  {store.services.map((service, i) => (
                    <li key={i} className="text-white text-sm text-left">
                      {service}
                    </li>
                  ))}
                </ul>
                
                <button className="text-white border-2 px-2 py-2 font-medium rounded-md mt-auto mb-4 cursor-pointer hover:underline hover:font-bold">VIEW MORE</button>
          
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
