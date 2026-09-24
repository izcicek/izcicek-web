import type { Metadata } from "next";
import { CategoryFilter } from "@/components/CategoryFilter";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Koleksiyonlar & Katalog",
  description:
    "İz Çiçek Home butik çiçek koleksiyonlarını keşfedin. Masa üstü aranjmanlar, özel gün buketleri ve kalıcı çiçek tasarımları.",
  alternates: {
    canonical: "/koleksiyonlar/",
  },
  openGraph: {
    title: `Koleksiyonlar & Katalog | ${site.brandName}`,
    description: "Zarif, heykelsi ve kalıcı butik çiçek tasarımlarımızı inceleyin.",
  },
};

export default function CollectionsPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Intro Header */}
      <div className="max-w-2xl mb-12 sm:mb-16">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[var(--ink)] tracking-tight">
          Koleksiyonlar
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-muted)] font-light leading-relaxed">
          Yaşam alanınızda kendine özgü bir iz bırakacak formları keşfedin. Kategorilere göre filtreleyebilir, tasarımların ölçü ve malzeme detaylarını inceleyebilirsiniz.
        </p>
      </div>

      {/* Interactive Category Filter & Product Grid */}
      <CategoryFilter initialCategory="all" />
    </div>
  );
}
