import Link from "next/link";
export default function BrandCard({
  src,
  name,
}: {
  src: string;
  name: string;
}) {
  return (
    <div className="flex w-52 h-52 rounded-full overflow-hidden justify-center">
      <Link href={`/shop?brand=${name}`}>
        <img
          src={src}
          className="w-32 h-32  md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain hover:brightness-75 cursor-pointer"
        />
      </Link>
    </div>
  );
}
