"use client";

import { motion } from "framer-motion";
import { techIcons } from "@/data/site";

export function HeroVisual() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/30 shadow-neon">
      <div className="absolute inset-0 bg-aurora opacity-80" />
      <div className="absolute inset-8 rounded-[2rem] border border-white/15 bg-white/[.04] backdrop-blur-md" />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyanLux/30" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violetLux/40" />
      <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-black shadow-neon">
        <span className="font-display text-4xl font-bold">A</span>
      </div>
      {techIcons.map((Icon, index) => (
        <motion.div key={index} animate={{ y: [0, -16, 0] }} transition={{ duration: 3 + index, repeat: Infinity }} className="absolute rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl" style={{ left: `${18 + index * 18}%`, top: `${18 + (index % 2) * 48}%` }}>
          <Icon className="text-cyanLux" />
        </motion.div>
      ))}
    </div>
  );
}
