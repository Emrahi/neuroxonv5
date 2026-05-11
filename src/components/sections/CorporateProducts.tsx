"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../shared/GlassCard";

const products = [
  {
    id: "1️⃣",
    title: "NEUROSCAN: Tanı & Risk Haritalama Katmanı",
    desc: "Şirkete ilk giriş noktası. Ölçmeden hiçbir şey yapmıyoruz. (Bu aşama bizi bilimsel otorite yapar).",
    modules: "Kurumsal NöroRisk Analizi, Departman Bazlı Bilişsel Yük Haritası, Uyku & Metabolik Risk Dağılımı, Yönetici Nöroendokrin Tarama, Vardiya Uyum Analizi, Karar Yorgunluğu Skoru.",
    output: "Yönetim Kurulu Sunum Dosyası, Risk Heatmap, Kurumsal Beyin Sermayesi Skoru.",
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    id: "2️⃣",
    title: "NEURODESIGN: Organizasyonel Biyoloji Tasarımı",
    desc: "Veriye göre şirketin çalışma sistemini optimize etme. (Danışmanlıktan daha derin: Organizasyon mühendisliği).",
    modules: "Toplantı Saatlerinin Sirkadiyen Optimizasyonu, Kritik Karar Saatleri Tasarımı, Vardiya Biyolojik Uyum Modeli, Ofis Işık/Uyaran Düzeni, Dijital Yük Azaltma, Bilişsel Rol Yapılandırması.",
    output: "Kurumsal Çalışma Ritmi Rehberi, Bilişsel Sürdürülebilirlik Planı.",
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    id: "3️⃣",
    title: "NEUROPROTECT: Risk Azaltma & Önleyici Protokoller",
    desc: "Şirket seviyesinde erken müdahale. (Kurumsal bir sigorta gibi çalışır).",
    modules: "Tükenmişlik Erken Uyarı Sistemi, Executive Koruma Protokolü, Metabolik Risk Müdahale Planı, Uyku Restorasyon Programı, Yüksek Stres Departman Protokolü, Kriz Dönemi Kortizol Yönetimi.",
    output: "Devamsızlık Azaltım Planı, Performans Stabilizasyon Raporu.",
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    id: "4️⃣",
    title: "NEUROCAPITAL: Beyin Sermayesi Ölçüm & Raporlama",
    desc: "Sizi kategoride tek yapan, CEO ve yatırımcı dilidir.",
    modules: "Cognitive Capital Index, Organizational Brain Sustainability Score, Yönetici Dayanıklılık Endeksi, Bilişsel Risk Trend Analizi, Sektörel Benchmarking.",
    output: "Yıllık Kurumsal Beyin Sağlığı Raporu, Trend & Risk Öngörüleri.",
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    id: "5️⃣",
    title: "NEUROEXECUTIVE: C-Level & Kritik Rol Özel Alanı",
    desc: "Üst düzey yöneticilere özel, sürdürülebilir yüksek performans tasarımı.",
    modules: "C-Level Nöroendokrin Profil, Kriz Liderliği Nörofizyolojisi, Stratejik Düşünme Enerji Optimizasyonu, Hormonal Performans Analizi, Executive Uyku & Biliş Laboratuvarı, 6 Aylık Yönetici Koruma Protokolü.",
    output: "Kişiselleştirilmiş Executive Protokol Raporu.",
    colSpan: "md:col-span-2 lg:col-span-3",
  }
];

export function CorporateProducts() {
  return (
    <section id="corporate" className="py-24 relative bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-4">NEUROXON KURUMSAL ÜRÜN MİMARİSİ</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-white">
            5 Ana Kol
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 items-stretch">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="flex w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <GlassCard
                delay={index * 0.1}
                className="flex flex-col flex-1 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-3xl filter drop-shadow-md">{product.id}</span>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold font-heading text-white mb-2 group-hover:text-accent transition-colors">
                        {product.title.split(': ')[0]}
                      </h4>
                      <span className="text-sm text-accent/80 font-medium">
                        {product.title.split(': ')[1]}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 font-medium text-lg border-l-2 border-primary pl-4">
                    {product.desc}
                  </p>

                  <div className="mt-auto space-y-4">
                    <div className="bg-background/50 p-4 rounded-lg border border-white/5">
                      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Alt Modüller</span>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {product.modules}
                      </p>
                    </div>
                    
                    {product.output && (
                      <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                        <span className="block text-xs uppercase tracking-widest text-accent mb-2">Çıktı</span>
                        <p className="text-sm text-white font-medium">
                          {product.output}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
