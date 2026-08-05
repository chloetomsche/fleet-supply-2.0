"use server";

import { fetchSearchedProducts } from "./data";

export async function searchProducts(userInput: string) {
  const results = await fetchSearchedProducts(userInput);

  return results;
}
