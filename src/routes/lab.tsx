import { createFileRoute, Link } from "@tanstack/react-router";
import { labEntries, photos, tracks, sketches, type LabEntry } from "@/data/lab";
import { ArrowLeft, ArrowUpRight, Music, Camera, Pencil, Play } from "lucide-react";

export const Route = createFileRoute("/lab")({
  head: () => ({
    meta: [
      { title: "The Lab — a quiet corner" },
      {
        name: "description",
        content:
          "Hidden page: experiments, hobbies, reading notes, photography, music, and sketches.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LabPage,
});

const kindLabel: Record<LabEntry["kind"], string> = {
  experiment: "Experiment",
  hobby: "Hobby",
  writing: "Writing",
  curio: "Curio",
};

function MediaHeading({
  icon: Icon,
  label,
  title,
  note,
}: {
  icon: typeof Camera;
  label: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-6 border-b border-rule pb-4">
      <div>
        <p className="mb-2 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <span
            aria-hidden
            className="inline-block h-px w-6"
            style={{ background: "var(--gradient-accent)" }}
          />
          <Icon className="h-3 w-3" />
          {label}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
      </div>
      {note && (
        <p className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:block">
          {note}
        </p>
      )}
    </div>
  );
}

function LabPage() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-32">
      <div className="mx-auto max-w-4xl">
        <header className="mb-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-accent">
            ↑↑↓↓←→←→ B A · you found it
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">The Lab.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A quieter corner of the site. Side experiments, hobbies, reading notes, photographs,
            music, and the occasional sketch — things I make when no one is grading me. Nothing here
            is polished; that's kind of the point.
          </p>
        </header>

        {/* Index / table of contents */}
        <nav className="mb-20 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <a href="#notes" className="hover:text-foreground">
            01 · Notes
          </a>
          <a href="#photography" className="hover:text-foreground">
            02 · Photography
          </a>
          <a href="#music" className="hover:text-foreground">
            03 · Music
          </a>
          <a href="#sketches" className="hover:text-foreground">
            04 · Sketches
          </a>
        </nav>

        {/* 01 — Notes (the original list) */}
        <section id="notes" className="mb-24 scroll-mt-24">
          <MediaHeading
            icon={Pencil}
            label="01 · Notes"
            title="Writing, hobbies, half-experiments."
          />
          <ul className="divide-y divide-rule border-y border-rule">
            {labEntries.map((e) => (
              <li
                key={e.title}
                className="grid grid-cols-[auto_1fr] gap-6 py-6 md:grid-cols-[10rem_1fr_auto] md:gap-10"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:pt-1">
                  {kindLabel[e.kind]}
                  {e.year ? ` · ${e.year}` : ""}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-foreground md:text-2xl">{e.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {e.blurb}
                  </p>
                </div>
                {e.link && (
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden items-center gap-1 self-start font-mono text-[10px] uppercase tracking-wider text-foreground hover:text-accent md:inline-flex"
                  >
                    Open <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* 02 — Photography */}
        <section id="photography" className="mb-24 scroll-mt-24">
          <MediaHeading
            icon={Camera}
            label="02 · Photography"
            title="Mostly quiet light."
            note={`${photos.length} frames`}
          />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {photos.map((p, i) => (
              <figure
                key={p.src}
                className={`group relative overflow-hidden border border-rule bg-muted/30 ${
                  i % 5 === 0
                    ? "col-span-2 row-span-2 aspect-square md:aspect-[4/5]"
                    : "aspect-square"
                }`}
              >
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-serif text-sm text-white">{p.caption}</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">
                    {[p.location, p.year].filter(Boolean).join(" · ")}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 03 — Music */}
        <section id="music" className="mb-24 scroll-mt-24">
          <MediaHeading
            icon={Music}
            label="03 · Music"
            title="Coming soon, slowly."
            note="demos in progress"
          />
          <ul className="divide-y divide-rule border-y border-rule">
            {tracks.map((t, i) => (
              <li key={t.title} className="flex items-center gap-4 py-5 md:gap-6">
                <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  disabled={t.status === "coming-soon"}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-rule text-foreground transition-colors hover:border-accent hover:text-accent disabled:opacity-40 disabled:hover:border-rule disabled:hover:text-foreground"
                  aria-label={`Play ${t.title}`}
                >
                  <Play className="h-3.5 w-3.5" fill="currentColor" />
                </button>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-serif text-lg text-foreground md:text-xl">{t.title}</h3>
                    {t.status === "coming-soon" && (
                      <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent">
                        · coming soon
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.blurb}</p>
                </div>
                <span className="hidden font-mono text-[10px] tabular-nums text-muted-foreground md:block">
                  {t.duration ?? "—:—"}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            recorded on a borrowed interface, mixed on cheap headphones.
          </p>
        </section>

        {/* 04 — Sketches */}
        <section id="sketches" className="mb-16 scroll-mt-24">
          <MediaHeading
            icon={Pencil}
            label="04 · Sketches"
            title="Pencil, ink, the occasional ballpoint."
            note={`${sketches.length} pieces`}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {sketches.map((s) => (
              <figure key={s.src} className="group">
                <div className="overflow-hidden border border-rule bg-muted/30">
                  <img
                    src={s.src}
                    alt={s.title}
                    loading="lazy"
                    className="h-72 w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 md:h-80"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                  <div>
                    <p className="font-serif text-base text-foreground">{s.title}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {s.medium}
                    </p>
                  </div>
                  {s.year && (
                    <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                      {s.year}
                    </span>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="mt-16 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <Link to="/" className="inline-flex items-center gap-2 hover:text-foreground">
            <ArrowLeft className="h-3 w-3" /> back to the front
          </Link>
          <span>· unlisted ·</span>
        </div>
      </div>
    </main>
  );
}
