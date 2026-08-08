"use server";

import { fetchSearchedProducts } from "./data";
import { fetchProducts } from "./data";
import { FetchProductsParams } from "./data";
import { fetchProductBySlug } from "./data";

export async function searchRecommendedProducts(query: string) {
  const results = await fetchSearchedProducts(query);

  return results;
}

export async function searchProducts({query} : FetchProductsParams){
    const results = await fetchProducts({query})

    return results
}
