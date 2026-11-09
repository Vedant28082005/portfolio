import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Github, FileText } from 'lucide-react';
import { getProjects, DEFAULT_PROJECTS, type Project } from '../admin/projectsStore';

const overlayClass = 'absolute inset-0 z-10 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]';
const actionClass =
  'relative z-20 flex items-center gap-2 px-3 py-1.5 border border-[#1E1E2E] rounded-md text-[#6B7280] hover:text-[#00D4FF] hover:border-[#00D4FF] transition-colors font-label text-xs active:scale-95';

export function ProjectsSection() {
  // Start from defaults so server HTML and first client render match; apply admin edits after mount.
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);

  useEffect(() => {
    const refresh = () => setProjects(getProjects());
    refresh();
    window.addEventListener('projects-updated', refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener('projects-updated', refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-16 text-center">
          <h2 className="font-heading uppercase text-3xl md:text-4xl text-[#F0F0FF] inline-block border-b-2 border-[#00D4FF] pb-2 shadow-[0_4px_15px_rgba(0,212,255,0.2)]">
            PROJECTS
          </h2>
        </div>

        <div className="flex flex-col items-center space-y-5 sm:space-y-8">
          {projects.map((project, idx) => {
            const casePath = project.slug ? `/projects/${project.slug}/` : '';
            return (
              <div
                key={project.slug ?? idx}
                className="w-full max-w-5xl bg-[#111118] border border-[#1E1E2E] rounded-2xl overflow-hidden group relative transition-all duration-300"
              >
                {/* Whole-card click target: repo if there is one, otherwise the case study */}
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className={overlayClass}
                    aria-label={`${project.title} on GitHub`}
                  />
                ) : casePath ? (
                  <Link to={casePath} className={overlayClass} aria-label={`${project.title} project details`} />
                ) : null}

                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_rgba(0,212,255,0.8)]" />

                <div className="p-6 sm:p-8 md:p-10">
                  <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6 flex-wrap">
                    <div className="font-label text-xs tracking-widest text-[#6B7280] flex items-center">
                      STATUS:
                      <span className="flex items-center ml-2 text-white bg-[#1E1E2E] px-2 py-1 rounded">
                        <span className={`w-2 h-2 rounded-full mr-2 ${project.statusColor} ${project.status === 'ACTIVE' ? 'animate-pulse' : ''}`} />
                        {project.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {casePath && (
                        <Link to={casePath} className={actionClass}>
                          <FileText className="w-3.5 h-3.5" />
                          Details
                        </Link>
                      )}
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noreferrer" className={actionClass}>
                          <Github className="w-3.5 h-3.5" />
                          View Repo
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F0F0FF] mb-2">
                    {project.title}
                  </h3>
                  <div className="font-heading text-[#00D4FF] text-sm mb-4">
                    {project.subtitle}
                  </div>
                  <p className="font-body text-[#6B7280] text-sm sm:text-[15px] leading-relaxed max-w-2xl mb-6 sm:mb-8">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, tIdx) => (
                      <span key={tIdx} className="font-label text-xs text-[#6B7280] border border-[#1E1E2E] bg-[#0A0A0F] px-3 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
