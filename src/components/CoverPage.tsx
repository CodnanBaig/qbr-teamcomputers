"use client";

import { motion } from "framer-motion";

export default function CoverPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 sm:px-10 md:px-12 py-8 sm:py-12 md:py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15 }}
        className="space-y-3 sm:space-y-5"
      >
        <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-ink tracking-tight leading-tight">
          Quarterly Business Review
        </h1>
        <p className="font-serif text-base sm:text-lg md:text-xl text-ink-muted">Tattva Hills</p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-accent text-[10px] sm:text-xs uppercase tracking-[0.2em] text-ink-muted/80 mt-6 sm:mt-10"
        >
          Keynote by Jatin Sawhney
        </motion.p>
      </motion.div>
    </div>
  );
}
