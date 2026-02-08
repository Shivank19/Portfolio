import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Zap, FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import gen1 from '../assets/gen1.jpg';
import spoton from '../assets/spoton1.png';
import rlTraffic from '../assets/traffic1.png';
import med from '../assets/medimate.png'

const ProjectsSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'SpotOn',
      description: 'A real-time scoring pipeline for a dexterity-based card and dice game called Rhubarb Dice Game.',
      image: spoton,
      tags: ['Python', 'OpenCV', 'Streamlit'],
      featured: true,
      liveLink: '#',
      paperLink: 'https://drive.google.com/file/d/1t6EvX4iXCk-v47tobKsJoU2QuMYy_DM-/view?usp=sharing',
      codeLink: 'https://github.com/Stefhermann/cv5561-f25-team-spoton',
    },
    {
      title: 'Analysis of Celiac Disease Gut Microbiome',
      description: 'Standardized Pipeline and Analysis of Celiac Disease Gut Microbiomes Using QIIME 2.',
      image: gen1,
      tags: ['QIIME 2', 'Statistical Analysis'],
      featured: true,
      liveLink: '#',
      paperLink: 'https://drive.google.com/file/d/1jO7yjOp-GHDYXxyduWchtFz4_PnwQe1a/view?usp=sharing',
      codeLink: 'https://github.com/nicholashinds/csci5481-final',
    },
    {
      title: 'Adaptive Traffic Congestion Control',
      description: '',
      image: rlTraffic,
      tags: ['Python', 'Reinforcement Learning'],
      featured: true,
      liveLink: 'https://www.youtube.com/watch?v=xr_JjAukCBI',
      paperLink: '#',
      codeLink: '#',
    },
    {
      title: 'MediMate',
      description: 'An OCR-powered medication tracking system that converts real prescriptions into structured, actionable schedules with analytics and offers smart inventory tracking and reminders.',
      image: med,
      tags: ['Vue.js', 'FireBase', 'OCR'],
      featured: true,
      liveLink: 'https://project2-e9097.web.app',
      paperLink: '#',
      codeLink: 'https://github.com/csci5117f25/project-2-four-loops-1',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gradient-to-b from-app-bg-primary to-primary-900/20 relative overflow-hidden">
      {/* Subtle background elements */}
      <div
        className="absolute top-16 right-20 w-36 h-36 rounded-full bg-gradient-to-br from-highlight-600/8 to-primary-600/8 blur-2xl"
        style={{
          transform: `translateY(${scrollY * 0.01}px)`,
        }}
      />
      <div
        className="absolute bottom-32 left-16 w-28 h-28 rounded-full bg-gradient-to-br from-accent-600/10 to-highlight-600/10 blur-xl"
        style={{
          transform: `translateY(${scrollY * -0.008}px)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal direction="up" delay={200}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary-accent">
            Featured Projects
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={400 + index * 200}>
              <div className={`
                group relative overflow-hidden rounded-2xl bg-app-bg-secondary/60 backdrop-blur-sm
                hover:bg-app-bg-secondary/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary
                ${project.featured ? 'md:col-span-1' : ''}
              `}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-app-bg-primary via-app-bg-primary/60 to-transparent opacity-80"></div>
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Zap size={20} className="text-yellow-400" />
                    </div>
                  )}

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-app-text-secondary">{project.title}</h3>
                    <p className="text-app-text-tertiary text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-primary-800/40 text-primary-300 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4 pt-2">
                      {project.liveLink && project.liveLink !== '#' && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-primary-800 hover:bg-primary-900 rounded-lg transition-colors duration-300"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">Live Demo</span>
                        </a>
                      )}

                      {project.paperLink && project.paperLink !== '#' && (
                        <a
                          href={project.paperLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-primary-800 hover:bg-primary-900 rounded-lg transition-colors duration-300"
                        >
                          <FileText size={16} />
                          <span className="text-sm">Paper</span>
                        </a>
                      )}

                      {project.codeLink && project.codeLink !== '#' && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-app-bg-tertiary hover:bg-app-border-primary rounded-lg transition-colors duration-300"
                        >
                          <Github size={16} />
                          <span className="text-sm">Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={1200}>
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/projects')}
              className="px-8 py-3 bg-gradient-primary-accent hover:from-primary-900 hover:to-accent-900 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary"
            >
              View All Projects
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;