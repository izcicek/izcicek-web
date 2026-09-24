import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct, getCategory, getRelatedProducts, site } from "@/lib/content";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductGrid } from "@/components/ProductGrid";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowLeft, Check, ShieldCheck, Truck, Sparkles } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Ürün Bulunamadı",
    };
  }

  const category = getCategory(product.category);

  return {
    title: `${product.name} | ${site.brandName}`,
    description: product.description,
    alternates: {
      canonical: `/urunler/${product.slug}/`,
    },
    openGraph: {
      title: `${product.name} · ${site.brandName}`,
      description: product.description,
      images: [
        {
          url: product.images[0] || "/img/801883386_18097112135180817_3298097545919467918_n.jpg",
          width: 800,
          height: 1000,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const category = getCategory(product.category);
  const relatedProducts = getRelatedProducts(product.slug, product.category, 3);

  return (
    <div className="py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Gezinme yolu" className="flex items-center gap-2 text-xs text-[var(--ink-muted)] mb-8">
        <Link href="/" className="hover:text-[var(--ink)] transition-colors">
          Ana Sayfa
        </Link>
        <span>/</span>
        <Link href="/koleksiyonlar" className="hover:text-[var(--ink)] transition-colors">
          Koleksiyonlar
        </Link>
        {category && (
          <>
            <span>/</span>
            <span className="text-[var(--ink-muted)]">{category.name}</span>
          </>
        )}
        <span>/</span>
        <span className="text-[var(--ink)] font-medium truncate max-w-[200px]">
          {product.name}
        </span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-20 border-b border-[var(--line)]">
        
        {/* Gallery Column (6 cols) */}
        <div className="lg:col-span-6 lg:sticky lg:top-28">
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        {/* Info Column (6 cols) */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Header & Badges */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="eyebrow-tag">
                {category?.name || "Özel Tasarım"}
              </span>
              {product.isSample && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#EAE4D7] text-[10px] uppercase tracking-wider text-[var(--ink-muted)] font-medium border border-[rgba(41,43,37,0.06)]">
                  Örnek Tasarım
                </span>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--ink)] tracking-tight">
              {product.name}
            </h1>

            <p className="text-base text-[var(--ink-muted)] font-light leading-relaxed pt-2">
              {product.description}
            </p>

            {product.details && (
              <p className="text-sm text-[var(--ink-muted)] font-light leading-relaxed">
                {product.details}
              </p>
            )}
          </div>

          {/* WhatsApp / Inquiry Action */}
          <div className="pt-2">
            <WhatsAppButton productName={product.name} slug={product.slug} />
          </div>

          {/* Specifications Matrix (Anti-Slop 2x2 Card Grid instead of divide-y list) */}
          <div className="space-y-4 pt-4 border-t border-[var(--line)]">
            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--ink)]">
              Tasarım Özellikleri
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

              {product.material && (
                <div className="p-4 rounded-xl bg-white border border-[var(--line-subtle)] space-y-1">
                  <span className="text-[10.5px] uppercase tracking-wider text-[var(--green)] font-semibold block">
                    Kullanılan Malzemeler
                  </span>
                  <p className="text-sm font-medium text-[var(--ink)]">
                    {product.material}
                  </p>
                </div>
              )}

              {product.care && (
                <div className="p-4 rounded-xl bg-white border border-[var(--line-subtle)] space-y-1">
                  <span className="text-[10.5px] uppercase tracking-wider text-[var(--green)] font-semibold block">
                    Bakım Önerisi
                  </span>
                  <p className="text-xs text-[var(--ink-muted)] font-light leading-relaxed">
                    {product.care}
                  </p>
                </div>
              )}

              <div className="p-4 rounded-xl bg-white border border-[var(--line-subtle)] space-y-1">
                <span className="text-[10.5px] uppercase tracking-wider text-[var(--green)] font-semibold block">
                  Hazırlık Süresi
                </span>
                <p className="text-xs text-[var(--ink-muted)] font-light leading-relaxed">
                  Sipariş üzerine 2-4 iş gününde özenle hazırlanır.
                </p>
              </div>
            </div>
          </div>

          {/* Boutique Atelier Guarantees (Double-Bezel Box) */}
          <div className="double-bezel">
            <div className="double-bezel-inner p-5 bg-[#EFEAE0] space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
                <Sparkles className="w-4 h-4 text-[var(--green)]" />
                <span>İz Çiçek Atölye Güvencesi</span>
              </div>
              <ul className="text-xs text-[var(--ink-muted)] space-y-2 font-light">
                <li className="flex items-center gap-2.5">
                  <Check className="w-3.5 h-3.5 text-[var(--green)] shrink-0" />
                  <span>Tek tek elde tasarlanır; her form kendine özgü bir ruha sahiptir.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[var(--green)] shrink-0" />
                  <span>Birinci sınıf kalıcı yapay ve şoklanmış dokular; solmaz ve dökülmez.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Truck className="w-3.5 h-3.5 text-[var(--green)] shrink-0" />
                  <span>Özel korumalı kutusunda hasarsız teslimat garantisi ile kargolanır.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="pt-16 sm:pt-20">
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <div>
              <span className="eyebrow-tag">Diğer Seçenekler</span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[var(--ink)] mt-1">
                İlginizi Çekebilecek Benzer Tasarımlar
              </h2>
            </div>
            <Link
              href="/koleksiyonlar"
              className="text-xs uppercase tracking-[0.16em] font-medium text-[var(--ink)] hover:text-[var(--green)] transition-colors hidden sm:inline-block"
            >
              Tümünü Gör →
            </Link>
          </div>

          <ProductGrid items={relatedProducts} />
        </section>
      )}
    </div>
  );
}
