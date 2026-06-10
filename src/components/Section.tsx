import type { ReactNode } from "react";
import { useParallax } from "@/lib/parallax";

type Props = {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  parallaxStrength?: number;
  bgGlyph?: ReactNode;
};

export function Section({ id, eyebrow, title, children, parallaxStrength = 0.18, bgGlyph: _bgGlyph }: Props) {
  const { ref, y } = useParallax(parallaxStrength);
  const bgGlyph = (
    <span
      className="font-serif text-[28rem] leading-none select-none bg-clip-text text-transparent"
      style={{ backgroundImage: "var(--gradient-accent)" }}
    >
      §
    </span>
  );

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className="relative flex min-h-screen w-full snap-start items-center overflow-hidden px-6 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-end pr-[-8rem] opacity-[0.10] dark:opacity-[0.16]"
        style={{ transform: `translate3d(0, ${y}px, 0)` }}
      >
        {bgGlyph}
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {(eyebrow || title) && (
          <div className="mb-12 flex items-end justify-between gap-6 border-b border-rule pb-6">
            <div>
              {eyebrow && (
                <p className="mb-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span
                    aria-hidden
                    className="inline-block h-px w-6"
                    style={{ background: "var(--gradient-accent)" }}
                  />
                  {eyebrow}
                </p>
              )}
              {title && <h2 className="font-serif text-4xl md:text-5xl">{title}</h2>}
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
