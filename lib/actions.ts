"use server";

import { fetchSearchedProducts } from "./data";
import { fetchProducts } from "./data";
import { FetchProductsParams } from "./data";

export async function searchRecommendedProducts(query: string) {
  const results = await fetchSearchedProducts(query);

  return results;
}

export async function searchProducts({query, season, brand, category, on_sale} : FetchProductsParams){
    const results = await fetchProducts({query, season, brand, category, on_sale})

    return results
}