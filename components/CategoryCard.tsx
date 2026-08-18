export default function CategoryCard({ category }: { category: string }) {
  return (
    <div className="flex justify-center items-center border-2 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-sm">
      <h3 className="text-3xl">{category}</h3>
    </div>
  );
}
