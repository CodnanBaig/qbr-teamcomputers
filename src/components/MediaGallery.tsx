"use client";

import Image from "next/image";

function mediaSrc(folder: "day1" | "day2" | "day3", filename: string) {
  return `/qbr/${folder}/${encodeURIComponent(filename)}`;
}

export default function MediaGallery({
  images,
  videos,
  folder,
}: {
  images: string[];
  videos: string[];
  folder: "day1" | "day2" | "day3";
}) {
  const hasMedia = images.length > 0 || videos.length > 0;

  if (!hasMedia) return null;

  return (
    <div className="space-y-6">
      {images.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
            Photos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {images.map((file, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100"
              >
                <Image
                  src={mediaSrc(folder, file)}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {videos.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
            Videos
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {videos.map((file, i) => (
              <div
                key={i}
                className="relative aspect-video rounded-lg overflow-hidden bg-gray-100"
              >
                <video
                  src={mediaSrc(folder, file)}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
