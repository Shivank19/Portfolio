import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import me from '../assets/me0.jpg';

interface HeroSectionProps {
  onImageClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent px-4 pt-28">
      <div
        className="relative z-20 mx-auto grid w-full max-w-6xl gap-10 border-b border-app-border-primary pb-14 text-left md:grid-cols-[0.78fr_1fr] md:items-center"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <ScrollReveal direction="fade" delay={200}>
          <div className="relative inline-block group">
            <div className="mx-auto h-72 w-72 overflow-hidden rounded-lg border border-app-border-primary bg-app-bg-secondary p-2 shadow-2xl shadow-[rgb(var(--color-shadow-primary)/0.08)] transition-all duration-300 group-hover:-translate-y-1 md:mx-0">
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-md bg-app-bg-primary">
                <img
                  src={me}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          <ScrollReveal direction="up" delay={300}>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary-600">
              Portfolio archive
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <h1 className="max-w-3xl text-6xl leading-[0.95] text-app-text-primary md:text-8xl">
              Shivank Sapra
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={600}>
            <p className="text-xl text-app-text-primary md:text-2xl">
              AI Enthusiast & Creative Technologist
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={800}>
            <p className="max-w-2xl text-lg leading-relaxed text-app-text-muted">
              Crafting digital experiences that blend innovative technology with stunning design.
              Passionate about creating solutions that make a difference.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={1000}>
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="https://github.com/Shivank19"
                className="btn-readable-surface flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                <span>Github</span>
              </a>
              <a
                href="https://linkedin.com/in/shivank-sapra"
                className="btn-readable-surface flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * 0.05}px)`,
        }}
      >
        <ArrowDown size={24} className="text-app-text-muted" />
      </div>
    </section>
  );
};

export default HeroSection;
