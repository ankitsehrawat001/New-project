import { Card, SectionHeader } from "@/components/ui";
import { timeline } from "@/data/site";

export default function AboutPage() {
  return (
    <section className="section pt-32">
      <div className="container-premium">
        <SectionHeader eyebrow="About" title="A focused AI/ML learner building practical software." text="Ankit works across Python, machine learning fundamentals, data analysis, and React.js interfaces. The goal is simple: build projects that are useful, explainable, and easy to understand." />
        <div className="grid gap-6 lg:grid-cols-3">
          <Card><h3 className="font-display text-2xl font-bold">Mission</h3><p className="mt-4 leading-7 text-[color:var(--muted)]">Use AI/ML to solve practical problems with clean logic and honest evaluation.</p></Card>
          <Card><h3 className="font-display text-2xl font-bold">Focus</h3><p className="mt-4 leading-7 text-[color:var(--muted)]">Python, data preparation, model training, result explanation, and React.js presentation.</p></Card>
          <Card><h3 className="font-display text-2xl font-bold">Direction</h3><p className="mt-4 leading-7 text-[color:var(--muted)]">Grow into a software engineer who can connect ML experiments with usable products.</p></Card>
        </div>
        <div className="mt-16">
          <SectionHeader eyebrow="Journey" title="Timeline of technical growth." />
          <div className="grid gap-5">
            {timeline.map(([year, text]) => <Card key={year} className="grid gap-4 md:grid-cols-[160px_1fr]"><p className="font-display text-4xl font-bold text-gradient">{year}</p><p className="text-lg leading-8 text-[color:var(--muted)]">{text}</p></Card>)}
          </div>
        </div>
      </div>
    </section>
  );
}
