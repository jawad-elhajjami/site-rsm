import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { Highlights } from "@/components/Highlights";
import FAQ from "@/components/FAQ";
export default function Home() {
  return (
    <div>
      <Navbar theme="light" />
      <HeroSection />
      <Highlights />
      <FAQ />
    </div>
  );
}
