import React, { useState, useEffect } from 'react';
import { Code, Palette, Camera, Zap, Download } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import myPic from '../assets/me2.jpg'
import resumePdf from '../assets/Shivank Sapra - Resume.pdf';

interface AboutSectionProps {
  onImageClick: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onImageClick }) => {
  const [imageHovered, setImageHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { icon: Code, name: 'Development', desc: 'React, Node.js, Python' },
    { icon: Palette, name: 'Design', desc: 'UI/UX, Figma, Adobe Suite' },
    { icon: Camera, name: 'Photography', desc: 'Digital, Portrait, Landscape' },
    { icon: Zap, name: 'Innovation', desc: 'AI/ML, Creative Coding' },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-gradient-to-b from-primary-900/20 to-accent-900/30 relative overflow-hidden">
      {/* Subtle background elements */}
      <div
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary-600/10 to-accent-600/10 blur-xl"
        style={{
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      />
      <div
        className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-accent-600/8 to-highlight-600/8 blur-lg"
        style={{
          transform: `translateY(${scrollY * -0.015}px)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal direction="up" delay={200}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary-accent">
              About Me
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400}>
            <a
              href={resumePdf}
              download="Shivank Sapra - Resume.pdf"
              className="flex items-center space-x-2 mx-auto px-6 py-3 bg-primary-800 hover:bg-primary-900 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary w-fit"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <ScrollReveal direction="left" delay={600}>
              <div className="text-lg text-app-text-tertiary leading-relaxed space-y-4">
                <p>
                  <strong>The TL;DR</strong> I’m a graduate student at The University of Minnesota, Twin Cities, an ex-SDE, and a builder of ML-driven systems. I thrive at the intersection of heavy-duty software engineering and exploratory data science.
                </p>
                <p>
                  <strong>What I’m Doing Now</strong> After about 1.5 years in the industry as a Software Development Engineer, I returned to academia to sharpen my focus on AI and ML. My current research and coursework involve:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Bioinformatics: Using ML to solve problems in the genomic space.</li>
                  <li>Computer Vision: Developing real-time scoring and detection pipelines.</li>
                  <li>Financial Mathematics: Exploring the intersection of code and capital.</li>
                </ul>
                <p>
                  <strong>The Vision</strong> I don’t just want to build "apps"—I want to build engines. Whether that is a low-latency execution strategy for a quant firm or a predictive model for genomic sequencing, I am interested in tech that solves "hard" problems. I believe the next decade of innovation belongs to those who can translate complex mathematical models into production-ready software.
                </p>
                <p>
                  <strong>Outside the IDE</strong>, You’ll find me brewing a fresh cup of tea ☕, behind the wheel🚗, or catching up on the latest in gaming🎮 and sports🏏.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center">
            <ScrollReveal direction="right" delay={800}>
              <div
                className="relative inline-block group mb-8"
                onMouseEnter={() => setImageHovered(true)}
                onMouseLeave={() => setImageHovered(false)}
                // onClick={onImageClick}
              >
                <div className="w-80 h-96 rounded-2xl bg-gradient-primary-accent p-1 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary-lg">
                  <div className="w-full h-full rounded-2xl bg-app-bg-primary overflow-hidden">
                    <div className="w-full h-full overflow-hidden">
                      <img
                        src={myPic}
                        alt="About Me"
                        className={`
                          w-full h-full object-cover transition-all duration-500
                          ${imageHovered ? 'scale-110' : 'scale-100'}
                        `}
                      />
                    </div>
                  </div>
                </div>

                {/* Regular hover tooltip - Commented out */}
                {/* <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-primary-400 bg-app-bg-secondary px-3 py-1 rounded-full">Discover my other side</span>
                </div> */}

                {/* Jiggle tooltip - Commented out */}
                {/* <div className={`
                  absolute -top-20 left-1/2 transform -translate-x-1/2 transition-all duration-500 z-30
                  ${showJiggleTooltip ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
                `}>
                  <div className="relative">
                    <div className="bg-gradient-to-r from-accent-600 to-highlight-600 text-white px-4 py-2 rounded-xl shadow-lg shadow-accent/30 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">🎨</span>
                        <span className="font-medium">Click to see my artistic side!</span>
                        <span className="text-lg">✨</span>
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-accent-600"></div>
                  </div>
                </div> */}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* <div className="grid md:grid-cols-4 gap-6 mt-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <ScrollReveal key={index} direction="up" delay={1000 + index * 200}>
                <div className="bg-app-bg-secondary/80 backdrop-blur-sm p-6 rounded-xl hover:bg-app-bg-secondary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary">
                  <Icon size={32} className="text-primary-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-app-text-secondary">{skill.name}</h3>
                  <p className="text-app-text-muted text-sm">{skill.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;