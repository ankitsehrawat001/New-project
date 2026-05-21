"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setShow(false), 1050);
    return () => clearTimeout(id);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="fixed inset-0 z-[90] grid place-items-center bg-ink text-white" exit={{ opacity: 0 }} transition={{ duration: .55 }}>
          <motion.div initial={{ scale: .92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
            <div className="mx-auto mb-5 h-16 w-16 rounded-full border border-cyanLux/40 bg-cyanLux/10 shadow-neon" />
            <p className="font-display text-3xl font-semibold tracking-tight text-gradient">ANKIT.OS</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
