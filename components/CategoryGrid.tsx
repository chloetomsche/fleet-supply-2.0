"use client";
import { productsByCategory } from "@/lib/actions";
import { products } from "@/constants/productsData";
import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
export default function CategoryGrid() {
  const [category, setCategory] = useState("");

  const allCategories = products.map((product) => product.category);
  const uniqueCategories = [...new Set(allCategories)];
  const sixCategories = uniqueCategories.slice(0, 6);

  useEffect(() => {
    const fetchProducts = async () => {
      const results = await productsByCategory(category);

      return results;
    };

    fetchProducts;
  }, [category]);
  return (
    <div className="flex justify-center my-25">
    <div className="grid grid-cols-2 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-10">
      {sixCategories.map((category) => (
        <div>
          <CategoryCard category={category}/>
        </div>
      ))}
    </div>
    </div>
  );
}
