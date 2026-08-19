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

//Filters shop's products

export type FilterParamsTypes = {
  query?: string;
  category?: string;
  season?: string;
  brand?: string;
  on_sale?: boolean;
};
export async function fetchProductsByFilter({
  query,
  category,
  season,
  brand,
  on_sale,
}: FilterParamsTypes) {
  const checkedQuery = query ?? null;
  const checkedCategory = category ?? null;
  const checkedSeason = season ?? null;
  const checkedBrand = brand ?? null;
  const checkedSale = on_sale ?? false;

  console.log("filter params:", { checkedQuery, checkedCategory, checkedSeason, checkedBrand, checkedSale })
  try {
    const searchPattern = checkedQuery ? `%${checkedQuery}%` : "%";

    if (checkedSale !== true) {
      const products = await sql`
        SELECT * FROM products 
        WHERE (name ILIKE ${searchPattern} 
        OR array_to_string(tags, ' ') ILIKE ${searchPattern} )
        AND (${checkedCategory}::text IS NULL OR category = ${checkedCategory})
        AND (${checkedSeason}::text IS NULL OR season = ${checkedSeason})
        AND (${checkedBrand}::text IS NULL OR brand = ${checkedBrand})
    
        `;

      return products;
    } else {
      const products = await sql`
        SELECT * FROM products WHERE on_sale = true
        `;

        console.log("sale products returned:", products.length)
      return products;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products");
  }
}
