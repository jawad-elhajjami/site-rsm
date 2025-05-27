import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { Highlights } from "@/components/Highlights";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar theme="light" />
      <HeroSection />
      <Highlights />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
