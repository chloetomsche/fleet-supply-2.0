import BrandCard from "./BrandCard";

export default function BrandsGrid() {
  type BrandItem = {
    name: string;
    src: string;
  };
  const brands: BrandItem[] = [
    { name: "DEWALT", src: "/dewalt.png" },
    { name: "Milwaukee", src: "/milwaukee.png" },
    { name: "Scotts", src: "/scotts.png" },
    { name: "Husqvarna", src: "/husqvarna.png" },
    { name: "Weber", src: "/weber.png" },
    { name: "Ortho", src: "/ortho.png" },
    { name: "Carhartt", src: "/carhartt.png" },
    { name: "Big Gain", src: "/biggain.png" },
  ];
  return (
    <div className="flex flex-col items-center my-25 gap-10">
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-fugaz">
        BRANDS WE LOVE
      </h2>
      <div className="flex justify-center ">
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 lg:grid-cols-4 lg:gap-10">
          {brands.map((brand) => (
            <div key={brand.name}>
              <BrandCard src={brand.src} name={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
