import { Card, SectionHeader } from "@/components/ui";
import { posts } from "@/data/site";

export default function BlogPage() {
  return (
    <section className="section pt-32">
      <div className="container-premium">
        <SectionHeader eyebrow="Insights" title="Notes from the build path." />
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map(([title, text]) => <Card key={title}><p className="text-sm text-cyanLux">Insight</p><h2 className="mt-3 font-display text-2xl font-bold">{title}</h2><p className="mt-4 leading-7 text-[color:var(--muted)]">{text}</p></Card>)}
        </div>
      </div>
    </section>
  );
}
