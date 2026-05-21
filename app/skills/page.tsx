import { Card, SectionHeader } from "@/components/ui";
import { skills } from "@/data/site";

export default function SkillsPage() {
  return (
    <section className="section pt-32">
      <div className="container-premium">
        <SectionHeader eyebrow="Skills" title="A growing technical stack with product taste." text="Categorized capabilities across AI, frontend, backend, and the tools needed to ship." />
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <Card key={group.group}>
              <h2 className="font-display text-3xl font-bold">{group.group}</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-[color:var(--muted)]">{item}</span>)}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
