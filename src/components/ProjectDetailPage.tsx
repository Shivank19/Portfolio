import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, FileText, Github } from 'lucide-react';
import { getProjectBySlug } from '../data/projects';

const detailSections = [
  { key: 'overview', title: 'Overview' },
  { key: 'approach', title: 'Approach' },
  { key: 'outcome', title: 'Outcome' },
  { key: 'learnings', title: 'Learnings' },
] as const;

const ProjectDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="archive-page-bg min-h-screen px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <button
            onClick={() => navigate('/projects')}
            className="btn-readable-surface mb-12 flex items-center space-x-2 rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em]"
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </button>
          <h1 className="text-5xl leading-none text-app-text-secondary">Project not found</h1>
          <p className="mt-4 text-app-text-tertiary">That project page does not exist yet.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="archive-page-bg min-h-screen px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={() => navigate('/projects')}
          className="btn-readable-surface mb-10 flex items-center space-x-2 rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em]"
        >
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </button>

        <header className="grid gap-8 border-b border-app-border-primary pb-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary-600">
              Project detail
            </p>
            <h1 className="text-5xl leading-none text-app-text-primary md:text-7xl">{project.title}</h1>

            <div className="mt-5 space-y-2 text-lg leading-relaxed text-app-text-tertiary">
              {project.summaryLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-readable rounded-full px-2.5 py-1 text-[0.62rem] font-semibold">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.liveLink && project.liveLink !== '#' && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-readable-primary flex items-center space-x-2 rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em]">
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
              )}
              {project.paperLink && project.paperLink !== '#' && (
                <a href={project.paperLink} target="_blank" rel="noopener noreferrer" className="btn-readable-primary flex items-center space-x-2 rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em]">
                  <FileText size={14} />
                  <span>Paper</span>
                </a>
              )}
              {project.codeLink && project.codeLink !== '#' && (
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn-readable-surface flex items-center space-x-2 rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em]">
                  <Github size={14} />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-app-border-primary bg-app-bg-secondary p-2 shadow-[0_22px_52px_rgba(35,35,51,0.06)]">
            <img src={project.image} alt={project.title} className="aspect-[16/10] w-full rounded-md object-cover" />
          </div>
        </header>

        <section className="grid gap-4 pt-6 md:grid-cols-2">
          {detailSections.map((section) => (
            <article key={section.key} className="rounded-lg border border-app-border-primary bg-app-bg-secondary p-6 shadow-[0_22px_52px_rgba(35,35,51,0.04)]">
              <p className="mb-3 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary-600">
                {section.title}
              </p>
              <p className="leading-relaxed text-app-text-tertiary">{project.details[section.key]}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default ProjectDetailPage;
