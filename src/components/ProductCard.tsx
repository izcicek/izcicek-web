import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/content";
import { getCategory } from "@/lib/content";
import { ArrowUpRight, Layers } from "lucide-react";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const category = getCategory(product.category);
  const hasMultipleImages = product.images && product.images.length > 1;

  return (
    <Link
      href={`/urunler/${product.slug}`}
      className="group double-bezel flex flex-col focus:outline-none focus:ring-2 focus:ring-[var(--green)] hover:shadow-md hover:border-[rgba(41,43,37,0.18)]"
      aria-label={`${product.name} ürün detayını incele`}
    >
      {/* Product Image Inner Core Frame */}
      <div className="double-bezel-inner relative aspect-[4/5] w-full bg-[#EBE6DC] overflow-hidden">
        {/* Primary Image */}
        <Image
          src={product.images[0] || "/img/801883386_18097112135180817_3298097545919467918_n.jpg"}
          alt={`${product.name} - İz Çiçek butik aranjman`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />

        {/* Secondary Image on Hover (Crossfade transition) */}
        {hasMultipleImages && (
          <Image
            src={product.images[1]}
            alt={`${product.name} detay görünümü - İz Çiçek`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
        )}

        {/* Gradient Scrim for bottom depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Multiple Photos Badge Indicator */}
        {hasMultipleImages && (
          <div className="absolute top-3.5 right-3.5 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider text-white font-medium shadow-xs border border-white/15 flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
            <Layers className="w-2.5 h-2.5" />
            <span>+{product.images.length - 1}</span>
          </div>
        )}

        {/* Sample tag */}
        {product.isSample && (
          <div className="absolute top-3.5 left-3.5 bg-[#F7F4EE]/92 backdrop-blur-md px-2.5 py-1 rounded-full text-[9.5px] uppercase tracking-[0.16em] text-[var(--ink-muted)] font-medium shadow-xs border border-[rgba(41,43,37,0.08)]">
            Örnek Tasarım
          </div>
        )}

        {/* Hover Floating Action Pill */}
        <div className="absolute bottom-3.5 right-3.5 px-3 py-1.5 rounded-full bg-[#F7F4EE] text-[var(--ink)] flex items-center gap-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md">
          <span className="text-[10px] uppercase tracking-wider font-medium">İncele</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="p-3.5 sm:p-4 space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[10.5px] uppercase tracking-[0.16em] text-[var(--green)] font-semibold">
            {category?.name || "Özel Tasarım"}
          </span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl text-[var(--ink)] font-normal group-hover:text-[var(--green)] transition-colors line-clamp-2 leading-tight">
          {product.name}
        </h3>

        <p className="text-xs text-[var(--ink-muted)] line-clamp-2 font-light leading-relaxed">
          {product.description}
        </p>
      </div>
    </Link>
  );
}
