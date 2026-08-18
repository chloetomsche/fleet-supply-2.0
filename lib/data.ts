import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: "require",
});

//Fetches products for the search drop down
export async function fetchRecommendedProducts(query: string) {
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
//Fetches products for shop page
export async function fetchProductsBySearch(query?: string) {
  try {
    if (query) {
      const searchPattern = `%${query}%`;
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

//Fetches a single product for the product page
export async function fetchProductBySlug(slug: string) {
  const product = await sql`
        SELECT * FROM products WHERE slug = ${slug}
    `;
  return product[0];
}

//Fetches products for the sales display
export async function fetchProductsByDisplay(category?: string) {
  try {
    if (!category) {
      const products = await sql`
            SELECT * FROM products WHERE on_sale = true
            `;

      return products;
    } else {
      const products = await sql`
        SELECT * FROM products WHERE on_sale = true 
        AND category = ${category}
        `;

      return products;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products");
  }
}

//Fetches product categories
export async function fetchProductsByCategory(category?: string) {
  try {
    if (!category) {
      const products = await sql`
            SELECT * FROM products
            `;
      return products;
    } else {
      const products = await sql`
            SELECT * FROM products WHERE category = ${category}
            `;
      return products;
    }
  } catch (error) {
    throw new Error("Failed to categorize products");
  }
}
