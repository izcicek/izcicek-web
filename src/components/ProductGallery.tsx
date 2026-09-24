"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] || images[0] || "/img/801883386_18097112135180817_3298097545919467918_n.jpg";

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Frame */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#EBE6DC] shadow-sm border border-[rgba(41,43,37,0.06)]">
        <Image
          src={activeImage}
          alt={`${productName} detay fotoğrafı`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails if more than 1 image */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1" role="tablist" aria-label="Ürün fotoğrafları">
          {images.map((img, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`${productName} fotoğraf ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className={`relative w-20 h-24 rounded-lg overflow-hidden shrink-0 border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--green)] ${
                  isSelected
                    ? "border-[var(--ink)] scale-[1.02] shadow-xs"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${productName} önizleme ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
