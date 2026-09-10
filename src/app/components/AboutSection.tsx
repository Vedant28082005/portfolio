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
              B.Tech ICT student at PDEU (CGPA 8.86) with a Minor in Robotics. I work across embedded systems, IoT, and AI — from writing AVR C firmware and wiring I2C sensors to building Gemini-powered agents and deploying ML classifiers on edge hardware.
            </p>
            <p className="font-body text-base md:text-lg text-[#F0F0FF] leading-relaxed">
              Frontend Development Intern at Webytude Web Solutions (2026). Hackathon winner — 1st place at PDEU's IoT with Deep Learning hackathon.
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
