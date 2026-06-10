export type LabEntry = {
  title: string;
  kind: "experiment" | "hobby" | "writing" | "curio";
  blurb: string;
  year?: string;
  link?: string;
};

export const labEntries: LabEntry[] = [
  {
    title: "Brewing latency log",
    kind: "hobby",
    blurb:
      "Eighteen months of pour-over data: grind size, bloom time, TDS. Yes, there's a Jupyter notebook. No, it hasn't made the coffee better.",
    year: "ongoing",
  },
  {
    title: "Tiny GP from scratch",
    kind: "experiment",
    blurb:
      "A 200-line Gaussian process implementation in NumPy, mostly to convince myself I really understood the kernel trick.",
    year: "2024",
    link: "#",
  },
  {
    title: "Reading notes: market microstructure",
    kind: "writing",
    blurb:
      "Rolling notes on O'Hara, Hasbrouck, and friends — written like letters to my past self.",
    year: "ongoing",
    link: "#",
  },
  {
    title: "Origami protein models",
    kind: "hobby",
    blurb:
      "Folded paper versions of small proteins I work with. Useful as desk toys, possibly useful as teaching aids.",
  },
  {
    title: "Generative ECG sketches",
    kind: "experiment",
    blurb:
      "Plotting synthetic ECG traces as ink-like line art. Half art project, half excuse to learn more about signal priors.",
    year: "2024",
  },
  {
    title: "Bookshelf, currently",
    kind: "curio",
    blurb:
      "Stoner (Williams), The Man Who Solved the Market (Zuckerman), Molecular Biology of the Cell. A weird stack, on purpose.",
  },
  {
    title: "Chess by mail",
    kind: "hobby",
    blurb:
      "A correspondence game with a friend in another timezone. We're on move 41 and it's been almost a year.",
  },
  {
    title: "Field recordings",
    kind: "curio",
    blurb:
      "A small collection of ambient recordings from train stations, libraries, and one very rainy bus stop in Edinburgh.",
  },
];

// ---------- Media: Photography ----------

export type Photo = {
  src: string;       // image URL (replace with your own)
  caption: string;
  location?: string;
  year?: string;
};

export const photos: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=70",
    caption: "Late light, open fields",
    location: "Somewhere upstate",
    year: "2024",
  },
  {
    src: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=70",
    caption: "Fog over the bridge",
    location: "Edinburgh",
    year: "2023",
  },
  {
    src: "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?auto=format&fit=crop&w=1200&q=70",
    caption: "Quiet station, 6:14am",
    location: "Kyoto",
    year: "2023",
  },
  {
    src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=70",
    caption: "Salt flats, midday",
    location: "Rann of Kutch",
    year: "2022",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=70",
    caption: "Window seat, descending",
    year: "2024",
  },
  {
    src: "https://images.unsplash.com/photo-1490604001847-b712b0c2f967?auto=format&fit=crop&w=1200&q=70",
    caption: "Pines after rain",
    location: "Cascades",
    year: "2023",
  },
];

// ---------- Media: Music ----------

export type Track = {
  title: string;
  status: "coming-soon" | "demo" | "released";
  blurb: string;
  duration?: string;
  link?: string;
};

export const tracks: Track[] = [
  {
    title: "Untitled (No. 1)",
    status: "coming-soon",
    blurb: "Ambient piano sketch. Slow chords, a little tape hiss.",
    duration: "—:—",
  },
  {
    title: "Microstructure",
    status: "coming-soon",
    blurb: "Generative loops built from order-book tick data. Don't ask.",
    duration: "—:—",
  },
  {
    title: "Lab Hours",
    status: "coming-soon",
    blurb: "A long-form drone meant for 2am writing sessions.",
    duration: "—:—",
  },
];

// ---------- Media: Sketches ----------

export type Sketch = {
  src: string;
  title: string;
  medium: string;
  year?: string;
};

export const sketches: Sketch[] = [
  {
    src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=70",
    title: "Hands, studies",
    medium: "Graphite on cartridge paper",
    year: "2024",
  },
  {
    src: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&w=900&q=70",
    title: "Coffee shop, two figures",
    medium: "Ink, fountain pen",
    year: "2024",
  },
  {
    src: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=900&q=70",
    title: "Folded protein, from memory",
    medium: "Ballpoint",
    year: "2023",
  },
  {
    src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=70",
    title: "Tree, half-finished",
    medium: "Charcoal",
    year: "2023",
  },
];
