"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-24">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ag.jpeg"
          alt="Neuroxon Neural Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto px-6 w-full text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-foreground/80 uppercase">
              Corporate Brain Health & Neuroperformance Clinic
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white leading-tight">
            Performansı <br />
            <span className="text-gradient-accent">Yeniden Tanımlayın</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            NEUROXON, kurumsal performansı klasik danışmanlık çerçevesinin dışına taşıyan, tıbbi temelli bir nörobilim yapısıdır. Biz, şirketleri yalnızca organizasyon olarak değil, ölçülebilir, tasarlanabilir ve yönetilebilir bir beyin sistemi olarak ele alırız. Bu yaklaşım, bizi standart çözümler sunan yapılardan ayırır.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold text-lg hover:bg-white hover:scale-105 transition-all duration-300">
              Kurumsal Teklif Al
            </button>
            <button className="w-full sm:w-auto px-8 py-4 glass text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Protokolü İncele
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 pb-8 flex flex-col items-center gap-2 mt-auto"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Keşfet</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
