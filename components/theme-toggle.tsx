"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <span className="h-10 w-10 rounded-full glass" />;
  const light = resolvedTheme === "light";
  return (
    <button aria-label="Toggle theme" onClick={() => setTheme(light ? "dark" : "light")} className="magnetic grid h-10 w-10 place-items-center rounded-full glass">
      {light ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
