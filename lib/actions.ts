"use server";

import { fetchRecommendedProducts } from "./data";
import { fetchProductsByDisplay } from "./data";
import { fetchProductsByFilter } from "./data";
import { FilterParamsTypes } from "./data";
export async function searchRecommendedProducts(query: string) {
  const results = await fetchRecommendedProducts(query);

  return results;
}


export async function salesProducts(category: string) {
  const results = await fetchProductsByDisplay(category);

  return results;
}

export async function productsByFilter({
  query,
  category,
  season,
  brand,
}: FilterParamsTypes) {
  const results = await fetchProductsByFilter({query, category, season, brand });

  return results;
}
