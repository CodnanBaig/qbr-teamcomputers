"use client";

import { useState, useEffect } from "react";

export function useWindowSize() {
  // Use mobile-friendly defaults to avoid layout shift
  const [size, setSize] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 375, 
    height: typeof window !== 'undefined' ? window.innerHeight : 667 
  });

  useEffect(() => {
    function update() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return size;
}
