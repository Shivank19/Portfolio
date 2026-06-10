export type Experience = {
  role: string;
  org: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Graduate Research Assistant",
    org: "Computational Genomics Lab",
    location: "University",
    start: "2024",
    end: "Present",
    bullets: [
      "Designed sparse-attention models for long protein sequences.",
      "Maintained shared compute pipelines used by 12+ lab members.",
    ],
  },
  {
    role: "Quantitative Research Intern",
    org: "Boutique Hedge Fund",
    location: "New York, NY",
    start: "Summer 2024",
    end: "",
    bullets: [
      "Built a regime-switching volatility model adopted by the equities desk.",
      "Wrote internal tooling for factor backtests on 20+ years of data.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Healthtech Startup",
    location: "Remote",
    start: "2022",
    end: "2023",
    bullets: [
      "Shipped a clinical data ingestion service handling >1M records/day.",
      "Led migration to a typed Python stack and CI-first workflow.",
    ],
  },
];

export type Education = {
  degree: string;
  school: string;
  start: string;
  end: string;
  detail: string;
};

export const education: Education[] = [
  {
    degree: "M.S. in Computer Science",
    school: "Your University",
    start: "2024",
    end: "2026 (expected)",
    detail: "Research focus: ML for finance and biology. GPA 3.9/4.0.",
  },
  {
    degree: "B.S. in Computer Science & Statistics",
    school: "Undergrad University",
    start: "2018",
    end: "2022",
    detail: "Minor in Molecular Biology. Honors thesis on sequence models.",
  },
];
