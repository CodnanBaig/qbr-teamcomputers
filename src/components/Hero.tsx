"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Cover Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/WhatsApp Image 2026-02-16 at 16.08.49.jpeg"
          alt="TDE-BMG Team Photo"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
          TDE-BMG 2026
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-2 drop-shadow-md">Tattva Hills</p>
        <p className="text-sm md:text-base text-gray-200 uppercase tracking-widest drop-shadow-md">
          Business Management & Growth Review
        </p>
      </div>
    </div>
  );
}
