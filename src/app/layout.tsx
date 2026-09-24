import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/content";

const serifFont = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F7F4EE",
};

export const metadata: Metadata = {
  title: {
    default: `${site.brandName} · ${site.brandTagline}`,
    template: `%s | ${site.brandName}`,
  },
  description:
    "İz Çiçek Home: Yaşam alanları, özel davetler ve hediyeler için özenle hazırlanan butik çiçek kompozisyonları ve kalıcı çiçek aranjmanları.",
  keywords: [
    "iz çiçek",
    "iz çiçek home",
    "butik çiçek",
    "kalıcı çiçek",
    "gelin buketi",
    "yapay çiçek aranjman",
    "masa üstü çiçek",
    "nişan çiçeği",
  ],
  authors: [{ name: site.brandName }],
  creator: site.brandName,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  ...(site.domain
    ? {
        metadataBase: new URL(site.domain),
        alternates: { canonical: "/" },
        openGraph: {
          type: "website",
          locale: "tr_TR",
          siteName: site.brandName,
          title: `${site.brandName} · ${site.brandTagline}`,
          description:
            "Yaşam alanları ve özel anlar için zarif, heykelsi ve kalıcı çiçek tasarımları.",
          images: [
            {
              url: "/img/801883386_18097112135180817_3298097545919467918_n.jpg",
              width: 1200,
              height: 630,
              alt: `${site.brandName} Koleksiyonu`,
            },
          ],
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-sans antialiased selection:bg-[var(--green)] selection:text-white flex flex-col justify-between">
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-[var(--ink)] focus:px-4 focus:py-2 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
          href="#icerik"
        >
          İçeriğe doğrudan atla
        </a>
        <Header />
        <main id="icerik" className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
