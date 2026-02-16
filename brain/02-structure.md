# Project Structure

- `src/app/` – layout.tsx (minimal, fonts), page.tsx (builds pages, renders Book), globals.css.
- `src/components/` – Book.tsx (HTMLFlipBook wrapper, BookPage), CoverPage.tsx, PageContent.tsx, GalleryPage.tsx.
- `src/data/` – qbr.ts (full QBR content), qbr.types.ts, gallery.ts (image filenames for last page).
- `src/lib/` – spreads.ts (getSpreadSpecs, getSectionsForSpread).
- `public/qbr/day1/`, `public/qbr/day2/` – directories for user-added images (see README and gallery.ts).
