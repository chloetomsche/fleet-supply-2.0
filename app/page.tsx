import SalesDisplay from "@/components/SalesDisplay";
import CategoryGrid from "@/components/CategoryGrid";
import BrandPromotions from "@/components/BrandPromotions";
import BrandsGrid from "@/components/BrandsGrid";
import RewardsBlock from "@/components/RewardsBlock";

export default function Home() {
  return (
    <div className="">
      <RewardsBlock />
      <SalesDisplay />
      <BrandPromotions />

      <CategoryGrid />

      <BrandsGrid />
    </div>
  );
}
