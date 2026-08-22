import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  type CategoryItem = {
    name: string;
    src: string;
  };
  const summerCategories: CategoryItem[] = [
    { name: "Outdoor Equipment", src: "/outdoor-equipment.svg" },
    { name: "Gardening", src: "/gardening.svg" },
    { name: "Pest Control", src: "/pest-control.svg" },
    { name: "Air Conditioning", src: "/air-conditioning.svg" },
    { name: "Patio", src: "/patio.svg" },
    { name: "Farm & Ranch", src: "/farm-and-ranch.svg" },
  ];

  return (
    <div className="flex flex-col gap-10 justify-center items-center my-15 md:my-25 lg:my-50">
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-fugaz ">
        SUMMER ESSENTIALS
      </h2>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-2 md:gap-15 lg:grid-cols-3 lg:gap-20">
        {summerCategories.map((category) => (
          <div key={category.name}>
            <CategoryCard name={category.name} src={category.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
