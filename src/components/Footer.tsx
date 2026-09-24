import Link from "next/link";
import { site, getWhatsAppNumber } from "@/lib/content";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function Footer() {
  return (
    <footer className="bg-[#21231E] text-[#E7E2D7] pt-16 sm:pt-20 pb-12 border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[rgba(255,255,255,0.1)]">
          
          {/* Brand Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.14em] font-light text-white">
                İZ ÇİÇEK
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A8AAA0] mt-0.5">
                home · butik çiçek atölyesi
              </span>
            </div>
            <p className="text-sm text-[#B4B6AC] max-w-md font-light leading-relaxed pt-2">
              Doğanın dingin formlarını, zarif renk geçişlerini ve zamansız çiçek kompozisyonlarını mekanlarınız için tek tek elde tasarlıyoruz.
            </p>
            <div className="pt-2">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[var(--sage)] hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>@izcicekhomee</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-white">
              Gezinme
            </h3>
            <ul className="space-y-2.5 text-sm text-[#B4B6AC] font-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/koleksiyonlar" className="hover:text-white transition-colors">
                  Koleksiyonlar & Katalog
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-white transition-colors">
                  Marka Hikâyemiz
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-white transition-colors">
                  İletişim & Özel Sipariş
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Studio Notes */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-white">
              Atölye & Sipariş
            </h3>
            <p className="text-sm text-[#B4B6AC] font-light leading-relaxed">
              Tüm tasarımlarımız butik olarak elde hazırlanır. Özel davet, nişan, ev dekorasyonu veya kurumsal projeleriniz için bize doğrudan ulaşabilirsiniz.
            </p>
            <div className="space-y-2 text-xs text-[#A8AAA0] pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[var(--sage)] shrink-0" />
                <span>{site.addressNote}</span>
              </div>
              {site.phone && (
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <a
                    href={`https://wa.me/${getWhatsAppNumber(site.phone)}?text=${encodeURIComponent(
                      "Merhaba İz Çiçek, web siteniz üzerinden bilgi almak istiyorum."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {site.phone}
                  </a>
                </div>
              )}
              {site.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[var(--sage)] shrink-0" />
                  <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                    {site.email}
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8D83] font-light">
          <div>
            © {new Date().getFullYear()} {site.brandName}. Tüm hakları saklıdır.
          </div>
          <div className="text-[11px] text-[#7A7D73] text-center sm:text-right">
            Tanıtım ve katalog amaçlı tasarlanmıştır. Siparişler WhatsApp ve Instagram üzerinden oluşturulur.
          </div>
        </div>
      </div>
    </footer>
  );
}
