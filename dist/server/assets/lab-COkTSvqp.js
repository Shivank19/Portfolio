import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Pencil, ArrowUpRight, Camera, Music, Play, ArrowLeft } from "lucide-react";
const labEntries = [
  {
    title: "Brewing latency log",
    kind: "hobby",
    blurb: "Eighteen months of pour-over data: grind size, bloom time, TDS. Yes, there's a Jupyter notebook. No, it hasn't made the coffee better.",
    year: "ongoing"
  },
  {
    title: "Tiny GP from scratch",
    kind: "experiment",
    blurb: "A 200-line Gaussian process implementation in NumPy, mostly to convince myself I really understood the kernel trick.",
    year: "2024",
    link: "#"
  },
  {
    title: "Reading notes: market microstructure",
    kind: "writing",
    blurb: "Rolling notes on O'Hara, Hasbrouck, and friends — written like letters to my past self.",
    year: "ongoing",
    link: "#"
  },
  {
    title: "Origami protein models",
    kind: "hobby",
    blurb: "Folded paper versions of small proteins I work with. Useful as desk toys, possibly useful as teaching aids."
  },
  {
    title: "Generative ECG sketches",
    kind: "experiment",
    blurb: "Plotting synthetic ECG traces as ink-like line art. Half art project, half excuse to learn more about signal priors.",
    year: "2024"
  },
  {
    title: "Bookshelf, currently",
    kind: "curio",
    blurb: "Stoner (Williams), The Man Who Solved the Market (Zuckerman), Molecular Biology of the Cell. A weird stack, on purpose."
  },
  {
    title: "Chess by mail",
    kind: "hobby",
    blurb: "A correspondence game with a friend in another timezone. We're on move 41 and it's been almost a year."
  },
  {
    title: "Field recordings",
    kind: "curio",
    blurb: "A small collection of ambient recordings from train stations, libraries, and one very rainy bus stop in Edinburgh."
  }
];
const photos = [
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=70",
    caption: "Late light, open fields",
    location: "Somewhere upstate",
    year: "2024"
  },
  {
    src: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=70",
    caption: "Fog over the bridge",
    location: "Edinburgh",
    year: "2023"
  },
  {
    src: "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?auto=format&fit=crop&w=1200&q=70",
    caption: "Quiet station, 6:14am",
    location: "Kyoto",
    year: "2023"
  },
  {
    src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=70",
    caption: "Salt flats, midday",
    location: "Rann of Kutch",
    year: "2022"
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=70",
    caption: "Window seat, descending",
    year: "2024"
  },
  {
    src: "https://images.unsplash.com/photo-1490604001847-b712b0c2f967?auto=format&fit=crop&w=1200&q=70",
    caption: "Pines after rain",
    location: "Cascades",
    year: "2023"
  }
];
const tracks = [
  {
    title: "Untitled (No. 1)",
    status: "coming-soon",
    blurb: "Ambient piano sketch. Slow chords, a little tape hiss.",
    duration: "—:—"
  },
  {
    title: "Microstructure",
    status: "coming-soon",
    blurb: "Generative loops built from order-book tick data. Don't ask.",
    duration: "—:—"
  },
  {
    title: "Lab Hours",
    status: "coming-soon",
    blurb: "A long-form drone meant for 2am writing sessions.",
    duration: "—:—"
  }
];
const sketches = [
  {
    src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=70",
    title: "Hands, studies",
    medium: "Graphite on cartridge paper",
    year: "2024"
  },
  {
    src: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&w=900&q=70",
    title: "Coffee shop, two figures",
    medium: "Ink, fountain pen",
    year: "2024"
  },
  {
    src: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=900&q=70",
    title: "Folded protein, from memory",
    medium: "Ballpoint",
    year: "2023"
  },
  {
    src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=70",
    title: "Tree, half-finished",
    medium: "Charcoal",
    year: "2023"
  }
];
const kindLabel = {
  experiment: "Experiment",
  hobby: "Hobby",
  writing: "Writing",
  curio: "Curio"
};
function MediaHeading({
  icon: Icon,
  label,
  title,
  note
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-8 flex items-end justify-between gap-6 border-b border-rule pb-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("p", { className: "mb-2 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "inline-block h-px w-6", style: {
          background: "var(--gradient-accent)"
        } }),
        /* @__PURE__ */ jsx(Icon, { className: "h-3 w-3" }),
        label
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-4xl", children: title })
    ] }),
    note && /* @__PURE__ */ jsx("p", { className: "hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:block", children: note })
  ] });
}
function LabPage() {
  return /* @__PURE__ */ jsx("main", { className: "min-h-screen px-6 pb-24 pt-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 font-mono text-xs uppercase tracking-[0.22em] text-accent", children: "↑↑↓↓←→←→ B A · you found it" }),
      /* @__PURE__ */ jsx("h1", { className: "font-serif text-5xl leading-[1.05] md:text-7xl", children: "The Lab." }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground", children: "A quieter corner of the site. Side experiments, hobbies, reading notes, photographs, music, and the occasional sketch — things I make when no one is grading me. Nothing here is polished; that's kind of the point." })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "mb-20 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: [
      /* @__PURE__ */ jsx("a", { href: "#notes", className: "hover:text-foreground", children: "01 · Notes" }),
      /* @__PURE__ */ jsx("a", { href: "#photography", className: "hover:text-foreground", children: "02 · Photography" }),
      /* @__PURE__ */ jsx("a", { href: "#music", className: "hover:text-foreground", children: "03 · Music" }),
      /* @__PURE__ */ jsx("a", { href: "#sketches", className: "hover:text-foreground", children: "04 · Sketches" })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "notes", className: "mb-24 scroll-mt-24", children: [
      /* @__PURE__ */ jsx(MediaHeading, { icon: Pencil, label: "01 · Notes", title: "Writing, hobbies, half-experiments." }),
      /* @__PURE__ */ jsx("ul", { className: "divide-y divide-rule border-y border-rule", children: labEntries.map((e) => /* @__PURE__ */ jsxs("li", { className: "grid grid-cols-[auto_1fr] gap-6 py-6 md:grid-cols-[10rem_1fr_auto] md:gap-10", children: [
        /* @__PURE__ */ jsxs("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:pt-1", children: [
          kindLabel[e.kind],
          e.year ? ` · ${e.year}` : ""
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl text-foreground md:text-2xl", children: e.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground", children: e.blurb })
        ] }),
        e.link && /* @__PURE__ */ jsxs("a", { href: e.link, target: "_blank", rel: "noreferrer", className: "hidden items-center gap-1 self-start font-mono text-[10px] uppercase tracking-wider text-foreground hover:text-accent md:inline-flex", children: [
          "Open ",
          /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3 w-3" })
        ] })
      ] }, e.title)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "photography", className: "mb-24 scroll-mt-24", children: [
      /* @__PURE__ */ jsx(MediaHeading, { icon: Camera, label: "02 · Photography", title: "Mostly quiet light.", note: `${photos.length} frames` }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4", children: photos.map((p, i) => /* @__PURE__ */ jsxs("figure", { className: `group relative overflow-hidden border border-rule bg-muted/30 ${i % 5 === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-[4/5]" : "aspect-square"}`, children: [
        /* @__PURE__ */ jsx("img", { src: p.src, alt: p.caption, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" }),
        /* @__PURE__ */ jsxs("figcaption", { className: "pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100", children: [
          /* @__PURE__ */ jsx("p", { className: "font-serif text-sm text-white", children: p.caption }),
          /* @__PURE__ */ jsx("p", { className: "font-mono text-[9px] uppercase tracking-[0.2em] text-white/70", children: [p.location, p.year].filter(Boolean).join(" · ") })
        ] })
      ] }, p.src)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "music", className: "mb-24 scroll-mt-24", children: [
      /* @__PURE__ */ jsx(MediaHeading, { icon: Music, label: "03 · Music", title: "Coming soon, slowly.", note: "demos in progress" }),
      /* @__PURE__ */ jsx("ul", { className: "divide-y divide-rule border-y border-rule", children: tracks.map((t, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-4 py-5 md:gap-6", children: [
        /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] tabular-nums text-muted-foreground", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsx("button", { type: "button", disabled: t.status === "coming-soon", className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-rule text-foreground transition-colors hover:border-accent hover:text-accent disabled:opacity-40 disabled:hover:border-rule disabled:hover:text-foreground", "aria-label": `Play ${t.title}`, children: /* @__PURE__ */ jsx(Play, { className: "h-3.5 w-3.5", fill: "currentColor" }) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-baseline gap-x-3", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg text-foreground md:text-xl", children: t.title }),
            t.status === "coming-soon" && /* @__PURE__ */ jsx("span", { className: "font-mono text-[9px] uppercase tracking-[0.22em] text-accent", children: "· coming soon" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: t.blurb })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "hidden font-mono text-[10px] tabular-nums text-muted-foreground md:block", children: t.duration ?? "—:—" })
      ] }, t.title)) }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "recorded on a borrowed interface, mixed on cheap headphones." })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "sketches", className: "mb-16 scroll-mt-24", children: [
      /* @__PURE__ */ jsx(MediaHeading, { icon: Pencil, label: "04 · Sketches", title: "Pencil, ink, the occasional ballpoint.", note: `${sketches.length} pieces` }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: sketches.map((s) => /* @__PURE__ */ jsxs("figure", { className: "group", children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden border border-rule bg-muted/30", children: /* @__PURE__ */ jsx("img", { src: s.src, alt: s.title, loading: "lazy", className: "h-72 w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 md:h-80" }) }),
        /* @__PURE__ */ jsxs("figcaption", { className: "mt-3 flex items-baseline justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-serif text-base text-foreground", children: s.title }),
            /* @__PURE__ */ jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: s.medium })
          ] }),
          s.year && /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] tabular-nums text-muted-foreground", children: s.year })
        ] })
      ] }, s.src)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 hover:text-foreground", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-3 w-3" }),
        " back to the front"
      ] }),
      /* @__PURE__ */ jsx("span", { children: "· unlisted ·" })
    ] })
  ] }) });
}
export {
  LabPage as component
};
