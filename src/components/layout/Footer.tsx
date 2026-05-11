"use client";

import Image from "next/image";
import { Mail, MapPin, Linkedin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 rounded-[100%] blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.avif"
                  alt="Neuroxon Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg tracking-tight text-white leading-none">
                  NEUROXON
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Executive Brain Risk Management. <br />
              Şirketleri ölçülebilir, tasarlanabilir ve yönetilebilir bir beyin sistemi olarak ele alıyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold font-heading mb-6">Keşfet</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">Kimiz Biz?</a></li>
              <li><a href="#protocol" className="text-sm text-muted-foreground hover:text-accent transition-colors">M.I.N.D. Protocol</a></li>
              <li><a href="#corporate" className="text-sm text-muted-foreground hover:text-accent transition-colors">Kurumsal Ürün Mimarisi</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold font-heading mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@neuroxoninstitute.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-white transition-colors group">
                  <Mail size={16} className="text-accent group-hover:scale-110 transition-transform" />
                  info@neuroxoninstitute.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold font-heading mb-6">Bağlantılar</h4>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm transition-all group"
            >
              <Linkedin size={16} className="text-[#0077B5]" />
              LinkedIn'de Takip Edin
              <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Neuroxon Institute. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
