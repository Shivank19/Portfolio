import type { Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowUpRight } from "lucide-react";

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!project) return null;
  const d = project.details;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto border-border bg-background">
        <DialogHeader className="space-y-3 text-left">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>{project.domain}</span>
            <span>{project.year}</span>
          </div>
          <DialogTitle className="font-serif text-3xl leading-tight md:text-4xl">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed text-muted-foreground">
            {d?.overview ?? project.summary}
          </DialogDescription>
        </DialogHeader>

        {d?.results && d.results.length > 0 && (
          <div className="grid grid-cols-3 gap-3 border-y border-rule py-4">
            {d.results.map((r) => (
              <div key={r.label}>
                <div className="font-serif text-xl text-foreground md:text-2xl">{r.value}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {d && (
          <div className="space-y-6">
            <Block label="Problem">{d.problem}</Block>
            <Block label="Approach">
              <ul className="space-y-2">
                {d.approach.map((a, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Block>
            <Block label="Outcomes">
              <ul className="space-y-1.5 text-sm leading-relaxed text-foreground/90">
                {d.outcomes.map((o, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent">›</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </Block>
            <Block label="What I learnt">
              <ul className="space-y-1.5 text-sm italic leading-relaxed text-muted-foreground">
                {d.learnings.map((l, i) => (
                  <li key={i}>— {l}</li>
                ))}
              </ul>
            </Block>
          </div>
        )}

        <div className="border-t border-rule pt-4">
          <h4 className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Tech stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-4 pt-2 text-sm">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-foreground underline-offset-4 hover:text-accent hover:underline"
              >
                {l.label}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </h4>
      <div className="text-sm leading-relaxed text-foreground/90">{children}</div>
    </div>
  );
}
