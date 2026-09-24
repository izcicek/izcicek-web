import { site, buildWhatsAppUrl } from "@/lib/content";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

interface WhatsAppButtonProps {
  productName: string;
  slug: string;
}

export function WhatsAppButton({ productName, slug }: WhatsAppButtonProps) {
  const path = `/urunler/${slug}/`;
  const waUrl = buildWhatsAppUrl(productName, path);

  if (waUrl) {
    return (
      <div className="space-y-2.5">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full inline-flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#25D366] text-white font-medium hover:bg-[#1EBE5D] transition-all duration-300 shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            </div>
            <div className="text-left">
              <span className="block text-sm sm:text-base font-semibold tracking-wide leading-tight">
                WhatsApp’tan Fiyat & Bilgi Al
              </span>
              <span className="block text-xs text-white/90 font-light mt-0.5">
                Ürün adı ve sayfa bağlantısıyla tek tıkla mesaj başlatın
              </span>
            </div>
          </div>
          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </span>
        </a>
        <p className="text-[11px] text-[var(--ink-muted)] text-center font-light">
          Tıklandığında ürün bilgisiyle WhatsApp sohbeti açılır. Mesajı siz gönderirsiniz.
        </p>
      </div>
    );
  }

  // If site.phone is not yet configured, provide Instagram consultation button with honest note
  return (
    <div className="space-y-3">
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full inline-flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[var(--ink)] text-white font-medium hover:bg-[var(--green-dark)] transition-all duration-300 shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[var(--green)] focus:ring-offset-2"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <InstagramIcon className="w-5 h-5 text-[#E5DFD3]" />
          </div>
          <div className="text-left">
            <span className="block text-sm sm:text-base font-semibold tracking-wide leading-tight">
              Instagram DM ile Danışın
            </span>
            <span className="block text-xs text-white/80 font-light mt-0.5">
              @{site.instagramHandle.replace("@", "")} doğrudan mesaj gönderin
            </span>
          </div>
        </div>
        <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </span>
      </a>
      <div className="p-3.5 bg-[#EFEAE0] border border-[var(--line-subtle)] rounded-xl text-xs text-[var(--ink-muted)] leading-relaxed">
        <span className="font-semibold text-[var(--ink)]">İletişim Bilgisi:</span> İşletmenin resmi WhatsApp sipariş numarası eklendiğinde bu alanda otomatik hazır mesajlı WhatsApp butonu devrede olacaktır.
      </div>
    </div>
  );
}
