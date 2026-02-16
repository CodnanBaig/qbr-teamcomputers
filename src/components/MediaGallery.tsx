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
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 md:p-6">
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
            📸 Photos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((file, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-200"
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
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 md:p-6">
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
            🎥 Videos
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {videos.map((file, i) => (
              <div
                key={i}
                className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <video
                  src={mediaSrc(folder, file)}
                  controls
                  muted
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
