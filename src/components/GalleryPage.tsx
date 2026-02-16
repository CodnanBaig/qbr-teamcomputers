"use client";

import Image from "next/image";
import {
  day1ImageFiles,
  day1VideoFiles,
  day2ImageFiles,
  day2VideoFiles,
  day3ImageFiles,
  day3VideoFiles,
} from "@/data/gallery";

const PAGE_PADDING = "p-3 sm:p-4 md:p-6 lg:p-8";

function mediaSrc(folder: "day1" | "day2" | "day3", filename: string) {
  return `/qbr/${folder}/${encodeURIComponent(filename)}`;
}

function ImageGrid({
  title,
  files,
  folder,
}: {
  title: string;
  files: string[];
  folder: "day1" | "day2" | "day3";
}) {
  const hasImages = files.length > 0;

  return (
    <div className="mb-8 last:mb-0">
      <h2 className="font-serif text-sm sm:text-base md:text-lg font-semibold text-ink mb-1.5 sm:mb-2 md:mb-4 border-b border-paper-dark/40 pb-1 sm:pb-1.5 md:pb-2">
        {title}
      </h2>
      {hasImages ? (
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
          {files.map((file, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded overflow-hidden bg-paper-dark/30 w-full"
            >
              <Image
                src={mediaSrc(folder, file)}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 240px) 100vw, 240px"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <div className="aspect-[4/3] rounded bg-paper-dark/40 border border-paper-dark/50 flex items-center justify-center">
            <span className="text-[10px] sm:text-xs md:text-sm text-ink-muted text-center px-1.5 sm:px-2">
              {folder === "day1" ? "Day 1 – Tattva Hills" : folder === "day2" ? "Day 2 – Sessions" : "Day 3 – Consolidation"}
            </span>
          </div>
          <div className="aspect-[4/3] rounded bg-paper-dark/40 border border-paper-dark/50 flex items-center justify-center">
            <span className="text-[10px] sm:text-xs md:text-sm text-ink-muted text-center px-1.5 sm:px-2">
              Add images in public/qbr/{folder}/
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function VideoGrid({
  title,
  files,
  folder,
}: {
  title: string;
  files: string[];
  folder: "day1" | "day2" | "day3";
}) {
  if (files.length === 0) return null;

  return (
    <div className="mb-6 last:mb-0">
      <h3 className="font-serif text-xs sm:text-sm md:text-base font-semibold text-ink mb-1.5 sm:mb-2 border-b border-paper-dark/30 pb-0.5 sm:pb-1">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
        {files.map((file, i) => (
          <div
            key={i}
            className="relative aspect-video rounded overflow-hidden bg-paper-dark/30 w-full"
          >
            <video
              src={mediaSrc(folder, file)}
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div
      className={`w-full h-full overflow-y-auto ${PAGE_PADDING} paper-texture text-ink`}
    >
      <div className="mb-3 sm:mb-6 pb-1.5 sm:pb-2 border-b border-paper-dark/50">
        <p className="font-accent text-[10px] sm:text-xs uppercase tracking-widest text-ink-muted">
          Memories
        </p>
        <h1 className="font-serif text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-ink mt-0.5 sm:mt-1">
          Day 1, Day 2 &amp; Day 3
        </h1>
      </div>
      <ImageGrid
        title="Day 1 – Tattva Hills (Photos)"
        files={day1ImageFiles}
        folder="day1"
      />
      <VideoGrid
        title="Day 1 – Videos"
        files={day1VideoFiles}
        folder="day1"
      />
      <ImageGrid
        title="Day 2 – Sessions &amp; Dinner (Photos)"
        files={day2ImageFiles}
        folder="day2"
      />
      <VideoGrid
        title="Day 2 – Videos"
        files={day2VideoFiles}
        folder="day2"
      />
      <ImageGrid
        title="Day 3 – Consolidation &amp; Celebration (Photos)"
        files={day3ImageFiles}
        folder="day3"
      />
      <VideoGrid
        title="Day 3 – Videos"
        files={day3VideoFiles}
        folder="day3"
      />
    </div>
  );
}
