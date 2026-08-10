"use server";

import { fetchRecommendedProducts } from "./data";
import { fetchProductsBySearch } from "./data";
import { fetchProductsByDisplay } from "./data";

export async function searchRecommendedProducts(query: string) {
  const results = await fetchRecommendedProducts(query);

  return results;
}

export async function searchProducts(query: string){
    const results = await fetchProductsBySearch(query)

    return results
}

export async function salesProducts(category: string) {
    const results = await fetchProductsByDisplay(category)

    return results;
}