"use client";

import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  createContext,
  useContext,
  useMemo,
} from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useWindowSize } from "@/hooks/useWindowSize";

const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

/** Landscape aspect per single page (width : height) */
const PAGE_ASPECT = 3 / 2;
/** Portrait aspect per single page (height : width) */
const PAGE_ASPECT_PORTRAIT = 2 / 3;
/** Spread = 2 pages side by side, so spread width = 2 * pageWidth */
const SPREAD_WIDTH_RATIO = 2 * PAGE_ASPECT;
const MOBILE_BREAKPOINT = 768;

type PageDimensions = { width: number; height: number };

const PageDimensionsContext = createContext<PageDimensions>({
  width: 560,
  height: 373,
});

export function usePageDimensions() {
  return useContext(PageDimensionsContext);
}

export interface BookPageProps {
  children: React.ReactNode;
  className?: string;
}

export const BookPage = React.forwardRef<HTMLDivElement, BookPageProps>(
  function BookPage({ children, className = "" }, ref) {
    const { width, height } = usePageDimensions();

    return (
      <div
        ref={ref}
        className={`bg-paper border border-paper-dark/40 shadow-inner overflow-hidden paper-texture ${className}`}
        style={{
          width,
          height,
          minWidth: width,
          minHeight: height,
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.03)",
        }}
      >
        {children}
      </div>
    );
  }
);

type BookProps = {
  pages: React.ReactNode[];
};

function computePageDimensions(
  windowWidth: number,
  windowHeight: number,
  isMobile: boolean,
  isPortrait: boolean
): PageDimensions {
  const padding = isMobile ? 16 : 8;
  const maxW = windowWidth - padding * 2;
  const maxH = windowHeight - padding * 2;

  if (isMobile && isPortrait) {
    // Mobile portrait: fill height, use portrait aspect
    const height = maxH;
    const width = PAGE_ASPECT_PORTRAIT * height;
    // Ensure width fits
    const finalWidth = Math.min(width, maxW);
    const finalHeight = finalWidth / PAGE_ASPECT_PORTRAIT;
    return {
      width: Math.round(finalWidth),
      height: Math.round(finalHeight),
    };
  } else if (isMobile) {
    // Mobile landscape: fit width first (current logic)
    const height = Math.min(maxH, maxW / SPREAD_WIDTH_RATIO);
    const width = PAGE_ASPECT * height;
    return {
      width: Math.round(width),
      height: Math.round(height),
    };
  } else {
    // Desktop: fill height first
    const height = maxH;
    const spreadWidth = 2 * PAGE_ASPECT * height;
    const width =
      spreadWidth <= maxW
        ? PAGE_ASPECT * height
        : maxW / 2; // If spread too wide, scale down proportionally
    return {
      width: Math.round(width),
      height: Math.round(height),
    };
  }
}

export default function Book({ pages }: BookProps) {
  const bookRef = useRef<{
    pageFlip: () => {
      flipNext: () => void;
      flipPrev: () => void;
      getCurrentPageIndex: () => number;
    };
  } | null>(null);
  const [mounted, setMounted] = useState(false);
  const { width: winW, height: winH } = useWindowSize();

  const isMobile = winW < MOBILE_BREAKPOINT;
  const isPortrait = winH > winW;

  const dimensions = useMemo(
    () => computePageDimensions(winW, winH, isMobile, isPortrait),
    [winW, winH, isMobile, isPortrait]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!bookRef.current?.pageFlip) return;
      const flip = bookRef.current.pageFlip();
      const current = flip.getCurrentPageIndex();
      if (e.key === "ArrowRight" && current < pages.length - 1) flip.flipNext();
      if (e.key === "ArrowLeft" && current > 0) flip.flipPrev();
    },
    [pages.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!mounted) return null;

  const { width, height } = dimensions;

  return (
    <PageDimensionsContext.Provider value={dimensions}>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-center w-full h-full"
        style={{ padding: isMobile ? '8px' : '4px' }}
      >
        <div
          className="drop-shadow-2xl"
          style={{
            boxShadow:
              "0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04)",
          }}
        >
          <HTMLFlipBook
            ref={bookRef}
            width={width}
            height={height}
            size="fixed"
            minWidth={0}
            maxWidth={width}
            minHeight={0}
            maxHeight={height}
            showCover={true}
            startPage={0}
            drawShadow={true}
            flippingTime={600}
            usePortrait={true}
            startZIndex={0}
            autoSize={true}
            maxShadowOpacity={0.5}
            mobileScrollSupport={false}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={24}
            showPageCorners={true}
            disableFlipByClick={false}
            className=""
            style={{}}
          >
            {pages}
          </HTMLFlipBook>
        </div>
      </motion.div>
    </PageDimensionsContext.Provider>
  );
}
