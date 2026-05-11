"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image
              src="/logo.avif"
              alt="Neuroxon Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl tracking-tight text-white leading-none">
              NEUROXON
            </span>
            <span className="text-accent text-[10px] uppercase tracking-widest font-semibold mt-1">
              Institute of Brain Health
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-white transition-colors">
            Kimiz Biz?
          </a>
          <a href="#protocol" className="text-sm font-medium text-foreground/80 hover:text-white transition-colors">
            M.I.N.D. Protocol
          </a>
          <a href="#corporate" className="text-sm font-medium text-foreground/80 hover:text-white transition-colors">
            Kurumsal Ürünler
          </a>
        </nav>

        <button className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white transition-colors">
          Kurumsal Teklif Al
        </button>
      </div>
    </motion.header>
  );
}
