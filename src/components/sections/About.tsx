import { Section } from "@/components/Section";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title="A short story."
      bgGlyph={<span className="font-serif text-[24rem] leading-none">¶</span>}
    >
      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-5 text-justify text-lg leading-relaxed text-foreground/90 md:col-span-3">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <aside className="md:col-span-2 md:border-l md:border-rule md:pl-10">
          <dl className="space-y-5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <div>
              <dt className="mb-1">Focus</dt>
              <dd className="text-foreground normal-case tracking-normal font-sans text-sm">
                Quant finance · Computational biology · Statistical ML
              </dd>
            </div>
            <div>
              <dt className="mb-1">Currently</dt>
              <dd className="text-foreground normal-case tracking-normal font-sans text-sm">
                M.S. CS · Graduate research
              </dd>
            </div>
            <div>
              <dt className="mb-1">Open to</dt>
              <dd className="text-foreground normal-case tracking-normal font-sans text-sm">
                Research collaborations, Summer 2026 internships
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </Section>
  );
}
