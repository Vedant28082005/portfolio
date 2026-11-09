import React from 'react';
import { Navigate, useParams } from 'react-router';
import { ArrowLeft, Github, Mail } from 'lucide-react';
import { getProjectPage } from '../content/projectPages';
import { MAILTO } from '../site';
import { Footer } from './Footer';

const bullet = 'font-body text-[#F0F0FF]/90 text-base leading-relaxed';

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mb-8 sm:mb-10">
      <h2 className="font-heading uppercase text-sm tracking-widest text-[#00D4FF] mb-3">{title}</h2>
      <ul className="space-y-3 list-disc pl-5 marker:text-[#00D4FF]">
        {items.map((t, i) => (
          <li key={i} className={bullet}>{t}</li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectPage() {
  const { slug } = useParams();
  const page = getProjectPage(slug);
  if (!page) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F0F0FF]">
      <main className="container mx-auto px-4 sm:px-6 max-w-3xl pt-8 pb-16 sm:pt-12 sm:pb-24">
        <a
          href="/#projects"
          className="inline-flex items-center gap-2 font-label text-xs text-[#6B7280] hover:text-[#00D4FF] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          All projects · Vedant Sutariya
        </a>

        <h1 className="font-display font-bold text-3xl sm:text-5xl text-[#F0F0FF] tracking-tight mb-3">{page.title}</h1>
        <p className="font-heading text-[#00D4FF] text-sm sm:text-base mb-8">{page.tagline}</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {page.stack.map((t) => (
            <span key={t} className="font-label text-xs text-[#6B7280] border border-[#1E1E2E] bg-[#111118] px-3 py-1 rounded-md">
              {t}
            </span>
          ))}
        </div>

        <Section title="Goal" items={page.goal} />
        <Section title="Hardware & stack" items={page.hardware} />
        <Section title="What I built" items={page.built} />
        {page.outcome && <Section title="Status" items={page.outcome} />}

        <div className="flex flex-wrap gap-3 pt-4 border-t border-[#1E1E2E]">
          {page.repo && (
            <a
              href={page.repo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-[#00D4FF] text-[#0A0A0F] font-label text-sm font-semibold rounded-md hover:bg-[#00b8d9] transition-colors"
            >
              <Github className="w-4 h-4" />
              {page.title} on GitHub
            </a>
          )}
          <a
            href={MAILTO}
            className="flex items-center gap-2 px-4 py-2.5 border border-[#00D4FF] text-[#00D4FF] font-label text-sm rounded-md hover:bg-[#00D4FF]/10 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Hire me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 border border-[#1E1E2E] text-[#6B7280] hover:text-[#00D4FF] hover:border-[#00D4FF] font-label text-sm rounded-md transition-colors"
          >
            Vedant Sutariya résumé (PDF)
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
