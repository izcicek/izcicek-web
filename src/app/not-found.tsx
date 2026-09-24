import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[65vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md space-y-6">
        <span className="eyebrow-tag">Sayfa Bulunamadı</span>
        <h1 className="font-serif text-5xl sm:text-6xl text-[var(--ink)] font-normal">
          404
        </h1>
        <p className="text-base text-[var(--ink-muted)] font-light leading-relaxed">
          Aradığınız sayfa taşınmış veya artık mevcut olmayabilir. Butik çiçek koleksiyonlarımızı keşfetmek için ana sayfaya dönebilirsiniz.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--ink)] text-white text-xs uppercase tracking-[0.16em] font-medium hover:bg-[var(--green-dark)] transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ana Sayfaya Dön</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
