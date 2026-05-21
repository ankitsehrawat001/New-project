import { ArrowDown, Sparkles } from "lucide-react";
import { HeroVisual } from "@/components/hero-visual";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/motion";
import { ButtonLink, Card, SectionHeader } from "@/components/ui";
import { projects, services, stats, testimonials } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden pt-32">
        <div className="container-premium grid min-h-[calc(100vh-8rem)] items-center gap-12 lg:grid-cols-[1fr_.82fr]">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyanLux/30 bg-cyanLux/10 px-4 py-2 text-sm text-cyanLux"><Sparkles size={16} /> Future Software Engineer</div>
            <h1 className="mt-7 font-display text-6xl font-bold leading-[.95] tracking-tight md:text-8xl">Ankit builds <span className="text-gradient">intelligent</span> digital systems.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">AI/ML enthusiast, Python developer, and ambitious builder crafting premium software experiences with cinematic detail and engineering discipline.</p>
            <div className="mt-9 flex flex-wrap gap-4"><ButtonLink href="/projects">Explore Work</ButtonLink><ButtonLink href="/contact" variant="ghost">Start a Conversation</ButtonLink></div>
          </Reveal>
          <Reveal delay={.15}><HeroVisual /></Reveal>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[color:var(--muted)]"><ArrowDown className="animate-bounce" /></div>
      </section>

      <section className="section">
        <div className="container-premium grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => <Card key={label}><p className="font-display text-4xl font-bold text-gradient">{value}</p><p className="mt-2 text-sm text-[color:var(--muted)]">{label}</p></Card>)}
        </div>
      </section>

      <section className="section">
        <div className="container-premium">
          <SectionHeader eyebrow="Featured Projects" title="Proof of ambition, wrapped in premium execution." text="A curated showcase across Python systems, marketplace UI, AI experiments, and future-facing software." />
          <div className="grid gap-6 md:grid-cols-2">{projects.slice(0, 4).map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container-premium">
          <SectionHeader eyebrow="Services" title="Modern software capability for ambitious ideas." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => <Card key={service.title}><service.icon className="mb-5 text-cyanLux" /><h3 className="font-display text-xl font-bold">{service.title}</h3><p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{service.text}</p></Card>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-premium grid gap-6 lg:grid-cols-3">
          {testimonials.map(([quote, by]) => <Card key={by}><p className="text-xl leading-8">&ldquo;{quote}&rdquo;</p><p className="mt-5 text-sm text-cyanLux">{by}</p></Card>)}
        </div>
      </section>

      <section className="section">
        <div className="container-premium rounded-[2.5rem] border border-white/10 bg-aurora p-10 text-center shadow-neon md:p-16">
          <h2 className="font-display text-4xl font-bold md:text-7xl">Ready for the next serious build.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[color:var(--muted)]">Recruiters, collaborators, and teams looking for hunger, clarity, and execution will find it here.</p>
          <div className="mt-8"><ButtonLink href="/contact">Contact Ankit</ButtonLink></div>
        </div>
      </section>
    </>
  );
}
