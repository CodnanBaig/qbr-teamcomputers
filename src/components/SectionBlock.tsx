"use client";

import type { Section } from "@/data/qbr.types";

export default function SectionBlock({ section }: { section: Section }) {
  const hasContent =
    section.title ||
    section.body ||
    (section.bullets && section.bullets.length > 0) ||
    section.quote ||
    (section.subBullets && section.subBullets.length > 0);

  if (!hasContent) return null;

  return (
    <div className="mb-6 last:mb-0">
      {section.title && (
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-2">
          {section.title}
        </h2>
      )}
      {section.body && (
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          {section.body}
        </p>
      )}
      {section.quote && (
        <blockquote className="text-base md:text-lg italic text-gray-600 border-l-4 border-gray-300 pl-4 my-4 leading-relaxed">
          {section.quote}
        </blockquote>
      )}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2 mb-4 leading-relaxed">
          {section.bullets.map((b, i) => (
            <li key={i} className="leading-relaxed">
              {b}
            </li>
          ))}
        </ul>
      )}
      {section.subBullets?.map((sb, i) => (
        <div key={i} className="mt-4 ml-4">
          {sb.label && (
            <p className="text-sm md:text-base font-semibold text-gray-900 mb-2">
              {sb.label}
            </p>
          )}
          {sb.items.length > 0 && (
            <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1.5 leading-relaxed">
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
