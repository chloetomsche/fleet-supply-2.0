import { fetchProductBySlug } from "@/lib/data";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);

  return (
    <div>
      <p>{product.name}</p>
      <p>{product.src}</p>
    </div>
  );
}
