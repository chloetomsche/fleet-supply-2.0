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

export async function fetchProducts({ query }: FetchProductsParams) {
  const searchQuery = query ?? null;

    const searchPattern = `%${searchQuery}%`
  try {
    if (searchQuery) {
      console.log("im in the search branch");
      const products = await sql`
    
        SELECT * FROM products
        WHERE 
        name ILIKE ${searchPattern} 
        OR array_to_string(tags, ' ') ILIKE ${searchPattern}
        `;
      return products;
    } else {
      console.log("im in the no-search branch");
      const products = await sql`SELECT * FROM products`;

      return products;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function fetchProductBySlug(slug: string) {
  const product = await sql`
        SELECT * FROM products WHERE slug = ${slug}
    `;
  return product[0];
}
