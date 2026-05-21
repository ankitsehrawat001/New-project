import { Download } from "lucide-react";
import { ButtonLink, Card, SectionHeader } from "@/components/ui";
import { projects, skills } from "@/data/site";

export default function ResumePage() {
  return (
    <section className="section pt-32">
      <div className="container-premium">
        <SectionHeader eyebrow="Resume" title="Ankit — AI/ML Enthusiast, Python Developer, Future Software Engineer." />
        <Card className="mb-6 flex flex-wrap items-center justify-between gap-4"><p className="text-[color:var(--muted)]">A polished resume page ready to convert into PDF when final details are added.</p><ButtonLink href="/contact"><Download size={16} /> Request Resume</ButtonLink></Card>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card><h2 className="font-display text-2xl font-bold">Core Skills</h2><div className="mt-5 grid gap-3">{skills.map((s) => <p key={s.group} className="text-[color:var(--muted)]"><b className="text-[color:var(--fg)]">{s.group}:</b> {s.items.join(", ")}</p>)}</div></Card>
          <Card><h2 className="font-display text-2xl font-bold">Selected Projects</h2><div className="mt-5 grid gap-3">{projects.slice(0,3).map((p) => <p key={p.slug} className="text-[color:var(--muted)]"><b className="text-[color:var(--fg)]">{p.title}:</b> {p.summary}</p>)}</div></Card>
        </div>
      </div>
    </section>
  );
}
