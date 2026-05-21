import { Card, SectionHeader } from "@/components/ui";
import { testimonials } from "@/data/site";

export default function TestimonialsPage() {
  return (
    <section className="section pt-32">
      <div className="container-premium">
        <SectionHeader eyebrow="Testimonials" title="What collaborators notice first." />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map(([quote, by]) => <Card key={by}><p className="text-2xl leading-9">&ldquo;{quote}&rdquo;</p><p className="mt-6 text-cyanLux">{by}</p></Card>)}
        </div>
      </div>
    </section>
  );
}
