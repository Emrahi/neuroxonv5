import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Protocol } from "@/components/sections/Protocol";
import { CorporateProducts } from "@/components/sections/CorporateProducts";
import { IndividualProducts } from "@/components/sections/IndividualProducts";

export default function Home() {
  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Manifesto />
      <Protocol />
      <CorporateProducts />
      <IndividualProducts />
      <Footer />
    </main>
  );
}
