import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, SectionHeader, ButtonLink } from "@/components/ui";
import { projects } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <section className="section pt-32">
      <div className="container-premium">
        <SectionHeader eyebrow={project.type} title={project.title} text={project.summary} />
        <div className="relative mb-10 aspect-[16/8] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-neon">
          <Image src={project.image} alt={project.title} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card><h2 className="font-display text-2xl font-bold">Challenge</h2><p className="mt-4 leading-7 text-[color:var(--muted)]">{project.challenge}</p></Card>
          <Card><h2 className="font-display text-2xl font-bold">Solution</h2><p className="mt-4 leading-7 text-[color:var(--muted)]">{project.solution}</p></Card>
          <Card><h2 className="font-display text-2xl font-bold">Outcome</h2><p className="mt-4 leading-7 text-[color:var(--muted)]">{project.outcome}</p></Card>
        </div>
        <Card className="mt-6">
          <h2 className="font-display text-2xl font-bold">Tech Stack</h2>
          <div className="mt-5 flex flex-wrap gap-3">{project.stack.map((item) => <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm">{item}</span>)}</div>
          <div className="mt-8"><ButtonLink href="/contact">Discuss This Build</ButtonLink></div>
        </Card>
      </div>
    </section>
  );
}
