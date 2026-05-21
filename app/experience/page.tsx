import { Card, SectionHeader } from "@/components/ui";
import { timeline } from "@/data/site";

export default function ExperiencePage() {
  return (
    <section className="section pt-32">
      <div className="container-premium">
        <SectionHeader eyebrow="Experience" title="Timeline of AI/ML and React.js growth." />
        <div className="grid gap-5">
          {timeline.map(([year, text]) => <Card key={year} className="grid gap-4 md:grid-cols-[180px_1fr]"><p className="font-display text-5xl font-bold text-gradient">{year}</p><p className="text-lg leading-8 text-[color:var(--muted)]">{text}</p></Card>)}
        </div>
      </div>
    </section>
  );
}
