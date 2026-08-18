import Image from "next/image";
import SalesDisplay from "@/components/SalesDisplay";
import CategoryGrid from "@/components/CategoryGrid";

export default function Home() {
  return (
    <div>
      <SalesDisplay />
      <CategoryGrid />
    </div>
  );
}
