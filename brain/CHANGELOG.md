# Changelog

All notable changes to the TDE-BMG Website project are documented here.

## [0.1.0] - 2025-02-16

### Added

- **v0.1.0-scaffold** – Next.js 15 (App Router), TypeScript, Tailwind CSS, pnpm. Single route `/`, full-viewport layout, no navbar or footer.
- **v0.1.0-content** – Structured QBR data in `src/data/qbr.ts` and `src/data/qbr.types.ts` with full Day 1 and Day 2 content from shrishti.txt. Spread mapping in `src/lib/spreads.ts` (Day 1: 3 spreads, Day 2: 2 spreads).
- **v0.1.0-book** – Flip-book shell using `react-pageflip` (HTMLFlipBook) and `framer-motion`. `Book.tsx` with `BookPage` (forwardRef), configurable page dimensions, showCover, keyboard (ArrowLeft/ArrowRight) support.
- **v0.1.0-cover-content** – `CoverPage.tsx` (title, venue, keynote) and `PageContent.tsx` (section titles, body, bullets, quotes, subBullets). All QBR sections rendered by spread.
- **v0.1.0-gallery** – `GalleryPage.tsx` as last page. Reads image filenames from `src/data/gallery.ts`; serves from `public/qbr/day1/` and `public/qbr/day2/`. Placeholder cards when no images.
- **v0.1.0-styling** – Diary aesthetic: paper texture (CSS), Cormorant Garamond + DM Sans, cream/ink colors, book drop-shadow, inner page border. Framer Motion entrance on book and cover text.
- **v0.1.0-polish** – Keyboard navigation in Book, no navbar/footer in layout. README with pnpm commands and image instructions. Brain folder and this CHANGELOG.

### Notes

- Images: add files to `public/qbr/day1/` and `public/qbr/day2/`, then add filenames to `src/data/gallery.ts` (day1ImageFiles, day2ImageFiles) to show them on the last page.

## [0.2.0] - 2025-02-16

### Changed

- **v0.2.0-landscape** – Book dimensions are horizontal/landscape: page aspect 3:2 (width > height), `usePortrait={false}`. Page size is computed from viewport so the spread fits on screen.
- **v0.2.0-responsive** – Responsive layout: `useWindowSize` hook and `computePageDimensions()` fit the book within the viewport with padding. `PageDimensionsContext` passes width/height to `BookPage` so pages scale. Smaller padding on mobile (`p-2 sm:p-4`), reduced `swipeDistance` for touch.
- **v0.2.0-mobile-viewport** – `viewport` export in layout (device-width, initialScale 1, maximumScale 1, userScalable false) for stable mobile layout.
- **v0.2.0-responsive-content** – CoverPage, PageContent, and GalleryPage use responsive Tailwind classes (text-xs/sm/base/lg, p-4/sm:p-6/md:p-8, gap-2/sm:gap-3) so content remains readable on phones.

## [0.3.0] - 2025-02-16

### Added

- **v0.3.0-videos** – Gallery supports videos as well as photos. `src/data/gallery.ts`: added `day1VideoFiles` and `day2VideoFiles` (e.g. `.mp4`, `.webm`, `.mov`, `.ogg`). GalleryPage renders a "Day 1 – Videos" / "Day 2 – Videos" section with HTML5 `<video>` (controls, playsInline, preload=metadata). Media URLs use `encodeURIComponent` for filenames with spaces.

## [0.4.0] - 2025-02-16

### Changed

- **v0.4.0-full-height-desktop** – Book fills vertical space on desktop (no top/bottom gaps). `computePageDimensions()` prioritizes height on desktop (`height = maxH`), then fits width. Reduced padding on desktop (8px vs 24px). Mobile keeps width-first fitting.
- **v0.4.0-mobile-portrait** – Mobile devices can display book in portrait orientation. Added `PAGE_ASPECT_PORTRAIT = 2/3` and portrait detection (`isPortrait = winH > winW`). Mobile portrait mode fills height with portrait aspect. Set `usePortrait={true}` to let react-pageflip handle orientation switching.
- **v0.4.0-auto-media** – Auto-populate gallery from `public/qbr` directories. Created `scripts/populate-gallery.ts` that scans `day1/` and `day2/` folders, separates images (`.jpeg`, `.jpg`, `.png`) and videos (`.mp4`, `.mov`, `.webm`, `.ogg`), and writes sorted filenames to `src/data/gallery.ts`. Added `pnpm run populate-gallery` script and `prebuild` hook to auto-run before builds. Gallery now shows all media files automatically (found 7 images + 2 videos for Day 1, 3 images + 1 video for Day 2).

## [0.5.0] - 2025-02-16

### Added

- **v0.5.0-day3-content** – Added Day 3 content "Consolidation, Capability & Commitment" to `src/data/qbr.ts`. Includes: Interactive Problem-Solving Session (Why Team Computers differentiators), Improvement Areas (Security BU), KAM Presentation, Government Team Presentation, Riverside Reflection, Ranjan Sir's Session (AI & Personal Growth), Closing Note (Jatin Sir), Awards & Celebrations, Takeaways, Action Points, and Conclusion. Day 3 split into 3 spreads (sections 0–4, 5–9, 10–14) in `src/lib/spreads.ts`.
- **v0.5.0-day3-gallery** – Updated `scripts/populate-gallery.ts` and `GalleryPage.tsx` to support Day 3 media. Script scans `public/qbr/day3/` folder (if exists), gallery page shows "Day 3 – Consolidation & Celebration" section. Gallery title updated to "Day 1, Day 2 & Day 3".

## [0.9.0] - 2025-02-16

### Changed

- **v0.9.0-complete-redesign** – Complete redesign from flip-book concept to modern website. Removed all book components (`Book.tsx`, `CoverPage.tsx`, `GalleryPage.tsx`, `PageContent.tsx`, `spreads.ts`). Created new tab-based navigation system with `Tabs.tsx`, `Hero.tsx`, `DaySection.tsx`, `MediaGallery.tsx`, and `SectionBlock.tsx` components.
- **v0.9.0-tab-navigation** – Implemented tab-based navigation (Day 1 / Day 2 / Day 3) replacing page-flipping. Each tab shows day content with side-by-side media gallery (desktop) or stacked layout (mobile).
- **v0.9.0-media-integration** – Images and videos now integrated alongside each day's content instead of at the end. Media gallery positioned on the right side (desktop) or below content (mobile) with sticky positioning.
- **v0.9.0-branding** – Changed branding from "QBR" / "Quarterly Business Review" to "TDE-BMG" throughout. Updated metadata, hero title, and Day 1 title. Body content remains unchanged (historical references to "Quarterly Business Review" preserved).
- **v0.9.0-styling** – Removed book-specific styles (paper texture, page borders, flip animations). Added modern website layout with clean spacing, professional corporate aesthetic, and responsive breakpoints for mobile/tablet/desktop.
- **v0.9.0-dependencies** – Removed `react-pageflip` and `framer-motion` dependencies. Simplified package.json to core Next.js dependencies only.

### Removed

- `src/components/Book.tsx` – Flip-book component
- `src/components/CoverPage.tsx` – Cover page component
- `src/components/GalleryPage.tsx` – Gallery page component
- `src/components/PageContent.tsx` – Page content component (replaced by SectionBlock)
- `src/lib/spreads.ts` – Spread mapping logic
- `react-pageflip` dependency
- `framer-motion` dependency

### Added

- `src/components/Tabs.tsx` – Tab navigation component
- `src/components/Hero.tsx` – Hero header section
- `src/components/DaySection.tsx` – Day content + media layout component
- `src/components/MediaGallery.tsx` – Image/video grid component
- `src/components/SectionBlock.tsx` – Individual section renderer component
