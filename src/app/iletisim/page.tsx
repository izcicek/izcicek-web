import type { Metadata } from "next";
import { site, getWhatsAppNumber } from "@/lib/content";
import { MessageCircle, MapPin, ArrowUpRight, Clock, Info } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export const metadata: Metadata = {
  title: "İletişim & Özel Sipariş",
  description:
    "İz Çiçek Home ile iletişime geçin. Özel tasarım kalıcı çiçek siparişi, atölye danışmanlığı ve sorularınız için bize ulaşın.",
  alternates: {
    canonical: "/iletisim/",
  },
};

export default function ContactPage() {
  const cleanPhone = site.phone ? getWhatsAppNumber(site.phone) : null;
  const waUrl = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
        "Merhaba İz Çiçek, özel tasarım çiçek aranjmanları hakkında bilgi almak istiyorum."
      )}`
    : null;

  return (
    <div className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Intro Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[var(--ink)] tracking-tight leading-[1.1]">
          Birlikte mekanınıza özel zarif bir form tasarlayalım
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-muted)] font-light leading-relaxed">
          Beğendiğiniz tasarımı, kullanım alanını veya aklınızdaki çiçek fikrini bizimle paylaşabilirsiniz. Her talebi özenle değerlendiriyoruz.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20">
        
        {/* Left Column: Direct Action Cards */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Instagram Card (Always Active) */}
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group double-bezel flex flex-col justify-between text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--green)] hover:shadow-md"
          >
            <div className="double-bezel-inner p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h2 className="font-serif text-xl sm:text-2xl text-[var(--ink)] font-normal group-hover:text-[var(--green)] transition-colors">
                    Instagram Doğrudan İletişim
                  </h2>
                  <p className="text-xs sm:text-sm text-[var(--ink-muted)] font-light">
                    Güncel çalışmalarımızı görün ve DM üzerinden hemen mesaj gönderin.
                  </p>
                  <span className="text-xs text-[var(--green)] font-semibold block pt-1">
                    {site.instagramHandle}
                  </span>
                </div>
              </div>
              <div className="mt-2 sm:mt-0 self-end sm:self-auto shrink-0 w-9 h-9 rounded-full bg-[#F7F4EE] flex items-center justify-center text-[var(--ink)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 shadow-xs">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </a>

          {/* WhatsApp Card (Conditional) */}
          {waUrl ? (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group double-bezel flex flex-col justify-between text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[#25D366] hover:shadow-md"
            >
              <div className="double-bezel-inner p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#EAF8EE]">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
                  </div>
                  <div className="space-y-1">
                    <h2 className="font-serif text-xl sm:text-2xl text-[var(--ink)] font-normal">
                      WhatsApp Danışma Hattı
                    </h2>
                    <p className="text-xs sm:text-sm text-[var(--ink-muted)] font-light">
                      Fotoğraf göndererek anında bilgi ve tasarım önerisi alın.
                    </p>
                    <span className="text-xs text-[#1EBE5D] font-semibold block pt-1">
                      {site.phone}
                    </span>
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 self-end sm:self-auto shrink-0 w-9 h-9 rounded-full bg-white flex items-center justify-center text-[var(--ink)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ) : (
            <div className="double-bezel">
              <div className="double-bezel-inner p-6 sm:p-8 bg-[#EFE9DF] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
                  <Info className="w-4 h-4 text-[var(--green)]" />
                  <span>WhatsApp Hattı Bilgisi</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--ink-muted)] font-light leading-relaxed">
                  İşletmenin resmi WhatsApp telefon numarası site ayarlarına (<code>src/data/site.json</code>) eklendiğinde doğrudan mesaj başlatan WhatsApp butonu burada aktifleşecektir. Şu aşamada tüm sipariş ve bilgi talepleri için Instagram hesabımız üzerinden doğrudan iletişime geçebilirsiniz.
                </p>
              </div>
            </div>
          )}


        </div>

        {/* Right Column: Studio Details & Ordering Guide */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="double-bezel">
            <div className="double-bezel-inner p-6 sm:p-8 bg-[#ECE7DD] space-y-6">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--ink)] font-normal">
                  Sipariş Nasıl İşler?
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[var(--ink-muted)] font-light leading-relaxed">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[var(--green)] mt-1 shrink-0" />
                  <div>
                    <strong className="font-medium text-[var(--ink)] block">Lokasyon & Gönderim</strong>
                    <p>{site.addressNote}. Tasarımlarımız tüm Türkiye’ye özel korumalı kutularda kargolanmaktadır.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[var(--green)] mt-1 shrink-0" />
                  <div>
                    <strong className="font-medium text-[var(--ink)] block">Hazırlık & Teslim Süresi</strong>
                    <p>Butik hazırlık süreci genellikle 2 ila 4 iş günüdür. Özel gün veya toplu etkinlik siparişleri için en az 10 gün öncesinden iletişime geçilmesi önerilir.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--line)] text-xs text-[var(--ink-muted)]">
                <p className="font-light">
                  * Ziyaretler ve atölye randevuları için lütfen önceden iletişime geçiniz.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
