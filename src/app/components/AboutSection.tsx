import React from 'react';
import { Trophy, Code2, Globe } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Bio */}
          <div className="space-y-5 relative pl-5 sm:pl-6 border-l-4 border-[#00D4FF]">
            <p className="font-body text-base md:text-lg text-[#F0F0FF] leading-relaxed">
              I build things that connect the physical world to intelligent systems.
            </p>
            <p className="font-body text-base md:text-lg text-[#F0F0FF] leading-relaxed">
              From motor-driver firmware to RAG pipelines, I work across the full stack of
              hardware + AI. Currently building PhysAgent (Embodied AI Platform) and
              FactoryMind (Industrial AI Copilot) while finishing my B.Tech at PDEU.
            </p>
            <p className="font-body text-base md:text-lg text-[#F0F0FF] leading-relaxed">
              Hackathon winner. Drummer. Long-term goal: build something that scales.
            </p>
          </div>

          {/* Right: Stat Cards */}
          <div className="space-y-5">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-4 sm:p-5 hover:border-[#00D4FF] transition-colors group">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D4FF] mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-display font-bold text-[#F0F0FF] text-base sm:text-lg">Winner</div>
                <div className="font-body text-xs sm:text-sm text-[#6B7280] mt-1">Hackathons</div>
              </div>

              <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-4 sm:p-5 hover:border-[#00D4FF] transition-colors group">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D4FF] mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-display font-bold text-[#F0F0FF] text-base sm:text-lg">5+ Live</div>
                <div className="font-body text-xs sm:text-sm text-[#6B7280] mt-1">Projects</div>
              </div>

              <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-4 sm:p-5 hover:border-[#00D4FF] transition-colors group">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D4FF] mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-display font-bold text-[#F0F0FF] text-base sm:text-lg">Domain</div>
                <div className="font-body text-xs text-[#6B7280] mt-1 break-all leading-tight">vedantsutariya.com</div>
              </div>
            </div>

            {/* Graduation Badge */}
            <div className="flex items-start sm:items-center gap-3 px-4 sm:px-5 py-3 rounded-xl bg-[#111118] border border-[#FF6B2B]">
              <div className="w-2 h-2 rounded-full bg-[#FF6B2B] animate-pulse flex-shrink-0 mt-1 sm:mt-0" />
              <span className="font-label text-xs sm:text-sm text-[#F0F0FF] leading-relaxed">
                B.Tech ICT · Major: ICT · Minor: Robotics · PDEU · Graduating 2027
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
