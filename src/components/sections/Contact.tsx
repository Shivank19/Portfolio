import { Section } from "@/components/Section";
import { profile } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="05 — Get in touch"
      title="Let's talk."
      bgGlyph={<span className="font-serif text-[24rem] leading-none">@</span>}
    >
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="max-w-xl text-lg leading-relaxed text-foreground/90">
            I'm always happy to chat about quantitative finance, computational biology, graduate
            research or unusual problems that sit between fields. The fastest way to reach me is
            email.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block font-serif text-3xl text-foreground underline-offset-8 hover:text-accent hover:underline md:text-5xl"
          >
            {profile.email}
          </a>
        </div>
        <div className="md:col-span-2 md:border-l md:border-rule md:pl-10">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Elsewhere
          </h3>
          <ul className="space-y-3">
            {Object.entries(profile.socials).map(([k, v]) => (
              <li key={k}>
                <a
                  href={v}
                  className="group inline-flex items-center gap-2 text-foreground hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="capitalize">{k}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="mt-24 flex items-center justify-between border-t border-rule pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        {/* <span className="hidden md:inline">↑↑↓↓←→←→ B A</span> */}
      </footer>
    </Section>
  );
}
