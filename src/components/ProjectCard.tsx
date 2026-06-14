import { getProjectLinks, type Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const domainColor: Record<Project["domain"], string> = {
  Finance: "var(--color-domain-finance)",
  Biotech: "var(--color-domain-biotech)",
  ML: "var(--color-domain-ml)",
  "Web/Visualization": "var(--color-domain-web-visualization)",
};

export function ProjectCard({ project }: { project: Project }) {
  const tint = domainColor[project.domain];
  const links = getProjectLinks(project);
  return (
    <article
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-md"
      style={{ ["--tint" as string]: tint }}
    >
      {/* Accent edge */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px] opacity-70"
        style={{ background: tint }}
      />
      <div>
        <div className="mb-3 flex items-center font-mono text-xs uppercase tracking-wider">
          <span
            className="inline-flex items-center gap-1.5"
            style={{ color: tint }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: tint }}
            />
            {project.domain}
          </span>
        </div>
        <h3 className="font-serif text-2xl leading-tight">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
      </div>
      <div className="mt-6">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-[color:var(--tint)]/40"
            >
              {t}
            </span>
          ))}
        </div>
        {links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center gap-1 text-foreground underline-offset-4 hover:text-accent hover:underline"
              >
                {l.label}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
