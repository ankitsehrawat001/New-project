"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/ui";
import { projects } from "@/data/site";

const filters = ["All", "Python", "Web", "AI", "Future"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const visible = projects.filter((project) => filter === "All" || project.type.toLowerCase().includes(filter.toLowerCase()) || project.stack.join(" ").toLowerCase().includes(filter.toLowerCase()));
  return (
    <section className="section pt-32">
      <div className="container-premium">
        <SectionHeader eyebrow="Projects" title="Premium proof, clear storytelling, strong technical signals." />
        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`magnetic rounded-full px-5 py-2 text-sm ${filter === item ? "bg-white text-black" : "glass"}`}>{item}</button>)}
        </div>
        <div className="grid gap-6 md:grid-cols-2">{visible.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </div>
    </section>
  );
}
