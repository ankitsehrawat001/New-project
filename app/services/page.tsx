import { Card, SectionHeader } from "@/components/ui";
import { services } from "@/data/site";

export default function ServicesPage() {
  return (
    <section className="section pt-32">
      <div className="container-premium">
        <SectionHeader eyebrow="Services" title="Software services for future-facing products." text="AI solutions, web app development, automation systems, and research-led future builds." />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => <Card key={service.title}><service.icon className="mb-6 text-cyanLux" size={34} /><h2 className="font-display text-3xl font-bold">{service.title}</h2><p className="mt-4 leading-8 text-[color:var(--muted)]">{service.text}</p></Card>)}
        </div>
      </div>
    </section>
  );
}
