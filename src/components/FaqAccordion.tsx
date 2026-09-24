"use client";

import { useState } from "react";
import type { FAQItem } from "@/types/content";
import { ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  items: FAQItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const id = `faq-${idx}`;

        return (
          <div key={idx} className="py-5 sm:py-6">
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              aria-controls={id}
              className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[var(--green)] rounded-md py-1"
            >
              <span className="font-serif text-xl sm:text-2xl text-[var(--ink)] pr-4 font-normal">
                {item.question}
              </span>
              <span
                className={`w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center shrink-0 text-[var(--ink)] transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-[#EDE7DC]" : "bg-transparent"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={id}
                role="region"
                className="pt-3 pr-6 sm:pr-12 text-sm sm:text-base text-[var(--ink-muted)] font-light leading-relaxed animate-fadeIn"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
