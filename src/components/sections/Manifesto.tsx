"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../shared/GlassCard";
import { CheckCircle2, XCircle } from "lucide-react";

export function Manifesto() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Manifestomuz */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-32"
        >
          <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-4">Vizyon & Misyon</h2>
          <p className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-8">
            "Türkiye’de kurumsal beyin sağlığı <br className="hidden md:block"/> neden yanlış yönetiliyor?"
          </p>
          <p className="text-xl text-muted-foreground">
            Tüm enerjimizi bu sorunun liyakatini sağlamaya yönlendiririz. <br/> Bu bizim manifestomuzdur.
          </p>
        </motion.div>

        {/* Kimiz Biz? Kim Değiliz? */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold font-heading text-white mb-6 flex items-center gap-3">
              <span className="text-red-400"><XCircle size={28} /></span>
              Kim Değiliz?
            </h3>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-red-400/50">•</span>
                Biz koçluk yapmayız.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-red-400/50">•</span>
                Psikolojik destek hizmeti vermeyiz.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-red-400/50">•</span>
                Çalışanlara psikolog ya da diyetisyen seansı satmayız. (Aslında yapıyoruz da asıl işimiz o değil).
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-heading text-white mb-6 flex items-center gap-3">
              <span className="text-accent"><CheckCircle2 size={28} /></span>
              Bizim Alanımız
            </h3>
            <p className="text-xl font-medium text-white mb-4">
              Klinik temelli, ölçülebilir, biyolojik performans optimizasyonu.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Biz LinkedIn diliyle değil, tıp diliyle konuşuruz. Biz çalışanların iyilik hali ya da motivasyonunu artırmak demeyiz; <strong className="text-white">"Prefrontal korteksi optimize etmek, kurumsal karar vericilerin bilişsel kapasitesini medikal düzeyde korumak"</strong> deriz.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Karar yorgunluğunu ve çözümlerini nörobiyolojik modelle anlatırız.
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Dopamin ekonomisi üzerinden liderlik anlatırız.
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Kortizol eğrisi üzerinden performans anlatırız.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Medical Authority */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl -z-10" />
          <GlassCard className="border-primary/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-sm font-semibold tracking-widest text-accent uppercase mb-3">En Büyük Ayrışmamız</h3>
                <h4 className="text-3xl font-bold font-heading text-white mb-6">"Medical Authority" Olmamız</h4>
                <p className="text-lg text-muted-foreground mb-6">
                  Piyasadaki diğer firmalar anket yapar, NPS ölçer, atölye yapar. Biz ise:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="text-accent" size={20} /> Klinik tarama yaparız.
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="text-accent" size={20} /> HPA aksını konuşuruz.
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="text-accent" size={20} /> İnflamasyonu, insülin direncini, kortizol paternini anlatırız.
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} /> 
                    <span>Doktorlar ve yardımcı sağlık personelleri (Fizyoterapist, Klinik Psikolog, Uzman Diyetisyen) uzmanlık alanlarında doğrudan tıbbi çözümler sunar.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background/50 rounded-2xl p-8 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                <p className="text-xl text-white font-medium italic relative z-10 leading-relaxed">
                  Birlikte çalıştığımız şirketlerin düşüncesi hep şöyledir: <br/>
                  <span className="text-accent">"Bunu koç yapamaz. Bu medikal bir yapı."</span>
                </p>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-sm text-muted-foreground">
                    Örnek vermek gerekirse; çalışan bir annenin evinde çocuğuyla yaşadığı zorlukları çözdüğünüzde, bu annenin beyin performansına yansır. İşte biz bu toplantıya bir çocuk doktoru ve çocuk psikiyatristini bir arada getirebilen bir yapıyız.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
}
