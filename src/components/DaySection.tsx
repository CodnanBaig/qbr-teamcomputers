"use client";

import type { Day } from "@/data/qbr.types";
import SectionBlock from "./SectionBlock";
import MediaGallery from "./MediaGallery";

export default function DaySection({
  day,
  images,
  videos,
}: {
  day: Day;
  images: string[];
  videos: string[];
}) {
  const folder = `day${day.id}` as "day1" | "day2" | "day3";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Day Header - Boxed */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-lg p-6 md:p-8 mb-8 text-white">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
          {day.title}
        </h2>
        {day.subtitle && (
          <p className="text-base md:text-lg text-gray-200 mb-1">{day.subtitle}</p>
        )}
        {day.venue && (
          <p className="text-sm md:text-base text-gray-300">📍 Venue: {day.venue}</p>
        )}
      </div>

      {/* Content and Media Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Content Column */}
        <div className="lg:col-span-2 space-y-6">
          {day.sections.map((section, i) => (
            <SectionBlock key={i} section={section} />
          ))}
        </div>

        {/* Media Gallery Column */}
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <MediaGallery images={images} videos={videos} folder={folder} />
          </div>
        </div>
      </div>
    </div>
  );
}
