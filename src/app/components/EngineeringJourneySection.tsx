import React from 'react';

const timeline = [
  {
    year: '2024',
    dotColor: 'bg-[#FF6B2B]',
    glowColor: 'shadow-[0_0_12px_#FF6B2B]',
    labelColor: 'text-[#FF6B2B]',
    borderColor: 'border-[#FF6B2B]/30',
    title: 'Hardware Foundation',
    items: ['Embedded Systems', 'IoT Projects', 'Sensor Networks', 'Hardware Prototyping'],
    desc: 'Started with low-level firmware, motor drivers, and sensor integration. Built the physical layer foundation.',
  },
  {
    year: '2025 Q1',
    dotColor: 'bg-[#00D4FF]',
    glowColor: 'shadow-[0_0_12px_#00D4FF]',
    labelColor: 'text-[#00D4FF]',
    borderColor: 'border-[#00D4FF]/30',
    title: 'Machine Learning & Signal Processing',
    items: ['Machine Learning', 'Bearing Fault Diagnosis', 'Signal Processing', 'FFT Analysis'],
    desc: 'Applied ML to real hardware problems. Built fault detection pipelines combining FFT, vibration analysis, and trained classifiers.',
  },
  {
    year: '2025 Q3',
    dotColor: 'bg-[#00D4FF]',
    glowColor: 'shadow-[0_0_12px_#00D4FF]',
    labelColor: 'text-[#00D4FF]',
    borderColor: 'border-[#00D4FF]/30',
    title: 'LLMs, RAG & AI Copilots',
    items: ['RAG Systems', 'LLM Applications', 'AI Copilots', 'Vector Databases'],
    desc: 'Moved up the stack — RAG pipelines, LLM integration, and building AI copilots that reason over domain-specific data.',
  },
  {
    year: '2026',
    dotColor: 'bg-[#00FF88]',
    glowColor: 'shadow-[0_0_12px_#00FF88]',
    labelColor: 'text-[#00FF88]',
    borderColor: 'border-[#00FF88]/30',
    title: 'Embodied AI & Autonomous Systems',
    items: ['PhysAgent', 'Embodied AI', 'MCP Architectures', 'Autonomous Systems'],
    desc: 'Connecting LLMs to physical hardware through MCP. Building systems where AI agents control real devices.',
  },
];

export function EngineeringJourneySection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">

        <div className="mb-10 sm:mb-14">
          <h2 className="font-heading uppercase text-3xl md:text-4xl text-[#F0F0FF] inline-block border-b-2 border-[#00D4FF] pb-2">
            ENGINEERING JOURNEY
          </h2>
          <p className="font-body text-[#6B7280] mt-4 text-base sm:text-lg">
            From firmware to frontier AI — a progression built on physical systems.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connector line — offset to match dot centre */}
          <div className="absolute left-4 sm:left-5 top-5 bottom-5 w-px bg-[#1E1E2E]" />

          <div className="space-y-6 sm:space-y-10">
            {timeline.map((entry, idx) => (
              <div key={idx} className="relative flex gap-4 sm:gap-8">

                {/* Dot */}
                <div className="flex-shrink-0 z-10">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${entry.dotColor} ${entry.glowColor} flex items-center justify-center`}>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#0A0A0F]" />
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 min-w-0 bg-[#111118] border ${entry.borderColor} rounded-xl p-4 sm:p-6 mb-1`}>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                    <span className={`font-label text-xs tracking-widest ${entry.labelColor}`}>{entry.year}</span>
                    <span className="font-display font-bold text-base sm:text-lg text-[#F0F0FF]">{entry.title}</span>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-3 sm:mb-4">{entry.desc}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {entry.items.map((item, iIdx) => (
                      <span key={iIdx} className="font-label text-xs text-[#6B7280] border border-[#1E1E2E] bg-[#0A0A0F] px-2 sm:px-2.5 py-1 rounded-md">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
