import SalesDisplay from "@/components/SalesDisplay";
import CategoryGrid from "@/components/CategoryGrid";
import BrandPromotions
 from "@/components/BrandPromotions";
export default function Home() {
  return (
    <div className="">
      <SalesDisplay />
      <BrandPromotions />
      <CategoryGrid />
    </div>
  );
}
