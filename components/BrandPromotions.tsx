export default function BrandPromotions() {
  return (
    <div className="flex flex-col items-center gap-10 mt-25 ">
      <img src="/mock-banner4.svg" className="rounded-md" />
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#DC2126] tilt-warp-heading mt-5">NEW LOWER PRICE</h3>
        <div className="flex flex-col gap-2 md:flex-row md:gap-5 lg:gap-8">
            <img src="/mock-promos1.svg" className="w-[400px] h-[250px] md:w-[475px] md:h-[250px] lg:w-[650px] lg:h-[400px]"/>
            <img src="/mock-promos2.svg"  className="w-[400px] h-[250px] md:w-[475px] md:h-[250px] lg:w-[650px] lg:h-[400px]"/>
        </div>
    </div>
  );
}
