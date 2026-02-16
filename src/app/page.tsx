"use client";

import Book, { BookPage } from "@/components/Book";
import CoverPage from "@/components/CoverPage";
import PageContent from "@/components/PageContent";
import GalleryPage from "@/components/GalleryPage";
import { qbrData } from "@/data/qbr";
import { getSpreadSpecs, getSectionsForSpread } from "@/lib/spreads";

function buildPages() {
  const specs = getSpreadSpecs(qbrData);
  const day1 = qbrData.days[0];
  const day2 = qbrData.days[1];

  const contentPages = specs.map((spec) => {
    const sections = getSectionsForSpread(qbrData, spec);
    const day = qbrData.days[spec.dayIndex];
    return (
      <BookPage key={spec.label}>
        <PageContent
          sections={sections}
          dayLabel={spec.label}
          venue={day.venue}
        />
      </BookPage>
    );
  });

  return [
    <BookPage key="cover">
      <CoverPage />
    </BookPage>,
    ...contentPages,
    <BookPage key="gallery">
      <GalleryPage />
    </BookPage>,
  ];
}

const pages = buildPages();

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden flex items-center justify-center bg-[#e0d9ce]">
      <Book pages={pages} />
    </main>
  );
}
