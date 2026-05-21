import { Card, SectionHeader } from "@/components/ui";
import { timeline } from "@/data/site";

export default function AboutPage() {
  return (
    <section className="section pt-32">
      <div className="container-premium">
        <SectionHeader eyebrow="About" title="A focused builder shaping himself into a world-class engineer." text="Ankit is an AI/ML enthusiast and Python developer with a clear mission: build useful intelligent systems, master software fundamentals, and grow into a future software engineer with premium taste." />
        <div className="grid gap-6 lg:grid-cols-3">
          <Card><h3 className="font-display text-2xl font-bold">Mission</h3><p className="mt-4 leading-7 text-[color:var(--muted)]">Create software that is intelligent, beautiful, fast, and genuinely useful.</p></Card>
          <Card><h3 className="font-display text-2xl font-bold">Vision</h3><p className="mt-4 leading-7 text-[color:var(--muted)]">Become a high-impact engineer who blends AI capability with product-grade execution.</p></Card>
          <Card><h3 className="font-display text-2xl font-bold">Brand</h3><p className="mt-4 leading-7 text-[color:var(--muted)]">Premium, ambitious, technical, disciplined, and future-facing.</p></Card>
        </div>
        <div className="mt-16">
          <SectionHeader eyebrow="Journey" title="Timeline of momentum." />
          <div className="grid gap-5">
            {timeline.map(([year, text]) => <Card key={year} className="grid gap-4 md:grid-cols-[160px_1fr]"><p className="font-display text-4xl font-bold text-gradient">{year}</p><p className="text-lg leading-8 text-[color:var(--muted)]">{text}</p></Card>)}
          </div>
        </div>
      </div>
    </section>
  );
}
