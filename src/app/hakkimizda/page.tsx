import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";
import { ArrowUpRight, Sparkles, Heart, Leaf, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda & Felsefemiz",
  description:
    "İz Çiçek Home’un butik tasarım felsefesi, kalıcı çiçek aranjmanları anlayışı ve atölye hikâyesi.",
  alternates: {
    canonical: "/hakkimizda/",
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Editorial Heading */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[var(--ink)] tracking-tight leading-[1.1]">
          Doğanın dingin inceliğini yaşam alanlarınıza taşıyoruz
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[var(--ink-muted)] font-light leading-relaxed">
          İz Çiçek Home, evlerde ve özel anlarda kalıcı bir zarafet izi bırakmak amacıyla kurulan butik bir çiçek tasarım atölyesidir.
        </p>
      </div>

      {/* Atelier Main Visual (Double-Bezel Frame) */}
      <div className="double-bezel mb-16">
        <div className="double-bezel-inner relative aspect-[16/9] sm:aspect-[21/9] w-full bg-[#E7E2D7]">
          <Image
            src={site.story.image}
            alt="İz Çiçek tasarım atölyesi"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-light">
            İz Çiçek Atölyesi · Butik Hazırlık ve Tasarım Masası
          </div>
        </div>
      </div>

      {/* Story Narrative & Values */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[var(--line)]">
        
        {/* Left column */}
        <div className="lg:col-span-5 space-y-4">
          <span className="eyebrow-tag">Tasarım Felsefesi</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--ink)] leading-snug">
            {site.story.title}
          </h2>
        </div>

        {/* Right column */}
        <div className="lg:col-span-7 space-y-6 text-base text-[var(--ink-muted)] font-light leading-relaxed">
          <p>
            Her evin, her odanın ve her kutlamanın kendine ait bir ışığı ve ritmi vardır. İz Çiçek olarak, fabrikasyon ve tekdüze kalıplardan uzaklaşarak doğanın en naif formlarını, kurutulmuş doğal dokuları ve birinci sınıf kalıcı çiçekleri bir araya getiriyoruz.
          </p>
          <p>
            Amacımız, canlı çiçeklerin sunduğu o tazeleyici ve ferah hissi, solup gitme kaygısı olmadan yaşam alanlarınızda daim kılmaktır. Özel seramik saksılarımız, el yapımı cam vazolarımız ve el boyaması dokularımızla her aranjmana bir heykel zarafeti kazandırıyoruz.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-white border border-[var(--line-subtle)] space-y-2">
              <Leaf className="w-5 h-5 text-[var(--green)]" />
              <h3 className="font-serif text-lg text-[var(--ink)] font-normal">Doğal & Kalıcı</h3>
              <p className="text-xs text-[var(--ink-muted)] font-light">
                Şoklanmış ve dayanıklı dokularla zamansız estetik.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[var(--line-subtle)] space-y-2">
              <Heart className="w-5 h-5 text-[var(--green)]" />
              <h3 className="font-serif text-lg text-[var(--ink)] font-normal">Tek Tek Elde</h3>
              <p className="text-xs text-[var(--ink-muted)] font-light">
                Her tasarım butik el işçiliğiyle özenle aranje edilir.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[var(--line-subtle)] space-y-2">
              <Shield className="w-5 h-5 text-[var(--green)]" />
              <h3 className="font-serif text-lg text-[var(--ink)] font-normal">Kişiye Özel</h3>
              <p className="text-xs text-[var(--ink-muted)] font-light">
                Mekanınızın renk ve ölçüsüne göre özelleştirme.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* CTA Box */}
      <div className="pt-16 sm:pt-20 text-center max-w-2xl mx-auto space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ink)]">
          Kendi hikâyenize eşlik edecek çiçeği birlikte seçelim
        </h2>
        <p className="text-sm sm:text-base text-[var(--ink-muted)] font-light">
          Koleksiyonlarımızı inceleyebilir veya istediğiniz vazo ve renkler için bizimle iletişime geçebilirsiniz.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/koleksiyonlar"
            className="group btn-island bg-[var(--ink)] text-white hover:bg-[var(--green-dark)] transition-colors shadow-sm"
          >
            <span>Koleksiyonları Keşfet</span>
            <span className="btn-icon-circle bg-white/10 text-white">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
          <Link
            href="/iletisim"
            className="group btn-island border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white transition-all duration-300"
          >
            <span>Bize Ulaşın</span>
            <span className="btn-icon-circle bg-[var(--ink)]/5 text-[var(--ink)] group-hover:bg-white/20 group-hover:text-white">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
