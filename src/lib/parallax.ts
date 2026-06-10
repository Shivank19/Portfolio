import { useEffect, useRef, useState } from "react";

/**
 * Subtle scroll parallax. Returns a ref to attach to a section and a y offset
 * (in px) you can apply to a child via translateY().
 */
export function useParallax(strength = 0.25) {
  const ref = useRef<HTMLElement | null>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // distance of section center from viewport center, normalized
        const center = rect.top + rect.height / 2 - vh / 2;
        setY(-center * strength);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return { ref, y };
}
