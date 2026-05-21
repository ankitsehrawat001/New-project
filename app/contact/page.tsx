import { Github, Linkedin, Mail } from "lucide-react";
import { ButtonLink, Card, SectionHeader } from "@/components/ui";
import { profile } from "@/data/site";

export default function ContactPage() {
  return (
    <section className="section pt-32">
      <div className="container-premium grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionHeader eyebrow="Contact" title="Let's build something useful." text="Reach out for internships, collaborations, AI/ML projects, React.js builds, and engineering conversations." />
          <div className="flex gap-3">
            <a className="magnetic grid h-12 w-12 place-items-center rounded-full glass" href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
            <a className="magnetic grid h-12 w-12 place-items-center rounded-full glass" href={profile.github} aria-label="GitHub"><Github /></a>
            <a className="magnetic grid h-12 w-12 place-items-center rounded-full glass" href={profile.linkedin} aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </div>
        <Card>
          <form className="grid gap-4">
            <input className="rounded-lg border border-white/10 bg-white/10 px-5 py-4 outline-none focus:border-cyanLux" placeholder="Name" />
            <input className="rounded-lg border border-white/10 bg-white/10 px-5 py-4 outline-none focus:border-cyanLux" placeholder="Email" type="email" />
            <textarea className="min-h-40 rounded-lg border border-white/10 bg-white/10 px-5 py-4 outline-none focus:border-cyanLux" placeholder="Message" />
            <ButtonLink href={`mailto:${profile.email}`}>Send Message</ButtonLink>
          </form>
        </Card>
      </div>
    </section>
  );
}
