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
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8 mb-6 hover:shadow-lg transition-shadow duration-200">
      {section.title && (
        <h2 className="font-serif text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
          {section.title}
        </h2>
      )}
      {section.body && (
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          {section.body}
        </p>
      )}
      {section.quote && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-lg p-4 md:p-5 my-4">
          <blockquote className="text-base md:text-lg italic text-gray-800 leading-relaxed">
            {section.quote}
          </blockquote>
        </div>
      )}
      {section.bullets && section.bullets.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-4 md:p-5 mb-4">
          <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2 leading-relaxed">
            {section.bullets.map((b, i) => (
              <li key={i} className="leading-relaxed">
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}
      {section.subBullets?.map((sb, i) => (
        <div key={i} className="mt-4 bg-gray-50 rounded-lg p-4 md:p-5">
          {sb.label && (
            <p className="text-sm md:text-base font-semibold text-gray-900 mb-3">
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
