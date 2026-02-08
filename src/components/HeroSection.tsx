import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import me from '../assets/me.jpg';

interface HeroSectionProps {
  onImageClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onImageClick }) => {
  const [imageHovered, setImageHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showJiggleTooltip, setShowJiggleTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Jiggle animation every 8 seconds
  useEffect(() => {
    const jiggleInterval = setInterval(() => {
      setShowJiggleTooltip(true);

      // Hide tooltip after 3 seconds
      setTimeout(() => {
        setShowJiggleTooltip(false);
      }, 3000);
    }, 8000);

    return () => clearInterval(jiggleInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-app-bg-primary to-primary-900/20">
      <div
        className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <ScrollReveal direction="fade" delay={200}>
          <div className="mb-8">
          <div className="mb-8">
            <div
              className={`
                relative inline-block group
                // ${showJiggleTooltip ? 'animate-jiggle' : ''}
              `}
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}
              // onClick={onImageClick}
            >
              <div className="w-56 h-56 rounded-full bg-gradient-primary-accent p-1 mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary-lg">
                <div className="w-full h-full rounded-full bg-app-bg-primary flex items-center justify-center overflow-hidden">
                  <div className={`
                    w-full h-full rounded-full transition-all duration-500 overflow-hidden
                  `}>
                    <img
                      src={me}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Regular hover tooltip - Commented out */}
              {/* <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-primary-400 bg-app-bg-secondary px-2 py-1 rounded-full">Click to explore</span>
              </div> */}

              {/* Jiggle tooltip - Commented out */}
              {/* <div className={`
                absolute -top-16 left-1/2 transform -translate-x-1/2 transition-all duration-500 z-30
                ${showJiggleTooltip ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
              `}>
                <div className="relative">
                  <div className="bg-gradient-to-r from-highlight-600 to-primary-600 text-white px-4 py-2 rounded-xl shadow-lg shadow-primary/30 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">✨</span>
                      <span className="font-medium">Psst... I have another side!</span>
                      <span className="text-lg">🎭</span>
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-highlight-600"></div>
                </div>
              </div> */}
            </div>
          </div>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          <ScrollReveal direction="up" delay={400}>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-app-text-primary via-app-text-secondary to-app-text-tertiary bg-clip-text text-transparent">
              Shivank Sapra
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={600}>
            <p className="text-xl md:text-2xl text-app-text-tertiary font-light">
              AI Enthusiast & Creative Technologist
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={800}>
            <p className="text-lg text-app-text-muted max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences that blend innovative technology with stunning design.
              Passionate about creating solutions that make a difference.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={1000}>
            <div className="flex justify-center space-x-6 pt-8">
              <a href="https://github.com/Shivank19" className="p-3 bg-app-bg-secondary rounded-full hover:bg-primary-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary" target='_blank'>
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/shivank-sapra" className="p-3 bg-app-bg-secondary rounded-full hover:bg-accent-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent" target='_blank'>
                <Linkedin size={24} />
              </a>

            </div>
          </ScrollReveal>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
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