import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { Highlights } from "@/components/Highlights";
import { Program } from "@/components/Program";
import { Professors } from "@/components/Professors";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar theme="light" />
      <HeroSection />
      <Highlights />
      <Program />
      <Professors />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
