import Link from "next/link";
export default function BrandPromotions() {
  return (
    <div className="flex flex-col items-center gap-6 mb-15 md:mt-15 md:mb-20 lg:mt-25 lg:mb-50 ">
      <img
        src="/mock-banner4.svg"
        className="rounded-md w-[600px] h-[150px] md:w-[1000px] md:h-[200px] lg:w-[1400px] lg:h-[250px]"
      />
      <h3 className="text-5xl md:text-6xl lg:text-7xl  font-fugaz mt-8">
        NEW LOWER PRICE
      </h3>
      <div className="flex flex-col justify-center items-center gap-4 lg:gap-15">
        {/* stacked images */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 lg:gap-6">
          <img
            src="/mock-promos1.svg"
            className="w-[400px] h-[250px] md:w-[475px] md:h-[250px] lg:w-[650px] lg:h-[400px] rounded-md"
          />
          <img
            src="/mock-promos2.svg"
            className="w-[400px] h-[250px] md:w-[475px] md:h-[250px] lg:w-[650px] lg:h-[400px] rounded-md"
          />
        </div>

        {/* call to action block */}
        <div className="bg-linear-to-br from-black via-[#222222] to-[#262626] w-[300px] h-[50px] md:w-[600px] md:h-[100px] lg:w-[800px] lg:h-[150px] text-white flex flex-col items-center justify-center p-8 rounded-lg gap-6 lg:gap-12">
          <Link href="/promotions">
            <button>
              <h3 className="text-2xl md:text-3xl lg:text-5xl text-left font-fugaz hover:underline cursor-pointer">
                VIEW MORE PROMOTIONS
              </h3>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
