import React, { useState } from 'react';
import { Download } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import myPic from '../assets/me2.jpg';
import resumePdf from '../assets/Shivank Sapra - Resume.pdf';

interface AboutSectionProps {
  onImageClick: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = () => {
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <section id="about" className="relative min-h-screen overflow-hidden bg-transparent px-4 py-20">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 border-b border-app-border-primary pb-8">
          <ScrollReveal direction="up" delay={200}>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary-600">Profile</p>
            <h2 className="text-5xl leading-none text-app-text-primary md:text-7xl">
              About Me
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400}>
            <a
              href={resumePdf}
              download="Shivank Sapra - Resume.pdf"
              className="btn-readable-primary mt-6 flex w-fit items-center space-x-2 rounded-full px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </ScrollReveal>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <ScrollReveal direction="left" delay={600}>
              <div className="space-y-4 rounded-lg border border-app-border-primary bg-app-bg-secondary p-6 text-base leading-relaxed text-app-text-tertiary shadow-2xl shadow-[rgb(var(--color-shadow-primary)/0.04)] md:p-8">
                <p>
                  <strong>The TL;DR</strong> I'm a graduate student at The University of Minnesota, Twin Cities, an ex-SDE, and a builder of ML-driven systems. I thrive at the intersection of heavy-duty software engineering and exploratory data science.
                </p>
                <p>
                  <strong>What I'm Doing Now</strong> After about 1.5 years in the industry as a Software Development Engineer, I returned to academia to sharpen my focus on AI and ML. My current research and coursework involve:
                </p>
                <ul className="my-4 ml-4 list-inside list-disc space-y-1">
                  <li>Bioinformatics: Using ML to solve problems in the genomic space.</li>
                  <li>Computer Vision: Developing real-time scoring and detection pipelines.</li>
                  <li>Financial Mathematics: Exploring the intersection of code and capital.</li>
                </ul>
                <p>
                  <strong>The Vision</strong> I don't just want to build "apps", I want to build engines. Whether that is a low-latency execution strategy for a quant firm or a predictive model for genomic sequencing, I am interested in tech that solves the "hard" problems. I believe the next decade of innovation belongs to those who can translate complex mathematical models into production-ready software.
                </p>
                <p>
                  <strong>Outside the IDE</strong>, you'll find me brewing fresh tea, behind the wheel, or catching up on the latest in gaming and sports.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center md:text-right">
            <ScrollReveal direction="right" delay={800}>
              <div
                className="relative mb-8 inline-block group"
                onMouseEnter={() => setImageHovered(true)}
                onMouseLeave={() => setImageHovered(false)}
              >
                <div className="h-[28rem] w-80 rounded-lg border border-app-border-primary bg-app-bg-secondary p-2 shadow-2xl shadow-[rgb(var(--color-shadow-primary)/0.08)] transition-all duration-300 group-hover:-translate-y-1">
                  <div className="h-full w-full overflow-hidden rounded-md bg-app-bg-primary">
                    <img
                      src={myPic}
                      alt="About Me"
                      className={`h-full w-full object-cover transition-all duration-500 ${imageHovered ? 'scale-110' : 'scale-100'}`}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
