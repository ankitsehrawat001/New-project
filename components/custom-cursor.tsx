"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      gsap.to(dot.current, { x: event.clientX - 4, y: event.clientY - 4, duration: 0.08, ease: "power3.out" });
      gsap.to(ring.current, { x: event.clientX - 21, y: event.clientY - 21, duration: 0.35, ease: "power3.out" });
    };
    const enter = () => gsap.to(ring.current, { scale: 1.8, duration: 0.25 });
    const leave = () => gsap.to(ring.current, { scale: 1, duration: 0.25 });
    window.addEventListener("mousemove", move);
    document.querySelectorAll("a,button,.magnetic").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <>
    <div ref={dot} className="cursor-dot" />
    <div ref={ring} className="cursor-ring" />
  </>;
}
