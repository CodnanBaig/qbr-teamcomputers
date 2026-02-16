"use client";

import { useState, useEffect } from "react";

export function useWindowSize() {
  const [size, setSize] = useState({ width: 800, height: 600 });

  useEffect(() => {
    function update() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}
