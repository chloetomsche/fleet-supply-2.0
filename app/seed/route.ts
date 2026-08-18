import { products } from "@/constants/productsData";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: "require",
});

async function seedProducts() {
  const seededProducts = await Promise.all(
    products.map(
      (product) => sql`
            INSERT INTO products (name, season, brand, category, subcategory, price, sale_price, quantity, description, slug, rating, src, on_saSle, in_stock, shipping_available, in_store_pickup, review_count, tags)
            VALUES (${product.name}, ${product.season}, ${
        product.brand
      }, ${product.category}, ${product.subcategory}, ${product.price}, ${
        product.sale_price
      }, ${product.quantity}, ${product.description}, ${product.slug}, ${
        product.rating
      }, ${product.src}, ${product.on_sale}, ${product.in_stock}, ${
        product.shipping_available
      }, ${product.in_store_pickup}, ${product.review_count}, ${sql.array(
        product.tags
      )})
            ON CONFLICT (slug) DO NOTHING
            `
    )
  );

  return seededProducts;
}

export async function GET() {
  try {
    await seedProducts();
    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
