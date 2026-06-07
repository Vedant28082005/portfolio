import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-20 sm:py-32 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#F0F0FF] mb-6 sm:mb-8">
          LET'S BUILD SOMETHING
        </h2>

        <div className="font-body text-[#F0F0FF] text-base sm:text-lg max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-12">
          <p>If you're working on hardware+AI systems, robotics, or industrial IoT —</p>
          <p>I'm always interested in collabs, projects, and conversations.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <a
            href="mailto:vedant@vedantsutariya.com"
            className="flex items-center w-full sm:w-auto font-label text-sm text-[#F0F0FF] bg-[#111118] border border-[#1E1E2E] px-5 sm:px-6 py-3 sm:py-4 rounded-full hover:border-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all group justify-center sm:justify-start"
          >
            <Mail className="w-5 h-5 mr-3 text-[#6B7280] group-hover:text-[#00D4FF] flex-shrink-0" />
            <span className="break-all">vedant@vedantsutariya.com</span>
          </a>

          <a
            href="https://github.com/Vedant28082005"
            target="_blank"
            rel="noreferrer"
            className="flex items-center w-full sm:w-auto font-label text-sm text-[#F0F0FF] bg-[#111118] border border-[#1E1E2E] px-5 sm:px-6 py-3 sm:py-4 rounded-full hover:border-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all group justify-center sm:justify-start"
          >
            <Github className="w-5 h-5 mr-3 text-[#6B7280] group-hover:text-[#00D4FF] flex-shrink-0" />
            github.com/Vedant28082005
          </a>

          <a
            href="https://www.linkedin.com/in/vedant-sutariya-776268285"
            target="_blank"
            rel="noreferrer"
            className="flex items-center w-full sm:w-auto font-label text-sm text-[#F0F0FF] bg-[#111118] border border-[#1E1E2E] px-5 sm:px-6 py-3 sm:py-4 rounded-full hover:border-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all group justify-center sm:justify-start"
          >
            <Linkedin className="w-5 h-5 mr-3 text-[#6B7280] group-hover:text-[#00D4FF] flex-shrink-0" />
            LinkedIn
          </a>
        </div>

        <div className="inline-flex flex-wrap justify-center items-center gap-2 font-label text-xs text-[#6B7280]">
          <span>Currently open to:</span>
          <span className="px-2 py-1 bg-[#111118] rounded border border-[#1E1E2E]">Internships</span>
          <span className="px-2 py-1 bg-[#111118] rounded border border-[#1E1E2E]">Research Collabs</span>
          <span className="px-2 py-1 bg-[#111118] rounded border border-[#1E1E2E]">Freelance Hardware Projects</span>
        </div>

      </div>
    </section>
  );
}
