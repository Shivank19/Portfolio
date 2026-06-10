import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { projects, type Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function Projects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="02 — Selected work"
      title="Projects."
      bgGlyph={<span className="font-serif text-[22rem] leading-none">∑</span>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((p) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => setActive(p)}
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            aria-label={`Open details for ${p.title}`}
          >
            <ProjectCard project={p} />
          </button>
        ))}
      </div>
      <div className="mt-10 flex justify-end">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground hover:text-accent"
        >
          See all projects
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <ProjectModal
        project={active}
        open={!!active}
        onOpenChange={(o) => !o && setActive(null)}
      />
    </Section>
  );
}
