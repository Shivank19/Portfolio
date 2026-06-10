import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VerticalNavigation from './VerticalNavigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ResumeSection from './ResumeSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import ParallaxBackground from './ParallaxBackground';

const MainPortfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageClick = () => {
    navigate('/alternate');
  };

  return (
    <div className="relative">
      <ParallaxBackground />
      
      <div className="relative z-10">
        <VerticalNavigation 
          activeSection={activeSection} 
          onSectionClick={scrollToSection}
        />
        
        <HeroSection onImageClick={handleImageClick} />
        <AboutSection onImageClick={handleImageClick} />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default MainPortfolio;