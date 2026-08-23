
export default function RewardsBlock() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center gap-15 lg:gap-50 items-center rounded-md  bg-linear-to-br from-black via-[#222222] to-[#262626] text-white px-4 py-4 w-[600px] h-[150px] md:w-[1000px] md:h-[200px] lg:w-[1400px] lg:h-[250px]">
        <div className="flex flex-col gap-2 justify-center">
          <div>
            <h1 className="font-fugaz text-3xl md:text-5xl lg:text-8xl font-medium">
              $5 OFF COUPON
            </h1>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h1 className="font-fugaz md:text-3xl lg:text-3xl font-medium">
              WHEN YOU VERIFY YOUR ACCOUNT!
            </h1>

            <button className="border px-2 py-2 hover:underline cursor-pointer font-fugaz">
              JOIN NOW
            </button>
          </div>
        </div>

        <div>
          <img
            src="/fleetrewards.png"
            className="w-32 lg:w-56 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
