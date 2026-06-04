import React from 'react';

const aiProjects = [
  {
    status: 'ACTIVE',
    statusColor: 'bg-[#00FF88]',
    title: 'BEARING FAULT AI COPILOT',
    subtitle: 'Industrial ML Fault Diagnosis',
    desc: 'Industrial fault diagnosis platform combining machine learning, vibration analysis, retrieval-augmented generation, and LLM-powered fault interpretation. Detects anomalies via FFT and classifies faults using trained models with LLM-generated diagnostic reports.',
    stack: ['Python', 'TensorFlow', 'RAG', 'FAISS', 'LLM Integration'],
    tag: 'FactoryMind AI',
  },
  {
    status: 'ACTIVE',
    statusColor: 'bg-[#00FF88]',
    title: 'PHYSAGENT',
    subtitle: 'Embodied AI via MCP Architecture',
    desc: 'LLMs connected to real-world devices through Model Context Protocol. Natural language commands translated to GPIO, I2C, SPI, and sensor reads. Agents call tools that execute on physical hardware — no abstraction layer.',
    stack: ['RPi5', 'ESP32', 'MCP', 'AI Agents', 'Tool Calling'],
    tag: 'Embodied AI',
  },
  {
    status: 'SHIPPED',
    statusColor: 'bg-[#6B7280]',
    title: 'IoT + LLM ENV ASSISTANT',
    subtitle: 'Environmental Reasoning System',
    desc: 'IoT system that collects environmental data (temperature, humidity, eCO2) and uses LLM reasoning to generate human-readable insights and contextual analysis. Bridges raw sensor streams to language-layer interpretation.',
    stack: ['Raspberry Pi', 'DHT11', 'Python', 'LLM APIs'],
    tag: 'Edge AI',
  },
  {
    status: 'RESEARCH',
    statusColor: 'bg-[#FF6B2B]',
    title: 'LLaMA FINE-TUNING EXPERIMENTS',
    subtitle: 'Open-Source LLM Adaptation',
    desc: 'Experiments with QLoRA and LoRA-based fine-tuning of open-source language models on consumer hardware. Focus on domain-specific adaptation for industrial and embedded systems contexts.',
    stack: ['LLaMA', 'QLoRA', 'LoRA', 'PyTorch'],
    tag: 'LLM Research',
  },
];

export function AISystemsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="mb-10 sm:mb-16 text-center">
          <h2 className="font-heading uppercase text-3xl md:text-4xl text-[#F0F0FF] inline-block border-b-2 border-[#00D4FF] pb-2 shadow-[0_4px_15px_rgba(0,212,255,0.2)]">
            AI SYSTEMS
          </h2>
          <p className="font-body text-[#6B7280] mt-4 text-sm sm:text-base max-w-xl mx-auto">
            Applied AI engineering — from fault detection to embodied agents.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-5 sm:space-y-8">
          {aiProjects.map((project, idx) => (
            <div
              key={idx}
              className="w-full max-w-5xl bg-[#111118] border border-[#1E1E2E] rounded-2xl overflow-hidden group relative transition-all duration-300"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_rgba(0,212,255,0.8)]" />

              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
                  <div className="font-label text-xs tracking-widest text-[#6B7280] flex items-center">
                    STATUS:
                    <span className="flex items-center ml-2 text-white bg-[#1E1E2E] px-2 py-1 rounded">
                      <span className={`w-2 h-2 rounded-full mr-2 ${project.statusColor} ${project.status === 'ACTIVE' ? 'animate-pulse' : ''}`} />
                      {project.status}
                    </span>
                  </div>
                  <span className="font-label text-xs text-[#00D4FF] border border-[#00D4FF]/20 bg-[#00D4FF]/5 px-2.5 py-1 rounded-md">
                    {project.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-[#F0F0FF] mb-2">
                  {project.title}
                </h3>
                <div className="font-heading text-[#00D4FF] text-sm mb-3 sm:mb-4">
                  {project.subtitle}
                </div>
                <p className="font-body text-[#6B7280] text-sm sm:text-[15px] leading-relaxed max-w-3xl mb-6 sm:mb-8">
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
          ))}
        </div>
      </div>
    </section>
  );
}
