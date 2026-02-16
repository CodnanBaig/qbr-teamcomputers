"use client";

import type { Section } from "@/data/qbr.types";

const PAGE_PADDING = "p-3 sm:p-4 md:p-6 lg:p-8";

function SectionBlock({ section }: { section: Section }) {
  const hasContent =
    section.title ||
    section.body ||
    (section.bullets && section.bullets.length > 0) ||
    section.quote ||
    (section.subBullets && section.subBullets.length > 0);

  if (!hasContent) return null;

  return (
    <div className="mb-3 sm:mb-6 last:mb-0">
      {section.title && (
        <h2 className="font-serif text-sm sm:text-base md:text-lg font-semibold text-ink mb-1.5 sm:mb-2 border-b border-paper-dark/40 pb-1 leading-tight">
          {section.title}
        </h2>
      )}
      {section.body && (
        <p className="text-[11px] sm:text-xs md:text-sm text-ink leading-relaxed mb-2 sm:mb-3">
          {section.body}
        </p>
      )}
      {section.quote && (
        <blockquote className="text-[11px] sm:text-xs md:text-sm italic text-ink-muted border-l-2 border-ink-muted/50 pl-2 sm:pl-3 md:pl-4 my-1.5 sm:my-2 leading-relaxed">
          {section.quote}
        </blockquote>
      )}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="list-disc list-inside text-[11px] sm:text-xs md:text-sm text-ink space-y-0.5 sm:space-y-1 mb-2 leading-relaxed">
          {section.bullets.map((b, i) => (
            <li key={i} className="leading-relaxed">
              {b}
            </li>
          ))}
        </ul>
      )}
      {section.subBullets?.map((sb, i) => (
        <div key={i} className="mt-1.5 sm:mt-2 ml-1 sm:ml-2">
          {sb.label && (
            <p className="text-[11px] sm:text-xs md:text-sm font-medium text-ink mb-0.5 sm:mb-1 leading-tight">
              {sb.label}
            </p>
          )}
          {sb.items.length > 0 && (
            <ul className="list-disc list-inside text-[11px] sm:text-xs md:text-sm text-ink space-y-0.5 leading-relaxed">
              {sb.items.map((item, j) => (
                <li key={j} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default function PageContent({
  sections,
  dayLabel,
  venue,
}: {
  sections: Section[];
  dayLabel?: string;
  venue?: string;
}) {
  return (
    <div
      className={`w-full h-full overflow-y-auto ${PAGE_PADDING} paper-texture text-ink`}
    >
      {dayLabel && (
        <div className="mb-2 sm:mb-3 md:mb-4 pb-1 sm:pb-1.5 md:pb-2 border-b border-paper-dark/50">
          <p className="font-accent text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-ink-muted">
            {dayLabel}
          </p>
          {venue && (
            <p className="text-[9px] sm:text-[10px] md:text-xs text-ink-muted mt-0.5">{venue}</p>
          )}
        </div>
      )}
      <div className="space-y-1">
        {sections.map((section, i) => (
          <SectionBlock key={i} section={section} />
        ))}
      </div>
    </div>
  );
}
