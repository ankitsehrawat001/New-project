import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/site";

export function Footer() {
  return (
    <footer className="section border-t border-white/10 pb-10">
      <div className="container-premium grid gap-8 lg:grid-cols-[1.3fr_.7fr_.7fr]">
        <div>
          <p className="font-display text-4xl font-bold text-gradient">Build the future, beautifully.</p>
          <p className="mt-4 max-w-xl text-[color:var(--muted)]">React.js portfolio for AI/ML projects, Python, data analysis, and practical software thinking.</p>
        </div>
        <div className="grid gap-3 text-sm text-[color:var(--muted)]">
          {["About", "Projects", "Services", "Resume"].map((item) => <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-[color:var(--fg)]">{item}</Link>)}
        </div>
        <div className="flex gap-3 lg:justify-end">
          <a aria-label="Email" className="magnetic grid h-11 w-11 place-items-center rounded-full glass" href={`mailto:${profile.email}`}><Mail size={18} /></a>
          <a aria-label="GitHub" className="magnetic grid h-11 w-11 place-items-center rounded-full glass" href={profile.github}><Github size={18} /></a>
          <a aria-label="LinkedIn" className="magnetic grid h-11 w-11 place-items-center rounded-full glass" href={profile.linkedin}><Linkedin size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
