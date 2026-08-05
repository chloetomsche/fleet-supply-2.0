import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: "require",
});

export async function fetchSearchedProducts(searchTerm: string) {
  try {
    const searchPattern = `%${searchTerm}%`;

    const searchRecommendations = await sql`
        SELECT * FROM products
        WHERE array_to_string(tags, ' ') ILIKE ${searchPattern}
        `;
    return searchRecommendations;
  } catch (error) {
    throw new Error("Cannot find product.");
  }
}
