import HeroSection from "@/components/HeroSection";
import { Highlights } from "@/components/Highlights";
import { Program } from "@/components/Program";
import { Professors } from "@/components/Professors";
import FAQ from "@/components/FAQ";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Highlights />
      <Program />
      <Professors />
      <FAQ />
    </div>
  );
}
