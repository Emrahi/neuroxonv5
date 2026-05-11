import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Protocol } from "@/components/sections/Protocol";
import { CorporateProducts } from "@/components/sections/CorporateProducts";
import { IndividualProducts } from "@/components/sections/IndividualProducts";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Manifesto />
      <Protocol />
      <CorporateProducts />
      <IndividualProducts />
      
      {/* Simple Footer */}
      <footer className="py-8 text-center border-t border-white/5 mt-auto">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Neuroxon Institute. Tüm hakları saklıdır.
        </p>
      </footer>
    </main>
  );
}
