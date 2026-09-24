import categoriesData from "@/data/categories.json";
import productsData from "@/data/products.json";
import siteData from "@/data/site.json";
import type { Category, Product, SiteSettings } from "@/types/content";

export const categories: Category[] = (categoriesData as Category[]).map((cat) => ({
  ...cat,
  itemCount: (productsData as Product[]).filter((p) => p.category === cat.slug).length,
}));

export const products: Product[] = productsData as Product[];
export const site: SiteSettings = siteData as SiteSettings;

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentSlug: string, categorySlug: string, limit = 3): Product[] {
  const sameCategory = products.filter(
    (p) => p.category === categorySlug && p.slug !== currentSlug
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const others = products.filter(
    (p) => p.slug !== currentSlug && p.category !== categorySlug
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getWhatsAppNumber(phone: string): string {
  let clean = phone.replace(/\D/g, "");
  if (clean.startsWith("0")) {
    clean = "9" + clean;
  } else if (!clean.startsWith("90") && clean.length === 10) {
    clean = "90" + clean;
  }
  return clean;
}

export function buildWhatsAppUrl(productName: string, path: string): string | null {
  if (!site.phone || site.phone.trim() === "") {
    return null;
  }
  const cleanPhone = getWhatsAppNumber(site.phone);
  const pageUrl = site.domain ? `${site.domain.replace(/\/$/, "")}${path}` : path;
  const message = `Merhaba İz Çiçek, web sitenizdeki "${productName}" ürünü hakkında bilgi almak istiyorum:\n${pageUrl}`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function getInstagramDmUrl(productName?: string): string {
  // If no phone is provided, user can reach out via Instagram
  if (productName) {
    return `${site.instagram}?text=${encodeURIComponent(productName)}`;
  }
  return site.instagram;
}
