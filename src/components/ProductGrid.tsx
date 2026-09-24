import type { Product } from "@/types/content";
import { ProductCard } from "@/components/ProductCard";

interface ProductGridProps {
  items: Product[];
  priorityFirst?: boolean;
}

export function ProductGrid({ items, priorityFirst = false }: ProductGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-16 px-4 border border-dashed border-[var(--line)] rounded-2xl bg-[#F4EFE6]/50">
        <p className="font-serif text-2xl text-[var(--ink)]">Bu kategoride henüz tasarım bulunmuyor</p>
        <p className="text-sm text-[var(--ink-muted)] mt-2">
          Lütfen diğer kategorilerimizi inceleyin veya özel tasarım talebiniz için bizimle iletişime geçin.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12">
      {items.map((product, idx) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={priorityFirst && idx < 2}
        />
      ))}
    </div>
  );
}
