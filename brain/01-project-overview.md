# QBR Book – Project Overview

- **Purpose**: Present the Quarterly Business Review content (from shrishti.txt) as a flip-book/diary-style website.
- **Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS, react-pageflip, framer-motion.
- **UX**: Single full-screen view, no navbar/footer. Pages: Cover → Day 1 (3 spreads) → Day 2 (2 spreads) → Gallery (Day 1 & 2 images). Flip via click/tap on corners or keyboard (←/→).
- **Content**: All sections, bullets, and quotes from shrishti.txt are included in `src/data/qbr.ts` and rendered via `PageContent` and spread mapping in `src/lib/spreads.ts`.
