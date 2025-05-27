import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { Highlights } from "@/components/Highlights";

export default function Home() {
  return (
    <div>
      <Navbar theme="light" />
      <HeroSection />
      <Highlights />
    </div>
  );
}
