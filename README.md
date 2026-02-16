# QBR Book

A flip-book style website for the Quarterly Business Review content (Tattva Hills – Day 1 & Day 2). Built with Next.js, react-pageflip, and Framer Motion.

## Run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Use **arrow keys** (←/→) or **click/tap** on the left/right page corners to flip.

## Add photos and videos (last page)

1. Place **photos** in `public/qbr/day1/` and/or `public/qbr/day2/`.
2. Place **videos** in the same folders (e.g. `.mp4`, `.webm`, `.mov`, `.ogg`).
3. Add filenames in `src/data/gallery.ts`:
   - `day1ImageFiles = ["photo1.jpg", "photo2.png"]`
   - `day1VideoFiles = ["clip1.mp4"]`
   - `day2ImageFiles = ["photo1.jpg"]`
   - `day2VideoFiles = ["clip.mov"]`
4. Rebuild or refresh. The last page shows Photos and Videos sections per day; filenames with spaces are handled automatically.

## Build

```bash
pnpm build
pnpm start
```

## Tech

- Next.js 15 (App Router), TypeScript, Tailwind CSS
- [react-pageflip](https://www.npmjs.com/package/react-pageflip) for page-turn animation
- [framer-motion](https://www.npmjs.com/package/framer-motion) for entrance and subtle motion
