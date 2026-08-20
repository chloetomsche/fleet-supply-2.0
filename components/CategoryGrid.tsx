"use client";

import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
export default function CategoryGrid() {
  type CategoryItem = {
    name: string;
    src: string;
  };
  const summerCategories: CategoryItem[] = [
    { name: "Outdoor Equipment", src: "/outdoor-equipment.svg" },
    { name: "Gardening", src: "/gardening.svg" },
    { name: "Pest Control", src: "/pest-control.svg" },
    { name: "Air Conditioning", src: "/air-conditioning.svg" },
    { name: "Patio", src: "/patio.svg" },
    { name: "Farm & Ranch", src: "/farm-and-ranch.svg" },
  ];

  return (
    <div className="flex justify-center my-25">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-2 md:gap-15 lg:grid-cols-3 lg:gap-20">
        {summerCategories.map((category) => (
          <div key={category.name}>
            <CategoryCard name={category.name} src={category.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
