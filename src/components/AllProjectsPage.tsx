import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, FileText, Github, Zap } from 'lucide-react';
import { projects } from '../data/projects';

const skillFilters = [
  'All',
  'Python',
  'NLP',
  'OpenCV',
  'Reinforcement Learning',
  'Vue.js',
  'Firebase',
] as const;

const AllProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterParam = params.get('filter');
    if (!filterParam) return;

    const matchingFilter = skillFilters.find(
      (filter) => filter.toLowerCase() === filterParam.toLowerCase()
    );
    setSelectedFilter(matchingFilter ?? 'All');
  }, [location]);

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter((project) =>
      project.tags.some((tag) => tag.toLowerCase() === selectedFilter.toLowerCase())
    );

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    const params = new URLSearchParams();
    if (filter !== 'All') params.set('filter', filter);
    window.history.replaceState({}, '', `${location.pathname}${params.toString() ? `?${params.toString()}` : ''}`);
  };

  return (
    <main className="archive-page-bg min-h-screen px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={() => navigate('/')}
          className="btn-readable-surface mb-10 flex items-center space-x-2 rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </button>

        <header className="border-b border-app-border-primary pb-8">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary-600">
            Project archive
          </p>
          <h1 className="max-w-4xl text-5xl leading-none text-app-text-primary md:text-7xl">
            Portfolio projects, fully browsable.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-app-text-muted">
            A complete look at what I've built, from published research to deployed applications.
          </p>
        </header>

        <div className="filter-toolbar sticky top-3 z-20 my-6 flex flex-col gap-3 border border-app-border-primary bg-[rgb(var(--color-bg-primary)/0.9)] px-4 py-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-app-text-muted">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
          <div className="flex flex-wrap gap-2">
            {skillFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={`rounded-full px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-all duration-200 ${
                  selectedFilter === filter ? 'btn-readable-primary' : 'btn-readable-surface'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <section className="grid gap-4 pt-1">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-lg border border-app-border-primary bg-app-bg-secondary shadow-[0_22px_52px_rgba(35,35,51,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-app-border-accent"
            >
              <div className="grid md:grid-cols-[20rem_1fr]">
                <div className="relative min-h-56 overflow-hidden border-b border-app-border-primary bg-app-bg-tertiary md:border-b-0 md:border-r">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-white/45 bg-white/88 text-primary-600 shadow-lg">
                      <Zap size={15} />
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <p className="mb-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary-600">
                    {project.featured ? 'Featured' : 'Project'}
                  </p>
                  <h2 className="text-3xl leading-tight text-app-text-secondary">{project.title}</h2>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-app-text-tertiary">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-readable rounded-full px-2.5 py-1 text-[0.62rem] font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <button
                      onClick={() => navigate(`/projects/${project.slug}`)}
                      className="btn-readable-primary flex items-center space-x-1.5 rounded-full px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em]"
                    >
                      <ArrowRight size={12} />
                      <span>Details</span>
                    </button>

                    {project.liveLink && project.liveLink !== '#' && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-readable-primary flex items-center space-x-1.5 rounded-full px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em]">
                        <ExternalLink size={12} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.paperLink && project.paperLink !== '#' && (
                      <a href={project.paperLink} target="_blank" rel="noopener noreferrer" className="btn-readable-primary flex items-center space-x-1.5 rounded-full px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em]">
                        <FileText size={12} />
                        <span>Paper</span>
                      </a>
                    )}
                    {project.codeLink && project.codeLink !== '#' && (
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn-readable-surface flex items-center space-x-1.5 rounded-full px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em]">
                        <Github size={12} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default AllProjectsPage;
