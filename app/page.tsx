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
            <div className="inline-flex items-center gap-2 rounded-full border border-cyanLux/30 bg-cyanLux/10 px-4 py-2 text-sm text-cyanLux"><Sparkles size={16} /> AI/ML Portfolio</div>
            <h1 className="mt-7 font-display text-5xl font-bold leading-tight md:text-7xl">Ankit builds <span className="text-gradient">machine learning</span> projects with React.js.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">A focused AI/ML developer portfolio showcasing Python, data analysis, model evaluation, and clean React interfaces for real-world project storytelling.</p>
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
          <SectionHeader eyebrow="Featured Projects" title="AI/ML work presented with product clarity." text="A curated showcase across machine learning, data dashboards, NLP, and Python fundamentals." />
          <div className="grid gap-6 md:grid-cols-2">{projects.slice(0, 4).map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container-premium">
          <SectionHeader eyebrow="Capabilities" title="The stack behind the portfolio." />
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
        <div className="container-premium rounded-lg border border-white/10 bg-aurora p-10 text-center shadow-neon md:p-16">
          <h2 className="font-display text-4xl font-bold md:text-6xl">Ready for AI/ML opportunities.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[color:var(--muted)]">Open to internships, collaborations, project reviews, and roles where Python, ML, and React.js meet practical execution.</p>
          <div className="mt-8"><ButtonLink href="/contact">Contact Ankit</ButtonLink></div>
        </div>
      </section>
    </>
  );
}
