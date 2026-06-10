import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { p as projects } from "./projects-BL1zbMyK.js";
import { ChevronDown } from "lucide-react";
const domainColor = {
  Finance: "var(--color-domain-finance)",
  Biotech: "var(--color-domain-biotech)",
  ML: "var(--color-domain-ml)",
  Systems: "var(--color-domain-systems)"
};
function AllProjects() {
  const stats = useMemo(() => {
    const domains = /* @__PURE__ */ new Set();
    const tech = /* @__PURE__ */ new Set();
    projects.forEach((project) => {
      domains.add(project.domain);
      project.tech.forEach((item) => tech.add(item));
    });
    return [{
      value: projects.length,
      label: "Total projects"
    }, {
      value: projects.filter((project) => project.featured).length,
      label: "Featured projects"
    }, {
      value: domains.size,
      label: "Domains"
    }, {
      value: tech.size,
      label: "Technologies"
    }];
  }, []);
  const [open, setOpen] = useState(() => /* @__PURE__ */ new Set());
  function toggle(slug) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }
  return /* @__PURE__ */ jsx("main", { className: "min-h-screen bg-[radial-gradient(circle_at_12%_8%,color-mix(in_oklab,var(--accent)_8%,transparent),transparent_28rem),linear-gradient(180deg,var(--background)_0%,color-mix(in_oklab,var(--muted)_45%,var(--background))_42rem)] px-4 pb-20 pt-16 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-[1120px]", children: [
    /* @__PURE__ */ jsxs("header", { className: "grid gap-7 border-b border-rule pb-9", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent", children: "Project archive" }),
        /* @__PURE__ */ jsx("h1", { className: "max-w-[820px] font-serif text-[clamp(2.8rem,7vw,6rem)] leading-[0.95]", children: "Portfolio projects, fully expanded on demand." }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-[690px] text-[1.08rem] leading-relaxed text-muted-foreground", children: "A single-page showcase of every project in the portfolio dataset. Each project is a toggle and each expanded view contains only the fields available for that project." })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4", "aria-label": "Project archive statistics", children: stats.map((stat) => /* @__PURE__ */ jsxs("div", { className: "min-h-24 rounded-lg border border-border bg-card/75 p-4", children: [
        /* @__PURE__ */ jsx("strong", { className: "block font-serif text-3xl font-normal", children: stat.value }),
        /* @__PURE__ */ jsx("span", { className: "mt-1.5 block text-sm text-muted-foreground", children: stat.label })
      ] }, stat.label)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-10 flex flex-col gap-3 border-b border-border/70 bg-background/90 py-4 backdrop-blur md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsxs("p", { className: "font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted-foreground", children: [
        "Showing all ",
        projects.length,
        " projects"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setOpen(new Set(projects.map((project) => project.slug))), className: "min-h-8 rounded-full border border-border bg-card px-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] transition-colors hover:border-accent focus-visible:border-accent focus-visible:outline-none", children: "Open all" }),
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setOpen(/* @__PURE__ */ new Set()), className: "min-h-8 rounded-full border border-border bg-card px-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] transition-colors hover:border-accent focus-visible:border-accent focus-visible:outline-none", children: "Close all" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "grid gap-3.5 pt-5", "aria-label": "Projects", children: projects.map((project) => /* @__PURE__ */ jsx(ProjectToggle, { project, open: open.has(project.slug), onToggle: () => toggle(project.slug) }, project.slug)) })
  ] }) });
}
function ProjectToggle({
  project,
  open,
  onToggle
}) {
  const d = project.details;
  const tint = domainColor[project.domain];
  return /* @__PURE__ */ jsxs("article", { className: "overflow-hidden rounded-lg border border-border bg-card shadow-[0_22px_52px_color-mix(in_oklab,var(--foreground)_6%,transparent)]", style: {
    ["--tint"]: tint
  }, children: [
    /* @__PURE__ */ jsxs("button", { type: "button", "aria-expanded": open, "aria-controls": project.slug, onClick: onToggle, className: "grid w-full grid-cols-1 items-center gap-4 border-0 border-t-[3px] border-[color:var(--tint)] bg-transparent p-5 text-left text-foreground md:grid-cols-[minmax(0,1fr)_auto] md:p-6", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsxs("span", { className: "mb-2 flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full", style: {
            backgroundColor: tint
          }, "aria-hidden": true }),
          /* @__PURE__ */ jsxs("span", { className: "font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground", children: [
            project.domain,
            " / ",
            project.year,
            " / ",
            project.featured ? "Featured" : "Not featured"
          ] })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-[clamp(1.55rem,3vw,2.35rem)] leading-[1.08]", children: project.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2.5 max-w-[780px] text-[0.98rem] leading-relaxed text-muted-foreground", children: project.summary })
      ] }),
      /* @__PURE__ */ jsx("span", { className: `grid h-9 w-9 place-items-center rounded-full border text-[color:var(--tint)] transition-transform ${open ? "rotate-180 border-[color:var(--tint)]" : "border-border"}`, "aria-hidden": true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" }) })
    ] }),
    open && /* @__PURE__ */ jsxs("div", { id: project.slug, className: "px-5 pb-5 md:px-6 md:pb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 border-t border-rule pt-5 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx(Field, { label: "Slug", children: /* @__PURE__ */ jsx("p", { className: "break-words font-mono", children: project.slug }) }),
        /* @__PURE__ */ jsx(Field, { label: "Tech", children: /* @__PURE__ */ jsx(Tags, { items: project.tech }) }),
        project.links && project.links.length > 0 && /* @__PURE__ */ jsx(Field, { label: "Links", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: project.links.map((link) => /* @__PURE__ */ jsx("a", { href: link.href, className: "inline-flex min-h-8 items-center rounded-full border border-[color:color-mix(in_oklab,var(--tint)_35%,var(--border))] px-3 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[color:var(--tint)] no-underline transition-colors hover:bg-[color:color-mix(in_oklab,var(--tint)_8%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", children: link.label }, link.label)) }) }),
        /* @__PURE__ */ jsx(Field, { label: "Featured", children: /* @__PURE__ */ jsx("p", { children: String(project.featured) }) })
      ] }),
      d && /* @__PURE__ */ jsxs("div", { className: "mt-5 grid gap-5 border-t border-rule pt-5", children: [
        /* @__PURE__ */ jsx("p", { className: "max-w-[890px] text-[1.02rem] leading-relaxed", children: d.overview }),
        d.results && d.results.length > 0 && /* @__PURE__ */ jsx("div", { className: "grid gap-2.5 md:grid-cols-3", children: d.results.map((result) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-border bg-muted p-3.5", children: [
          /* @__PURE__ */ jsx("strong", { className: "block font-serif text-2xl font-normal text-[color:var(--tint)]", children: result.value }),
          /* @__PURE__ */ jsx("span", { className: "mt-1 block text-sm text-muted-foreground", children: result.label })
        ] }, result.label)) }),
        /* @__PURE__ */ jsx(DetailBlock, { label: "Problem", children: d.problem }),
        /* @__PURE__ */ jsx(DetailBlock, { label: "Approach", ordered: true, children: d.approach.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) }),
        /* @__PURE__ */ jsx(DetailBlock, { label: "Outcomes", children: d.outcomes.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) }),
        /* @__PURE__ */ jsx(DetailBlock, { label: "Learnings", children: d.learnings.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) })
      ] })
    ] })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
    /* @__PURE__ */ jsx("p", { className: "mb-2 font-mono text-[0.66rem] font-bold uppercase tracking-[0.14em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("div", { className: "text-sm leading-relaxed text-foreground", children })
  ] });
}
function Tags({
  items
}) {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: items.map((item) => /* @__PURE__ */ jsx("span", { className: "inline-flex min-h-6 items-center rounded-full border border-border px-2.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground", children: item }, item)) });
}
function DetailBlock({
  label,
  children,
  ordered = false
}) {
  const List = ordered ? "ol" : "ul";
  const content = typeof children === "string" ? /* @__PURE__ */ jsx("p", { className: "m-0 leading-relaxed", children }) : /* @__PURE__ */ jsx(List, { className: "m-0 space-y-2 pl-5 leading-relaxed", children });
  return /* @__PURE__ */ jsxs("section", { className: "grid gap-3 md:grid-cols-[0.65fr_1fr] md:gap-5", children: [
    /* @__PURE__ */ jsx("p", { className: "font-mono text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[color:var(--tint)]", children: label }),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-foreground", children: content })
  ] });
}
export {
  AllProjects as component
};
