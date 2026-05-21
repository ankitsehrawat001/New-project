import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { Card } from "./ui";

export function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full p-3">
        <div className="relative aspect-[1.35] overflow-hidden rounded-[1.5rem]">
          <Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
        </div>
        <div className="p-4">
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="text-sm text-cyanLux">{project.type}</p>
            <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
          </div>
          <h3 className="font-display text-2xl font-bold">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{project.summary}</p>
        </div>
      </Card>
    </Link>
  );
}
