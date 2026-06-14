import { Section } from "@/components/Section";
import { profile } from "@/data/profile";
import me2Url from "@/assets/me2.jpg";

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
          <div className="relative mb-8 max-w-[18rem] rounded-lg before:absolute before:-inset-1.5 before:rounded-[inherit] before:bg-[color:color-mix(in_oklab,var(--accent)_34%,transparent)] before:opacity-75 before:blur-lg">
            <div className="relative overflow-hidden rounded-lg border border-[color:color-mix(in_oklab,var(--accent)_45%,var(--border))] bg-card shadow-[0_0_28px_color-mix(in_oklab,var(--accent)_22%,transparent)]">
              <img
                src={me2Url}
                alt="Shivank Sapra"
                className="aspect-[4/5] w-full object-cover transition-transform duration-300 ease-out hover:scale-150"
              />
            </div>
          </div>
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
