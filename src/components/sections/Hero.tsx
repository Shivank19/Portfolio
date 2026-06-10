import { useParallax } from "@/lib/parallax";
import { profile } from "@/data/profile";
import { ArrowDown, Download } from "lucide-react";

export function Hero() {
  const { ref, y } = useParallax(0.2);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden px-6"
    >
      {/* parallax background mark with gradient tint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-end pr-[-8rem] opacity-[0.10] dark:opacity-[0.16]"
        style={{ transform: `translate3d(0, ${y}px, 0)` }}
      >
        <span
          className="font-serif text-[28rem] leading-none select-none bg-clip-text text-transparent"
          style={{ backgroundImage: "var(--gradient-accent)" }}
        >
          §
        </span>
      </div>
      {/* soft accent wash at the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
        style={{ background: "var(--gradient-soft)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
          {profile.location} · available for research collaborations
        </p>
        <h1 className="text-balance font-serif text-5xl leading-[1.05] md:text-7xl lg:text-[5.5rem]">
          {profile.name}.
          <br />
          <span className="text-muted-foreground">{profile.role}.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {profile.tagline}
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4 text-sm md:gap-6">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium text-accent-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110"
            style={{ backgroundImage: "var(--gradient-accent)" }}
          >
            See selected work
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Download résumé
            <Download className="h-3.5 w-3.5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="underline-offset-4 hover:text-accent hover:underline"
          >
            {profile.email}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        scroll
      </div>
    </section>
  );
}
