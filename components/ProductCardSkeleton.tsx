const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export default function ProductCardSkeleton() {
  return (
    <div className={`flex flex-col gap-4 items-center ${shimmer}`}>
      <p className={shimmer}></p>
      <img className={shimmer} />
    </div>
  );
}
