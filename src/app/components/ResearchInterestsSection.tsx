import React from 'react';

const interests = [
  { label: 'Embodied AI', desc: 'AI systems that act in physical environments through robotic and hardware interfaces.' },
  { label: 'Agentic Systems', desc: 'Multi-step autonomous agents with tool use, memory, and planning capabilities.' },
  { label: 'Industrial AI', desc: 'ML and LLM applications for manufacturing, fault detection, and process automation.' },
  { label: 'Edge AI', desc: 'Deploying inference at the hardware level — local, fast, and offline-capable.' },
  { label: 'Robotics', desc: 'Autonomous navigation, manipulation, and sensor fusion in real-world environments.' },
  { label: 'Autonomous Systems', desc: 'Systems that perceive, decide, and act with minimal human intervention.' },
  { label: 'Intelligent Manufacturing', desc: 'AI-driven quality control, predictive maintenance, and process optimization.' },
  { label: 'Human-AI Interaction', desc: 'Natural language interfaces that bridge humans and physical systems.' },
  { label: 'Physical Intelligence', desc: 'The intersection of LLMs, robotics, and real-world actuator control.' },
];

export function ResearchInterestsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="mb-10 sm:mb-14">
          <h2 className="font-heading uppercase text-3xl md:text-4xl text-[#F0F0FF] inline-block border-b-2 border-[#00D4FF] pb-2">
            RESEARCH INTERESTS
          </h2>
          <p className="font-body text-[#6B7280] mt-4 text-base sm:text-lg">
            Areas I am actively studying, building in, and want to push forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {interests.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-4 sm:p-5 hover:border-[#00D4FF]/30 transition-colors group"
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] flex-shrink-0" />
                <div className="font-label text-sm text-[#F0F0FF] group-hover:text-[#00D4FF] transition-colors">
                  {item.label}
                </div>
              </div>
              <p className="font-body text-xs text-[#6B7280] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
