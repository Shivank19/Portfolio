import { Section } from "@/components/Section";
import { experience, education } from "@/data/experience";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="04 — Timeline"
      title="Experience & education."
      bgGlyph={<span className="font-serif text-[22rem] leading-none">†</span>}
    >
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Experience
          </h3>
          <ol className="relative space-y-8 border-l border-rule pl-6">
            {experience.map((e) => (
              <li key={e.org} className="relative">
                <span className="absolute -left-[27px] top-2 h-2 w-2 rounded-full bg-accent" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-serif text-xl">{e.role}</h4>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {e.start}{e.end ? ` — ${e.end}` : ""}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {e.org} · {e.location}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Education
          </h3>
          <ol className="relative space-y-8 border-l border-rule pl-6">
            {education.map((ed) => (
              <li key={ed.degree} className="relative">
                <span className="absolute -left-[27px] top-2 h-2 w-2 rounded-full bg-accent" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-serif text-xl">{ed.degree}</h4>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {ed.start} — {ed.end}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{ed.school}</p>
                <p className="mt-2 text-sm text-foreground/85">{ed.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
