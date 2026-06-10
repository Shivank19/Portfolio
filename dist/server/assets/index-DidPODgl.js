import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { ArrowDown, Download, ArrowUpRight, X, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { p as projects } from "./projects-BL1zbMyK.js";
function useParallax(strength = 0.25) {
  const ref = useRef(null);
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
const profile = {
  name: "Shivank Sapra",
  role: "AI Researcher · Finance × Biotech",
  tagline: "Machine learning scientist building grounded AI systems for language, vision and scientific discovery.",
  location: "Minneapolis, MN",
  email: "sapra013@umn.edu",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/Shivank19",
    linkedin: "https://linkedin.com/in/shivank-sapra"
    // scholar: "https://scholar.google.com/",
  },
  about: [
    "I'm a Master's student in Computer Science at the University of Minnesota, Twin Cities, focused on the spaces where rigorous quantitative methods meet messy real-world data, markets and molecules in particular.",
    "My work spans machine learning, statistical modeling and software engineering. I enjoy building systems that move beyond prototypes: reproducible research pipelines, data-intensive applications and ML-driven tools that are designed to be used, not just published.",
    "More broadly, I'm interested in technologies that solve difficult problems rather than convenient ones. Whether that's understanding genomic data, modeling financial systems or building ML infrastructure, I like work that demands both mathematical rigor and engineering discipline.",
    "Outside of the lab, you'll find me reading about market structure, perfecting a cup of tea or occasionally disappearing into a good game."
  ]
};
function Hero() {
  const { ref, y } = useParallax(0.2);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref,
      id: "home",
      className: "relative flex min-h-screen w-full items-center overflow-hidden px-6",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 flex items-center justify-end pr-[-8rem] opacity-[0.10] dark:opacity-[0.16]",
            style: { transform: `translate3d(0, ${y}px, 0)` },
            children: /* @__PURE__ */ jsx(
              "span",
              {
                className: "font-serif text-[28rem] leading-none select-none bg-clip-text text-transparent",
                style: { backgroundImage: "var(--gradient-accent)" },
                children: "§"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-x-0 bottom-0 h-1/3",
            style: { background: "var(--gradient-soft)" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto w-full max-w-6xl", children: [
          /* @__PURE__ */ jsxs("p", { className: "mb-6 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground", children: [
            profile.location,
            " · available for research collaborations"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-balance font-serif text-5xl leading-[1.05] md:text-7xl lg:text-[5.5rem]", children: [
            profile.name,
            ".",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
              profile.role,
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl", children: profile.tagline }),
          /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-wrap items-center gap-4 text-sm md:gap-6", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#projects",
                className: "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium text-accent-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110",
                style: { backgroundImage: "var(--gradient-accent)" },
                children: [
                  "See selected work",
                  /* @__PURE__ */ jsx(ArrowDown, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: profile.resumeUrl,
                download: true,
                className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 font-medium text-foreground transition-colors hover:border-accent hover:text-accent",
                children: [
                  "Download résumé",
                  /* @__PURE__ */ jsx(Download, { className: "h-3.5 w-3.5" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `mailto:${profile.email}`,
                className: "underline-offset-4 hover:text-accent hover:underline",
                children: profile.email
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "scroll" })
      ]
    }
  );
}
function Section({ id, eyebrow, title, children, parallaxStrength = 0.18, bgGlyph: _bgGlyph }) {
  const { ref, y } = useParallax(parallaxStrength);
  const bgGlyph = /* @__PURE__ */ jsx(
    "span",
    {
      className: "font-serif text-[28rem] leading-none select-none bg-clip-text text-transparent",
      style: { backgroundImage: "var(--gradient-accent)" },
      children: "§"
    }
  );
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id,
      ref,
      className: "relative flex min-h-screen w-full snap-start items-center overflow-hidden px-6 py-24",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 flex items-center justify-end pr-[-8rem] opacity-[0.10] dark:opacity-[0.16]",
            style: { transform: `translate3d(0, ${y}px, 0)` },
            children: bgGlyph
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto w-full max-w-6xl", children: [
          (eyebrow || title) && /* @__PURE__ */ jsx("div", { className: "mb-12 flex items-end justify-between gap-6 border-b border-rule pb-6", children: /* @__PURE__ */ jsxs("div", { children: [
            eyebrow && /* @__PURE__ */ jsxs("p", { className: "mb-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  "aria-hidden": true,
                  className: "inline-block h-px w-6",
                  style: { background: "var(--gradient-accent)" }
                }
              ),
              eyebrow
            ] }),
            title && /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl", children: title })
          ] }) }),
          children
        ] })
      ]
    }
  );
}
function About() {
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "about",
      eyebrow: "01 — About",
      title: "A short story.",
      bgGlyph: /* @__PURE__ */ jsx("span", { className: "font-serif text-[24rem] leading-none", children: "¶" }),
      children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-5", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-5 text-justify text-lg leading-relaxed text-foreground/90 md:col-span-3", children: profile.about.map((p, i) => /* @__PURE__ */ jsx("p", { children: p }, i)) }),
        /* @__PURE__ */ jsx("aside", { className: "md:col-span-2 md:border-l md:border-rule md:pl-10", children: /* @__PURE__ */ jsxs("dl", { className: "space-y-5 font-mono text-xs uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("dt", { className: "mb-1", children: "Focus" }),
            /* @__PURE__ */ jsx("dd", { className: "text-foreground normal-case tracking-normal font-sans text-sm", children: "Quant finance · Computational biology · Statistical ML" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("dt", { className: "mb-1", children: "Currently" }),
            /* @__PURE__ */ jsx("dd", { className: "text-foreground normal-case tracking-normal font-sans text-sm", children: "M.S. CS · Graduate research" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("dt", { className: "mb-1", children: "Open to" }),
            /* @__PURE__ */ jsx("dd", { className: "text-foreground normal-case tracking-normal font-sans text-sm", children: "Research collaborations, Summer 2026 internships" })
          ] })
        ] }) })
      ] })
    }
  );
}
const domainColor = {
  Finance: "var(--color-domain-finance)",
  Biotech: "var(--color-domain-biotech)",
  ML: "var(--color-domain-ml)",
  Systems: "var(--color-domain-systems)"
};
function ProjectCard({ project }) {
  const tint = domainColor[project.domain];
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-md",
      style: { ["--tint"]: tint },
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": true,
            className: "absolute inset-x-0 top-0 h-[2px] opacity-70",
            style: { background: tint }
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between font-mono text-xs uppercase tracking-wider", children: [
            /* @__PURE__ */ jsxs(
              "span",
              {
                className: "inline-flex items-center gap-1.5",
                style: { color: tint },
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "inline-block h-1.5 w-1.5 rounded-full",
                      style: { background: tint }
                    }
                  ),
                  project.domain
                ]
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: project.year })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl leading-tight", children: project.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: project.summary })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: project.tech.map((t) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-[color:var(--tint)]/40",
              children: t
            },
            t
          )) }),
          project.links && project.links.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-4 flex gap-4 text-sm", children: project.links.map((l) => /* @__PURE__ */ jsxs(
            "a",
            {
              href: l.href,
              className: "inline-flex items-center gap-1 text-foreground underline-offset-4 hover:text-accent hover:underline",
              children: [
                l.label,
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3 w-3" })
              ]
            },
            l.label
          )) })
        ] })
      ]
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
function ProjectModal({
  project,
  open,
  onOpenChange
}) {
  if (!project) return null;
  const d = project.details;
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-h-[88vh] max-w-3xl overflow-y-auto border-border bg-background", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { className: "space-y-3 text-left", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { children: project.domain }),
        /* @__PURE__ */ jsx("span", { children: project.year })
      ] }),
      /* @__PURE__ */ jsx(DialogTitle, { className: "font-serif text-3xl leading-tight md:text-4xl", children: project.title }),
      /* @__PURE__ */ jsx(DialogDescription, { className: "text-base leading-relaxed text-muted-foreground", children: d?.overview ?? project.summary })
    ] }),
    d?.results && d.results.length > 0 && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3 border-y border-rule py-4", children: d.results.map((r) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "font-serif text-xl text-foreground md:text-2xl", children: r.value }),
      /* @__PURE__ */ jsx("div", { className: "mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: r.label })
    ] }, r.label)) }),
    d && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx(Block, { label: "Problem", children: d.problem }),
      /* @__PURE__ */ jsx(Block, { label: "Approach", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: d.approach.map((a, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm leading-relaxed text-foreground/90", children: [
        /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs text-accent", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsx("span", { children: a })
      ] }, i)) }) }),
      /* @__PURE__ */ jsx(Block, { label: "Outcomes", children: /* @__PURE__ */ jsx("ul", { className: "space-y-1.5 text-sm leading-relaxed text-foreground/90", children: d.outcomes.map((o, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-accent", children: "›" }),
        /* @__PURE__ */ jsx("span", { children: o })
      ] }, i)) }) }),
      /* @__PURE__ */ jsx(Block, { label: "What I learnt", children: /* @__PURE__ */ jsx("ul", { className: "space-y-1.5 text-sm italic leading-relaxed text-muted-foreground", children: d.learnings.map((l, i) => /* @__PURE__ */ jsxs("li", { children: [
        "— ",
        l
      ] }, i)) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-rule pt-4", children: [
      /* @__PURE__ */ jsx("h4", { className: "mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "Tech stack" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: project.tech.map((t) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
          children: t
        },
        t
      )) })
    ] }),
    project.links && project.links.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4 pt-2 text-sm", children: project.links.map((l) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: l.href,
        target: "_blank",
        rel: "noreferrer",
        className: "inline-flex items-center gap-1 text-foreground underline-offset-4 hover:text-accent hover:underline",
        children: [
          l.label,
          /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3 w-3" })
        ]
      },
      l.label
    )) })
  ] }) });
}
function Block({ label, children }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h4", { className: "mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("div", { className: "text-sm leading-relaxed text-foreground/90", children })
  ] });
}
function Projects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const [active, setActive] = useState(null);
  return /* @__PURE__ */ jsxs(
    Section,
    {
      id: "projects",
      eyebrow: "02 — Selected work",
      title: "Projects.",
      bgGlyph: /* @__PURE__ */ jsx("span", { className: "font-serif text-[22rem] leading-none", children: "∑" }),
      children: [
        /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2", children: featured.map((p) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setActive(p),
            className: "text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg",
            "aria-label": `Open details for ${p.title}`,
            children: /* @__PURE__ */ jsx(ProjectCard, { project: p })
          },
          p.slug
        )) }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 flex justify-end", children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/projects",
            className: "group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground hover:text-accent",
            children: [
              "See all projects",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(
          ProjectModal,
          {
            project: active,
            open: !!active,
            onOpenChange: (o) => !o && setActive(null)
          }
        )
      ]
    }
  );
}
const skills = [
  {
    group: "Languages",
    items: ["C++", "Python", "JavaScript", "C#"]
  },
  {
    group: "AI / ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "Reinforcement Learning",
      "OpenCV"
    ]
  },
  {
    group: "Generative + Multimodal",
    items: ["Natural Language Processing", "Computer Vision", "RAG", "Llama 3", "ChromaDB", "LLM Fine-tuning"]
  },
  {
    group: "Backend + Web",
    items: ["Flask", "Vue.js", "React.js", ".NET", "MVC Architecture", "D3.js", "Gradio", "REST APIs"]
  },
  {
    group: "Data + Tools",
    items: [
      "SQL",
      "PostgreSQL",
      "Firebase",
      "Git",
      "GitHub"
    ]
  }
];
function Skills() {
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "skills",
      eyebrow: "03 — Toolkit",
      title: "Skills.",
      bgGlyph: /* @__PURE__ */ jsx("span", { className: "font-serif text-[22rem] leading-none", children: "∂" }),
      children: /* @__PURE__ */ jsx("div", { className: "grid gap-10 md:grid-cols-2 lg:grid-cols-3", children: skills.map((g) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground", children: g.group }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: g.items.map((item) => /* @__PURE__ */ jsxs(
          "li",
          {
            className: "flex items-baseline justify-between border-b border-rule/60 pb-2 text-sm",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] text-muted-foreground", children: "·" })
            ]
          },
          item
        )) })
      ] }, g.group)) })
    }
  );
}
const experience = [
  {
    role: "Software Development Engineer",
    org: "Teleperformance",
    location: "India",
    start: "Nov 2023",
    end: "May 2025",
    bullets: [
      "Developed full-stack web applications tailored to diverse client requirements, utilizing C#, .NET Framework, MVC architecture, HTML, CSS and JavaScript.",
      "Optimized stored procedures in SQL Server by restructuring queries and leveraging indexing strategies, reducing processing times by ~50%. ",
      "Spearheaded the development of a collaborative real-time document editor, using ReactJS, TypeScript, Express, Socket.io and PostgreSQL, ensuring seamless synchronization."
    ]
  },
  {
    role: "Summer Intern",
    org: "GGSIPU USS ACM",
    location: "Delhi, India",
    start: "July 2022",
    end: "Sept 2022",
    bullets: [
      "Developed a decentralized system to mint academic credentials as NFTs on the Ethereum blockchain securely.",
      "Designed web interface (MERN stack, Web3.js) and smart contracts using Solidity to manage document uploads, NFT minting and wallet-based certificate transfers with guaranteed transparency."
    ]
  },
  {
    role: "Software Development Engineer Intern",
    org: "Teleperformance",
    location: "India",
    start: "Dec 2021",
    end: "April 2022",
    bullets: [
      "Developed a Face Recognition-Based Attendance System, with Django and OpenCV, to create a dynamic web application for seamless attendance management.",
      "Integrated role-based access control with Admin and User Logins, enabling personalized dashboards and secure data access."
    ]
  },
  {
    role: "Machine Learning Intern",
    org: "GGSIPU USS ACM",
    location: "Delhi, India",
    start: "Aug 2021",
    end: "Sept 2021",
    bullets: [
      "Developed a Real-time Drowsiness Detection System leveraging computer vision and deep learning techniques to enhance road safety by alerting drivers showing signs of fatigue.",
      "Implemented face and eye detection using OpenCV and Haar Cascade Classifiers, leveraging the Viola-Jones algorithm to implement robust face and eye region detection in real-time from live video streams.",
      "Designed and trained a stacked deep convolutional neural network (CNN) and employed MobileNet for transfer learning to extract dynamic features from keyframes in video sequences.",
      "Integrated a Sigmoid classifier layer in the CNN architecture to predict the driver’s state as drowsy or alert, triggering an alarm when drowsiness was detected continuously."
    ]
  }
];
const education = [
  {
    degree: "M.S. in Computer Science",
    school: "University of Minnesota - Twin Cities",
    start: "2025",
    end: "2027 (expected)",
    detail: "Research focus: ML for finance and biology. GPA 4.0/4.0."
  },
  {
    degree: "B.Tech in Computer Science",
    school: "Guru Gobind Singh Indraprastha University",
    start: "2019",
    end: "2023",
    detail: "GPA 8.87/10.00"
  }
];
function ExperienceSection() {
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "experience",
      eyebrow: "04 — Timeline",
      title: "Experience & education.",
      bgGlyph: /* @__PURE__ */ jsx("span", { className: "font-serif text-[22rem] leading-none", children: "†" }),
      children: /* @__PURE__ */ jsxs("div", { className: "grid gap-16 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground", children: "Experience" }),
          /* @__PURE__ */ jsx("ol", { className: "relative space-y-8 border-l border-rule pl-6", children: experience.map((e) => /* @__PURE__ */ jsxs("li", { className: "relative", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute -left-[27px] top-2 h-2 w-2 rounded-full bg-accent" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-serif text-xl", children: e.role }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: [
                e.start,
                e.end ? ` — ${e.end}` : ""
              ] })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
              e.org,
              " · ",
              e.location
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-1.5 text-sm text-foreground/85", children: e.bullets.map((b, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "—" }),
              /* @__PURE__ */ jsx("span", { children: b })
            ] }, i)) })
          ] }, e.org)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground", children: "Education" }),
          /* @__PURE__ */ jsx("ol", { className: "relative space-y-8 border-l border-rule pl-6", children: education.map((ed) => /* @__PURE__ */ jsxs("li", { className: "relative", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute -left-[27px] top-2 h-2 w-2 rounded-full bg-accent" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-serif text-xl", children: ed.degree }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: [
                ed.start,
                " — ",
                ed.end
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: ed.school }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-foreground/85", children: ed.detail })
          ] }, ed.degree)) })
        ] })
      ] })
    }
  );
}
function Contact() {
  return /* @__PURE__ */ jsxs(
    Section,
    {
      id: "contact",
      eyebrow: "05 — Get in touch",
      title: "Let's talk.",
      bgGlyph: /* @__PURE__ */ jsx("span", { className: "font-serif text-[24rem] leading-none", children: "@" }),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-3", children: [
            /* @__PURE__ */ jsx("p", { className: "max-w-xl text-lg leading-relaxed text-foreground/90", children: "I'm always happy to chat about quantitative finance, computational biology, graduate research or unusual problems that sit between fields. The fastest way to reach me is email." }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `mailto:${profile.email}`,
                className: "mt-8 inline-block font-serif text-3xl text-foreground underline-offset-8 hover:text-accent hover:underline md:text-5xl",
                children: profile.email
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 md:border-l md:border-rule md:pl-10", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground", children: "Elsewhere" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: Object.entries(profile.socials).map(([k, v]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: v,
                className: "group inline-flex items-center gap-2 text-foreground hover:text-accent",
                target: "_blank",
                rel: "noreferrer",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "capitalize", children: k }),
                  /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
                ]
              }
            ) }, k)) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("footer", { className: "mt-24 flex items-center justify-between border-t border-rule pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: /* @__PURE__ */ jsxs("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ",
          profile.name
        ] }) })
      ]
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "relative", children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(ExperienceSection, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
}
export {
  Index as component
};
