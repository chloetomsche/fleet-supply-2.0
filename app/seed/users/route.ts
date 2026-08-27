import bcrypt from "bcryptjs";
import postgres from "postgres";
import { users } from "@/constants/usersData";

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: "require",
});

async function seedUsers() {
  const seededUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.user_password, 10);
      return sql`
      INSERT INTO users (first_name, last_name, user_email, user_password, user_phone, user_address_line1, user_address_line2, user_address_city, user_address_state, user_address_zip, user_role)
      VALUES (${user.first_name}, ${user.last_name}, ${user.user_email}, ${hashedPassword}, ${user.user_phone}, ${user.user_address_line1}, ${user.user_address_line2}, ${user.user_address_city}, ${user.user_address_state}, ${user.user_address_zip}, ${user.user_role})

      ON CONFLICT (user_email) DO NOTHING
      `
    })
  );
}

export async function GET() {
    try {
      await seedUsers();
      return Response.json({ message: "Database seeded successfully" });
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }
  