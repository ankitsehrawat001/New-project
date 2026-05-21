"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const links = ["About", "Skills", "Projects", "Services", "Experience", "Contact"];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-4 z-50">
      <nav className="container-premium glass flex h-16 items-center justify-between rounded-full px-4">
        <Link href="/" className="font-display text-lg font-bold text-gradient">Ankit</Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const href = `/${link.toLowerCase()}`;
            return <Link key={link} href={href} className={cn("rounded-full px-4 py-2 text-sm text-[color:var(--muted)] transition hover:text-[color:var(--fg)]", pathname === href && "bg-white/10 text-[color:var(--fg)]")}>{link}</Link>;
          })}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button className="grid h-10 w-10 place-items-center rounded-full glass lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </nav>
      {open && (
        <div className="container-premium mt-3 rounded-3xl glass p-4 lg:hidden">
          {links.map((link) => <Link onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-sm" key={link} href={`/${link.toLowerCase()}`}>{link}</Link>)}
        </div>
      )}
    </header>
  );
}
