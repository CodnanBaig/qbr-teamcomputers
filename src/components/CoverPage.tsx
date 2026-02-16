"use client";

import { motion } from "framer-motion";

export default function CoverPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12 py-6 sm:py-8 md:py-12 lg:py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15 }}
        className="space-y-2 sm:space-y-3 md:space-y-5"
      >
        <h1 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-ink tracking-tight leading-tight px-2">
          Quarterly Business Review
        </h1>
        <p className="font-serif text-sm sm:text-base md:text-lg lg:text-xl text-ink-muted px-2">Tattva Hills</p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-accent text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-ink-muted/80 mt-4 sm:mt-6 md:mt-10 px-2"
        >
          Keynote by Jatin Sawhney
        </motion.p>
      </motion.div>
    </div>
  );
}
