import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, FileText, Github, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { projects } from '../data/projects';

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="min-h-screen bg-transparent px-4 py-20">
      <div className="relative z-10 mx-auto max-w-6xl">
        <ScrollReveal direction="up" delay={200}>
          <div className="mb-10 border-b border-app-border-primary pb-8">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary-600">
              Selected work
            </p>
            <h2 className="text-5xl leading-none text-app-text-primary md:text-7xl">
              Featured Projects
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.filter((project) => project.featured).map((project, index) => (
            <ScrollReveal key={project.slug} direction={index % 2 === 0 ? 'left' : 'right'} delay={400 + index * 160}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-app-border-primary bg-app-bg-secondary shadow-[0_22px_52px_rgba(35,35,51,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-app-border-accent">
                <div className="relative aspect-[16/8] flex-shrink-0 overflow-hidden border-b border-app-border-primary bg-app-bg-tertiary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />
                  {project.featured && (
                    <div className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full border border-white/45 bg-white/88 text-primary-600 shadow-lg">
                      <Zap size={15} />
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col space-y-3 p-5">
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary-600">
                    Featured
                  </p>
                  <h3 className="text-2xl leading-tight text-app-text-secondary">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-app-text-tertiary">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-readable rounded-full px-2.5 py-1 text-[0.62rem] font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    <button
                      onClick={() => navigate(`/projects/${project.slug}`)}
                      className="btn-readable-primary flex items-center space-x-1.5 rounded-full px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-all duration-300"
                    >
                      <ArrowRight size={12} />
                      <span>Details</span>
                    </button>

                    {project.liveLink && project.liveLink !== '#' && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-readable-primary flex items-center space-x-1.5 rounded-full px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-300"
                      >
                        <ExternalLink size={12} />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.paperLink && project.paperLink !== '#' && (
                      <a
                        href={project.paperLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-readable-primary flex items-center space-x-1.5 rounded-full px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-300"
                      >
                        <FileText size={12} />
                        <span>Paper</span>
                      </a>
                    )}

                    {project.codeLink && project.codeLink !== '#' && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-readable-surface flex items-center space-x-1.5 rounded-full px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-300"
                      >
                        <Github size={12} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={1000}>
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/projects')}
              className="btn-readable-primary rounded-full px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300"
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
