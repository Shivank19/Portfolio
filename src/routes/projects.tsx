import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "All projects - Your Name" },
      {
        name: "description",
        content: "A full toggle archive of research and engineering projects.",
      },
    ],
  }),
  component: AllProjects,
});

const domainColor: Record<Project["domain"], string> = {
  Finance: "var(--color-domain-finance)",
  Biotech: "var(--color-domain-biotech)",
  ML: "var(--color-domain-ml)",
  Systems: "var(--color-domain-systems)",
};

function AllProjects() {
  const stats = useMemo(() => {
    const domains = new Set<Project["domain"]>();
    const tech = new Set<string>();

    projects.forEach((project) => {
      domains.add(project.domain);
      project.tech.forEach((item) => tech.add(item));
    });

    return [
      { value: projects.length, label: "Total projects" },
      { value: projects.filter((project) => project.featured).length, label: "Featured projects" },
      { value: domains.size, label: "Domains" },
      { value: tech.size, label: "Technologies" },
    ];
  }, []);

  const [open, setOpen] = useState<Set<string>>(() => new Set());

  function toggle(slug: string) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_12%_8%,color-mix(in_oklab,var(--accent)_8%,transparent),transparent_28rem),linear-gradient(180deg,var(--background)_0%,color-mix(in_oklab,var(--muted)_45%,var(--background))_42rem)] px-4 pb-20 pt-16 md:px-6">
      <div className="mx-auto w-full max-w-[1120px]">
        <header className="grid gap-7 border-b border-rule pb-9">
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent">
              Project archive
            </p>
            <h1 className="max-w-[820px] font-serif text-[clamp(2.8rem,7vw,6rem)] leading-[0.95]">
              Portfolio projects, fully expanded on demand.
            </h1>
            <p className="mt-5 max-w-[690px] text-[1.08rem] leading-relaxed text-muted-foreground">
              A single-page showcase of every project in the portfolio dataset. Each project is a
              toggle, and each expanded view contains only the fields available for that project.
            </p>
          </div>

          <section
            className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4"
            aria-label="Project archive statistics"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-h-24 rounded-lg border border-border bg-card/75 p-4"
              >
                <strong className="block font-serif text-3xl font-normal">
                  {stat.value}
                </strong>
                <span className="mt-1.5 block text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </section>
        </header>

        <div className="sticky top-0 z-10 flex flex-col gap-3 border-b border-border/70 bg-background/90 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted-foreground">
            Showing all {projects.length} projects
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setOpen(new Set(projects.map((project) => project.slug)))}
              className="min-h-8 rounded-full border border-border bg-card px-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] transition-colors hover:border-accent focus-visible:border-accent focus-visible:outline-none"
            >
              Open all
            </button>
            <button
              type="button"
              onClick={() => setOpen(new Set())}
              className="min-h-8 rounded-full border border-border bg-card px-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] transition-colors hover:border-accent focus-visible:border-accent focus-visible:outline-none"
            >
              Close all
            </button>
          </div>
        </div>

        <section className="grid gap-3.5 pt-5" aria-label="Projects">
          {projects.map((project) => (
            <ProjectToggle
              key={project.slug}
              project={project}
              open={open.has(project.slug)}
              onToggle={() => toggle(project.slug)}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

function ProjectToggle({
  project,
  open,
  onToggle,
}: {
  project: Project;
  open: boolean;
  onToggle: () => void;
}) {
  const d = project.details;
  const tint = domainColor[project.domain];

  return (
    <article
      className="overflow-hidden rounded-lg border border-border bg-card shadow-[0_22px_52px_color-mix(in_oklab,var(--foreground)_6%,transparent)]"
      style={{ ["--tint" as string]: tint }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={project.slug}
        onClick={onToggle}
        className="grid w-full grid-cols-1 items-center gap-4 border-0 border-t-[3px] border-[color:var(--tint)] bg-transparent p-5 text-left text-foreground md:grid-cols-[minmax(0,1fr)_auto] md:p-6"
      >
        <span>
          <span className="mb-2 flex flex-wrap items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: tint }}
              aria-hidden
            />
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
              {project.domain} / {project.year} / {project.featured ? "Featured" : "Not featured"}
            </span>
          </span>
          <h2 className="font-serif text-[clamp(1.55rem,3vw,2.35rem)] leading-[1.08]">
            {project.title}
          </h2>
          <p className="mt-2.5 max-w-[780px] text-[0.98rem] leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        </span>
        <span
          className={`grid h-9 w-9 place-items-center rounded-full border text-[color:var(--tint)] transition-transform ${
            open ? "rotate-180 border-[color:var(--tint)]" : "border-border"
          }`}
          aria-hidden
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      {open && (
        <div id={project.slug} className="px-5 pb-5 md:px-6 md:pb-6">
          <div className="grid gap-4 border-t border-rule pt-5 md:grid-cols-2">
            <Field label="Slug">
              <p className="break-words font-mono">{project.slug}</p>
            </Field>
            <Field label="Tech">
              <Tags items={project.tech} />
            </Field>
            {project.links && project.links.length > 0 && (
              <Field label="Links">
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="inline-flex min-h-8 items-center rounded-full border border-[color:color-mix(in_oklab,var(--tint)_35%,var(--border))] px-3 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[color:var(--tint)] no-underline transition-colors hover:bg-[color:color-mix(in_oklab,var(--tint)_8%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </Field>
            )}
            <Field label="Featured">
              <p>{String(project.featured)}</p>
            </Field>
          </div>

          {d && (
            <div className="mt-5 grid gap-5 border-t border-rule pt-5">
              <p className="max-w-[890px] text-[1.02rem] leading-relaxed">{d.overview}</p>

              {d.results && d.results.length > 0 && (
                <div className="grid gap-2.5 md:grid-cols-3">
                  {d.results.map((result) => (
                    <div
                      key={result.label}
                      className="rounded-lg border border-border bg-muted p-3.5"
                    >
                      <strong className="block font-serif text-2xl font-normal text-[color:var(--tint)]">
                        {result.value}
                      </strong>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {result.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <DetailBlock label="Problem">{d.problem}</DetailBlock>
              <DetailBlock label="Approach" ordered>
                {d.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </DetailBlock>
              <DetailBlock label="Outcomes">
                {d.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </DetailBlock>
              <DetailBlock label="Learnings">
                {d.learnings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </DetailBlock>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <p className="mb-2 font-mono text-[0.66rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <div className="text-sm leading-relaxed text-foreground">{children}</div>
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex min-h-6 items-center rounded-full border border-border px-2.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function DetailBlock({
  label,
  children,
  ordered = false,
}: {
  label: string;
  children: React.ReactNode;
  ordered?: boolean;
}) {
  const List = ordered ? "ol" : "ul";
  const content =
    typeof children === "string" ? (
      <p className="m-0 leading-relaxed">{children}</p>
    ) : (
      <List className="m-0 space-y-2 pl-5 leading-relaxed">{children}</List>
    );

  return (
    <section className="grid gap-3 md:grid-cols-[0.65fr_1fr] md:gap-5">
      <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[color:var(--tint)]">
        {label}
      </p>
      <div className="text-sm text-foreground">{content}</div>
    </section>
  );
}
