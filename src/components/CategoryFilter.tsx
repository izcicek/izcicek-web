"use client";

import { useMemo, useState } from "react";
import { categories, products } from "@/lib/content";
import { ProductGrid } from "@/components/ProductGrid";
import { Sparkles } from "lucide-react";

interface CategoryFilterProps {
  initialCategory?: string;
}

export function CategoryFilter({ initialCategory = "all" }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products;
    }
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Filter Tabs Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[var(--line)] pb-5">
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 shrink-0 active:scale-[0.98] flex items-center gap-2 ${
              selectedCategory === "all"
                ? "bg-[var(--ink)] text-white shadow-sm"
                : "bg-white/70 border border-[var(--line-subtle)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-white"
            }`}
          >
            <span>Tümü</span>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                selectedCategory === "all" ? "bg-white/20 text-white" : "bg-[var(--paper-soft)] text-[var(--ink-muted)]"
              }`}
            >
              {products.length}
            </span>
          </button>

          {categories.map((cat) => {
            const count = products.filter((p) => p.category === cat.slug).length;
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 shrink-0 active:scale-[0.98] flex items-center gap-2 ${
                  isSelected
                    ? "bg-[var(--ink)] text-white shadow-sm"
                    : "bg-white/70 border border-[var(--line-subtle)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-white"
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-[var(--paper-soft)] text-[var(--ink-muted)]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Count summary indicator */}
        <div className="text-xs text-[var(--ink-muted)] font-light flex items-center gap-1.5 self-end sm:self-auto">
          <Sparkles className="w-3.5 h-3.5 text-[var(--green)]" />
          <span>
            {filteredProducts.length} tasarım listeleniyor
          </span>
        </div>
      </div>

      {/* Grid */}
      <ProductGrid items={filteredProducts} priorityFirst={true} />
    </div>
  );
}
