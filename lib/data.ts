import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: "require",
});

export async function fetchSearchedProducts(query: string) {
  try {
    const searchPattern = `%${query}%`;

    const searchRecommendations = await sql`
        SELECT  * FROM products
        WHERE
        name ILIKE ${searchPattern}
        OR array_to_string(tags, ' ') ILIKE ${searchPattern}
        OR category ILIKE ${searchPattern}
        ORDER BY
            CASE
                WHEN name ILIKE ${searchPattern} THEN 1
                WHEN array_to_string(tags, ' ') ILIKE ${searchPattern} THEN 2
                WHEN category ILIKE ${searchPattern} THEN 3
            END
        `;
    return searchRecommendations;
  } catch (error) {
    throw new Error("Cannot find product.");
  }
}

export type FetchProductsParams = {
  query?: string;
  category?: string;
  season?: string;
  brand?: string;
  on_sale?: boolean;
};

export async function fetchProducts({
  query,
  season,
  brand,
  category,
  on_sale,
}: FetchProductsParams) {
  const searchQuery = query ?? null;
  const searchSeason = season ?? null;
  const searchBrand = brand ?? null;
  const searchCategory = category ?? null;
  const searchOnSale = on_sale ?? null;

  try {
    const searchPattern = query ? `%${query}%` : "%";
    const products = await sql`
        SELECT * FROM products
        WHERE 
        (${searchQuery} IS NULL 
        OR name ILIKE ${searchPattern} 
        OR array_to_string(tags, ' ') ILIKE ${searchPattern}) 

        AND (${searchSeason} IS NULL OR season = ${searchSeason})
        AND (${searchBrand} IS NULL OR brand = ${searchBrand})
        AND (${searchCategory} IS NULL OR category = ${searchCategory})
        AND  (${searchOnSale} IS NULL OR ${searchOnSale} IS FALSE OR on_sale = true)
        `;

    return products;
  } catch (error) {
    throw new Error("No products matches your search");
  }
}

export async function fetchProductBySlug(slug: string) {
  const product = await sql`
        SELECT * FROM products WHERE slug = ${slug}
    `;
  return product[0];
}
