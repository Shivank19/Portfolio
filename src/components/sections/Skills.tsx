import { Section } from "@/components/Section";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="03 — Toolkit"
      title="Skills."
      bgGlyph={<span className="font-serif text-[22rem] leading-none">∂</span>}
    >
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {g.group}
            </h3>
            <ul className="space-y-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline justify-between border-b border-rule/60 pb-2 text-sm"
                >
                  <span className="text-foreground">{item}</span>
                  <span className="font-mono text-[10px] text-muted-foreground">·</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
