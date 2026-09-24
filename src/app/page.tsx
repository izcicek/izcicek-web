import Image from "next/image";
import Link from "next/link";
import { categories, products, site } from "@/lib/content";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ArrowUpRight, CheckCircle2, Sparkles, Feather, Layers, Compass } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);
  const primaryCategory = categories[0];
  const secondaryCategories = categories.slice(1);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Asymmetric, Left-Anchored Editorial Layout) */}
      <section className="relative min-h-[84vh] sm:min-h-[88vh] flex items-center overflow-hidden bg-[#242620] text-white">
        {/* Background Image with directional gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src={site.hero.image}
            alt="İz Çiçek butik çiçek tasarımı"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
          {/* Asymmetric gradient for WCAG AA text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E201A]/95 via-[#1E201A]/70 to-transparent sm:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E201A] via-transparent to-black/20" />
        </div>

        {/* Hero Content - Left Anchored */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="max-w-2xl text-left">
            {/* Live Atelier Status Badge */}
            
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#FDFBF7] tracking-tight leading-[1.05]">
              {site.hero.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#E7E2D7] font-light leading-relaxed max-w-xl">
              {site.hero.description}
            </p>

            {/* CTAs with Button-in-Button Trailing Icon Architecture */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/koleksiyonlar"
                className="group btn-island bg-[#F7F4EE] text-[var(--ink)] hover:bg-white shadow-lg whitespace-nowrap"
              >
                <span>{site.hero.ctaText}</span>
                <span className="btn-icon-circle bg-[var(--ink)] text-[#F7F4EE] group-hover:bg-[var(--green-dark)]">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <Link
                href="/iletisim"
                className="group btn-island bg-black/20 backdrop-blur-md text-white border border-white/25 hover:bg-white/15 whitespace-nowrap"
              >
                <span>Özel Tasarım Danışmanlığı</span>
                <span className="btn-icon-circle bg-white/10 text-white group-hover:bg-white/20">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY VITRINE (Asymmetrical Curated Bento Grid - Anti-Symmetry Variance) */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading
          title="Her anın kendine özgü bir çiçek ritmi var"
          description="Eviniz, çalışma masanız ve özel anlarınız için özenle gruplandırılmış zamansız kompozisyonlar."
          link={
            <Link
              href="/koleksiyonlar"
              className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium text-[var(--ink)] hover:text-[var(--green)] transition-colors whitespace-nowrap"
            >
              <span>Tüm Kataloğu İncele</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          }
        />

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Primary Flagship Category (7 Columns) */}
          {primaryCategory && (
            <Link
              href="/koleksiyonlar"
              className="group lg:col-span-7 double-bezel relative h-[480px] sm:h-[560px] flex flex-col justify-end text-white focus:outline-none focus:ring-2 focus:ring-[var(--green)] hover:shadow-xl"
            >
              <div className="double-bezel-inner w-full h-full relative p-6 sm:p-10 flex flex-col justify-end">
                <Image
                  src={primaryCategory.image}
                  alt={`${primaryCategory.name} koleksiyonu`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />

                {/* Layered Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="relative z-10 space-y-2.5 max-w-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#EFEAE0] bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-medium border border-white/20">
                      Vitrin Seçkisi · {primaryCategory.itemCount} Tasarım
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal group-hover:translate-x-1 transition-transform duration-400">
                    {primaryCategory.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#E7E2D6] font-light leading-relaxed">
                    {primaryCategory.description}
                  </p>

                  <div className="pt-3">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[var(--sage)] font-medium">
                      <span>Koleksiyonu Keşfet</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Secondary Categories Stacked (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {secondaryCategories.map((cat) => (
              <Link
                key={cat.id}
                href="/koleksiyonlar"
                className="group double-bezel relative h-[230px] sm:h-[264px] flex flex-col justify-end text-white focus:outline-none focus:ring-2 focus:ring-[var(--green)] hover:shadow-lg"
              >
                <div className="double-bezel-inner w-full h-full relative p-5 sm:p-7 flex flex-col justify-end">
                  <Image
                    src={cat.image}
                    alt={`${cat.name} koleksiyonu`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />

                  {/* Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                  <div className="relative z-10 space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#DCD7CB] bg-black/30 backdrop-blur-xs px-2.5 py-0.5 rounded-full inline-block mb-1 border border-white/10">
                      {cat.itemCount} Tasarım
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal group-hover:translate-x-1 transition-transform duration-400">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#E5DFD3] font-light leading-relaxed line-clamp-1">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS (Refined double-bezel grid) */}
      <section className="py-20 sm:py-28 bg-[#F0ECE3] border-y border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Öne Çıkan Butik Tasarımlar"
            description="Atölyemizde en çok ilgi gören ve mekanlara dingin bir asalet katan özgün formlar."
            link={
              <Link
                href="/koleksiyonlar"
                className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium text-[var(--ink)] hover:text-[var(--green)] transition-colors whitespace-nowrap"
              >
                <span>Tüm Ürünleri Gör</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            }
          />

          <ProductGrid items={featuredProducts} priorityFirst={false} />

          <div className="mt-14 sm:mt-16 text-center">
            <Link
              href="/koleksiyonlar"
              className="group btn-island border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white transition-all duration-300 shadow-xs"
            >
              <span>Kataloğun Tamamını İncele ({products.length} Tasarım)</span>
              <span className="btn-icon-circle bg-[var(--ink)]/5 text-[var(--ink)] group-hover:bg-white/20 group-hover:text-white">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. BRAND STORY & CRAFTSMANSHIP (Editorial Split with Artisanal Pillars) */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Story Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow-tag">{site.story.eyebrow}</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--ink)] leading-[1.12]">
              {site.story.title}
            </h2>
            <p className="text-base text-[var(--ink-muted)] font-light leading-relaxed">
              {site.story.description}
            </p>
            {site.story.secondaryText && (
              <p className="text-sm text-[var(--ink-muted)] font-light leading-relaxed border-l-2 border-[var(--green)] pl-4">
                {site.story.secondaryText}
              </p>
            )}

            {/* Artisanal Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/60 border border-[var(--line-subtle)] space-y-1.5">
                <Feather className="w-4 h-4 text-[var(--green)]" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
                  Özgün İşçilik
                </h3>
                <p className="text-[11px] text-[var(--ink-muted)] font-light">
                  Tek tek elde seçilen dokular.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/60 border border-[var(--line-subtle)] space-y-1.5">
                <Layers className="w-4 h-4 text-[var(--green)]" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
                  Kalıcı Form
                </h3>
                <p className="text-[11px] text-[var(--ink-muted)] font-light">
                  Solmayan, yıllarca süren estetik.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/60 border border-[var(--line-subtle)] space-y-1.5">
                <Compass className="w-4 h-4 text-[var(--green)]" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
                  Mekana Özel
                </h3>
                <p className="text-[11px] text-[var(--ink-muted)] font-light">
                  Renk ve boyut danışmanlığı.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/hakkimizda"
                className="group btn-island bg-[var(--ink)] text-white hover:bg-[var(--green-dark)] transition-colors shadow-sm"
              >
                <span>Hikâyemizi Okuyun</span>
                <span className="btn-icon-circle bg-white/10 text-white">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link
                href="/iletisim"
                className="text-xs uppercase tracking-[0.16em] font-medium text-[var(--ink)] hover:text-[var(--green)] transition-colors"
              >
                Bize Ulaşın →
              </Link>
            </div>
          </div>

          {/* Double-Bezel Framed Atelier Photo */}
          <div className="lg:col-span-6">
            <div className="double-bezel">
              <div className="double-bezel-inner relative aspect-[4/3] sm:aspect-[14/11] bg-[#E7E2D7]">
                <Image
                  src={site.story.image}
                  alt="İz Çiçek atölye hazırlık süreci"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-light">
                  İz Çiçek Atölyesi · Detay Çalışması
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (Architectural Progression Timeline - Non-Repeating Layout Family) */}
      <section className="py-20 sm:py-28 bg-[#4A5442] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
              Fikirden Yaşam Alanınıza Uzanan Süreç
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#DDE2D6] font-light leading-relaxed">
              Her çiçek tasarımı, sizin zevkiniz ve mekanınızın ruhu doğrultusunda 4 özenli aşamadan geçer.
            </p>
          </div>

          {/* Architectural Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {site.process.map((step, idx) => {
              const roman = ["I", "II", "III", "IV"][idx] || String(idx + 1);
              return (
                <div
                  key={step.title}
                  className="relative flex flex-col justify-between pt-6 border-t border-white/20 group hover:border-white/60 transition-colors"
                >
                  <div>
                    <span className="font-serif text-2xl text-white/50 block mb-3 group-hover:text-white transition-colors">
                      {roman}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E2E6DC] font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="pt-6 flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#D3D9CC]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C4CDBC]" />
                    <span>Özenli Adım</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SIKÇA SORULAN SORULAR (FAQ Accordion) */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading
          center
          title="Sıkça Sorulan Sorular"
          description="Kalıcı çiçek tasarımlarımız, malzeme kalitesi ve sipariş süreçleri hakkında bilmek istedikleriniz."
        />

        <FaqAccordion items={site.faqs} />
      </section>

      {/* 7. INSTAGRAM FEED SHOWCASE (Curated Visual Mosaic) */}
      <section className="py-20 sm:py-28 bg-[#ECE7DC] border-t border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--ink)]">
                İlhamın İzini Instagram’da Sürün
              </h2>
              <p className="text-sm text-[var(--ink-muted)] mt-2 font-light">
                Güncel çalışmalarımız, atölye günlüğü ve yeni tasarımlarımız için bizi takip edin.
              </p>
            </div>

            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-island bg-[var(--ink)] text-white hover:bg-[var(--green-dark)] self-start md:self-auto shadow-xs whitespace-nowrap"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>{site.instagramHandle} Takip Et</span>
              <span className="btn-icon-circle bg-white/10 text-white">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>

          {/* Instagram Post Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {site.instagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group double-bezel aspect-square focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
                aria-label={`Instagram'da ${post.caption} gönderisini aç`}
              >
                <div className="double-bezel-inner w-full h-full relative bg-[#DDD8CD]">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white text-xs">
                    <InstagramIcon className="w-5 h-5 mb-1 text-white" />
                    <span className="font-light line-clamp-2">{post.caption}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
