import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Name — MSCS Researcher · Finance × Biotech" },
      {
        name: "description",
        content:
          "Personal portfolio of a research-oriented MSCS student working at the intersection of quantitative finance and biotechnology.",
      },
      { property: "og:title", content: "Your Name — MSCS Researcher" },
      {
        property: "og:description",
        content: "Quantitative finance and computational biology research.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ExperienceSection />
      <Contact />
    </main>
  );
}
