"use client";

import { motion } from "framer-motion";

const products = [
  {
    id: "1️⃣",
    title: "NeuroEnergy",
    desc: "Gün içindeki performansın temeli zihinsel kapasiteden önce fizyolojik enerjidir. Amacımız enerji dalgalanmalarını ortadan kaldırmaktır.",
    trainings: "Yorgunluğun Nöroendokrin Temeli, Sabah Kalkamama, İnsülin Direnci, Beyin için Glukoz Stabilitesi vb.",
  },
  {
    id: "2️⃣",
    title: "NeuroFocus",
    desc: "Modern iş hayatındaki bilişsel parçalanmayı engeller. Odaklanma ve karar verme kapasitesini artırır.",
    trainings: "Prefrontal Korteks, Multitasking Bedeli, Dopamin Tükenmesi, Dijital Dağınıklık, ADHD Özellikleri, Karar Yorgunluğu vb.",
  },
  {
    id: "3️⃣",
    title: "NeuroResilience",
    desc: "Stresin biyolojik etkilerini yöneterek bireyin zihinsel dayanıklılığını artırır. Stabil bir performans yapısı oluşturur.",
    trainings: "Tükenmişlik ve Kortizol, Sessiz Tükenmişlik, HPA Aksı, Stresin Bağırsak-Beyin Etkisi vb.",
  },
  {
    id: "4️⃣",
    title: "NeuroBalance",
    desc: "Yaşa, cinsiyete ve yaşam evresine bağlı biyolojik ve hormonal değişimleri dikkate alarak performansı optimize eder.",
    trainings: "Kadın (PMS, Perimenopoz), Doğum Sonrası, Erkek (Testosteron, 40+ değişim), Genç Profesyoneller vb.",
  },
  {
    id: "5️⃣",
    title: "NeuroLife",
    desc: "Performansın arka planını güçlendirir. Uyku, duygusal denge ve uzun vadeli beyin sağlığı hedeflenir.",
    trainings: "Uyku Kalitesi, Mavi Işık, Melatonin, Ekip Bağlanması (Oksitosin), İşte Anlam ve Ödül Sistemi vb.",
  }
];

export function IndividualProducts() {
  return (
    <section className="py-24 relative bg-[#0A0A0B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-4">NEUROXON İNSAN ÜRÜN MİMARİSİ</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
            Bireysel Optimizasyon Katmanları
          </h3>
        </motion.div>

        <div className="space-y-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 md:p-8 rounded-2xl group hover:border-accent/30 transition-all duration-300"
            >
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4 flex items-center gap-4">
                  <span className="text-2xl">{product.id}</span>
                  <h4 className="text-xl md:text-2xl font-bold font-heading text-white group-hover:text-gradient-accent transition-all duration-300">
                    {product.title}
                  </h4>
                </div>
                
                <div className="md:col-span-8">
                  <p className="text-muted-foreground text-lg mb-4">
                    {product.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full">Eğitimler</span>
                    <span className="text-sm text-foreground/80 py-1.5">
                      {product.trainings}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
