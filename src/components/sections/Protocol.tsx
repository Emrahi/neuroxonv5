"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../shared/GlassCard";
import { Brain, Activity, Shield, Users } from "lucide-react";

const protocolItems = [
  {
    icon: Brain,
    title: "NeuroCheck",
    desc: "Bilişsel + biyolojik tarama",
  },
  {
    icon: Activity,
    title: "NeuroOptimizasyon",
    desc: "Kişiye özel müdahale",
  },
  {
    icon: Shield,
    title: "NeuroShield",
    desc: "Tükenmişlik önleme stratejisi",
  },
  {
    icon: Users,
    title: "NeuroParent",
    desc: "Çalışan anne-baba özel modülü (çocuk endokrinolojisi dahil)",
  }
];

export function Protocol() {
  return (
    <section id="protocol" className="py-24 relative overflow-hidden bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-4">Ne Sunuyoruz?</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight mb-6">
              "Program" değil, <br/>
              <span className="text-gradient-accent">"Protokol"</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Bu bir wellness programı değil, <strong className="text-white">Neuroxon Executive Protocol™️</strong> adı altında oluşturduğumuz derinlikli bir yapıdır. Tüm başlıklarımız multidisipliner tıbbi bir protokoldür.
            </p>

            <div className="space-y-4 mb-12">
              <h4 className="text-white font-medium mb-4">Hedef Kitlemiz (Kime Hizmet Veriyoruz?)</h4>
              {["C-level yöneticiler", "Üst düzey yöneticiler", "Yüksek bilişsel yük altındaki ekipler", "Kritik karar mekanizmalarını yönetenler", "Sektöre spesifik sorun yaşayan gruplar"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="inline-block p-4 rounded-xl border border-primary/30 bg-primary/5">
              <p className="text-white font-medium">
                Kısacası biz: <span className="text-accent">Executive Brain Risk Management</span> yapıyoruz.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {protocolItems.map((item, index) => (
              <GlassCard 
                key={index}
                delay={index * 0.1}
                className={`flex flex-col gap-4 ${index % 2 === 1 ? 'sm:mt-12' : ''}`}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
