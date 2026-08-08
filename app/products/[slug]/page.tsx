import { fetchProductBySlug } from "@/lib/data";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);
  console.log("src:", product.src);
  return (
    <div className="my-15">
      <div className="flex flex-col gap-4 items-center">
        <p>{product.name}</p>
        <img src={product.src} />
      </div>
    </div>
  );
}
