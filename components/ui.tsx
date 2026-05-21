import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[.22em] text-cyanLux">{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">{text}</p>}
    </div>
  );
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" }) {
  return (
    <Link href={href} className={cn("magnetic inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold", variant === "primary" ? "bg-white text-black shadow-neon" : "glass")}>
      {children}<ArrowRight size={16} />
    </Link>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("glass scanline relative overflow-hidden rounded-[2rem] p-6", className)}>{children}</div>;
}
