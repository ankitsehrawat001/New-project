"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  return null;
}
