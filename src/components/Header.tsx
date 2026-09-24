"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";
import { ArrowUpRight, X } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa", index: "01", desc: "Öne çıkan tasarımlar & vitrin" },
  { href: "/koleksiyonlar", label: "Koleksiyonlar", index: "02", desc: "Masa üstü, vazo & buketler" },
  { href: "/hakkimizda", label: "Hakkımızda", index: "03", desc: "Felsefemiz & atölye hikâyemiz" },
  { href: "/iletisim", label: "İletişim", index: "04", desc: "Özel sipariş & danışmanlık" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        triggerRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#292B25] text-[#E5DFD3] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] py-2 px-4 text-center font-medium">
        <span>Butik çiçek atölyesi · Özel tasarım & kalıcı aranjmanlar</span>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 w-full bg-[#F7F4EE]/95 backdrop-blur-md border-b border-[var(--line)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex flex-col items-start"
            aria-label={`${site.brandName} ana sayfaya git`}
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.12em] font-normal text-[var(--ink)] group-hover:text-[var(--green)] transition-colors leading-none">
              İZ ÇİÇEK
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--ink-muted)] mt-1.5 font-sans">
              home · atölye
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Ana gezinme menüsü"
            className="hidden md:flex items-center space-x-8 lg:space-x-10"
          >
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors relative py-1 ${
                    isActive
                      ? "text-[var(--ink)] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[var(--green)]"
                      : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/iletisim"
              className="group btn-island border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white transition-all duration-300"
            >
              <span>İletişime Geç</span>
              <span className="btn-icon-circle bg-[var(--ink)]/5 text-[var(--ink)] group-hover:bg-white/20 group-hover:text-white">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Pill Button */}
          <button
            ref={triggerRef}
            type="button"
            className="md:hidden flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--line)] bg-white/70 hover:bg-white text-[var(--ink)] active:scale-95 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-modal"
            aria-label="Gezinme menüsünü aç"
          >
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium pl-0.5 text-[var(--ink)]">
              Menü
            </span>
            <div className="w-4 h-3 flex flex-col justify-between items-end py-0.5" aria-hidden="true">
              <span className="w-4 h-[1.5px] bg-[var(--ink)] rounded-full" />
              <span className="w-2.5 h-[1.5px] bg-[var(--ink)] rounded-full" />
            </div>
          </button>
        </div>
      </header>

      {/* Accessible Mobile Menu Modal (Full-Screen Editorial Overlay) */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil gezinme menüsü"
          className="fixed inset-0 z-50 md:hidden flex flex-col bg-[#F7F4EE] animate-fadeIn"
          ref={menuRef}
        >
          {/* Menu Top Bar */}
          <div className="h-20 px-4 sm:px-6 flex items-center justify-between border-b border-[var(--line)] bg-[#F7F4EE] shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex flex-col items-start"
              aria-label={`${site.brandName} ana sayfaya git`}
            >
              <span className="font-serif text-2xl tracking-[0.12em] font-normal text-[var(--ink)] leading-none">
                İZ ÇİÇEK
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--ink-muted)] mt-1.5 font-sans">
                home · atölye
              </span>
            </Link>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                triggerRef.current?.focus();
              }}
              aria-label="Menüyü kapat"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--line)] bg-white/80 hover:bg-white text-[var(--ink)] active:scale-95 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
            >
              <span className="text-[11px] uppercase tracking-[0.18em] font-medium pl-0.5 text-[var(--ink-muted)]">
                Kapat
              </span>
              <div className="w-5 h-5 rounded-full bg-[var(--ink)]/5 flex items-center justify-center">
                <X className="w-3.5 h-3.5 text-[var(--ink)]" />
              </div>
            </button>
          </div>

          {/* Scrollable Navigation Body */}
          <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Category / Nav Indicator */}
              <div className="flex items-center justify-between pb-2 border-b border-[var(--line-subtle)]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--ink-muted)] font-medium">
                  Gezinme
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--ink-subtle)]">
                  {site.brandName}
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col divide-y divide-[var(--line-subtle)]" aria-label="Mobil gezinme bağlantıları">
                {NAV_LINKS.map(({ href, label, index, desc }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group py-3.5 flex items-center justify-between transition-colors ${
                        isActive
                          ? "text-[var(--green)]"
                          : "text-[var(--ink)] hover:text-[var(--green)]"
                      }`}
                    >
                      <div className="flex items-baseline gap-3.5">
                        <span
                          className={`text-xs font-mono tracking-widest ${
                            isActive
                              ? "text-[var(--green)] font-semibold"
                              : "text-[var(--ink-subtle)] group-hover:text-[var(--green)]"
                          }`}
                        >
                          {index}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-2xl tracking-wide leading-snug">
                              {label}
                            </span>
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] shrink-0" />
                            )}
                          </div>
                          <span className="text-xs text-[var(--ink-muted)] block font-sans font-light mt-0.5">
                            {desc}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-[var(--green)] text-white shadow-xs"
                            : "bg-white/80 border border-[var(--line-subtle)] text-[var(--ink-muted)] group-hover:bg-[var(--green-light)] group-hover:text-[var(--green-dark)]"
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </Link>
                  );
                })}
              </nav>

              {/* Atelier Note Card */}
              <div className="p-4 rounded-2xl bg-white/70 border border-[var(--line-subtle)] shadow-xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--green-dark)]">
                    Kişiye Özel Butik Tasarım
                  </span>
                </div>
                <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                  Yaşam alanınızın ışığına ve zevkinize uygun el yapımı kalıcı çiçek kompozisyonları.
                </p>
              </div>
            </div>

            {/* Bottom Actions & Contact */}
            <div className="pt-6 mt-6 border-t border-[var(--line)] flex flex-col gap-3">
              {/* Instagram Button */}
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[var(--ink)] text-[#F7F4EE] hover:bg-[var(--green-dark)] active:scale-[0.99] transition-all shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <InstagramIcon className="w-4 h-4 text-[#E5DFD3]" />
                  <span className="text-xs tracking-wider uppercase font-medium">
                    Instagram {site.instagramHandle}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#E5DFD3]" />
              </a>

              {/* Koleksiyonlar Button */}
              <Link
                href="/koleksiyonlar"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl border border-[var(--line)] bg-white/70 hover:bg-white text-[var(--ink)] text-xs uppercase tracking-[0.16em] font-medium transition-colors active:scale-[0.99]"
              >
                Tüm Koleksiyonları Keşfet
              </Link>

              {/* Location and Info */}
              <div className="flex items-center justify-between text-[11px] text-[var(--ink-subtle)] pt-1 px-0.5 font-light">
                <span>{site.addressNote}</span>
                <span>Kalıcı Tasarımlar</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
