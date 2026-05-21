import { Award } from "lucide-react";
import { Card, SectionHeader } from "@/components/ui";
import { certifications } from "@/data/site";

export default function CertificationsPage() {
  return (
    <section className="section pt-32">
      <div className="container-premium">
        <SectionHeader eyebrow="Certifications" title="Signals of learning, discipline, and momentum." />
        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((item) => <Card key={item} className="flex items-center gap-4"><Award className="text-cyanLux" /><h2 className="font-display text-xl font-bold">{item}</h2></Card>)}
        </div>
      </div>
    </section>
  );
}
