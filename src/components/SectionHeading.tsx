import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  link?: React.ReactNode;
  center?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  link,
  center = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 sm:mb-14 ${
        center ? "text-center mx-auto max-w-2xl" : "flex flex-col md:flex-row md:items-end md:justify-between gap-4"
      }`}
    >
      <div className={center ? "" : "max-w-2xl"}>
        {eyebrow && (
          <span className="eyebrow-tag mb-2.5 tracking-[0.2em]">
            {eyebrow}
          </span>
        )}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--ink)] leading-[1.12]">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-sm sm:text-base text-[var(--ink-muted)] font-light leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {link && <div className="shrink-0">{link}</div>}
    </div>
  );
}
