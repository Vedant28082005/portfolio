import React from 'react';
import { Brain, Database, Cpu, GitBranch, Layers, Zap } from 'lucide-react';

const capabilities = [
  { label: 'Large Language Models (LLMs)', icon: Brain },
  { label: 'Retrieval-Augmented Generation (RAG)', icon: Database },
  { label: 'AI Agents', icon: Zap },
  { label: 'Tool Calling', icon: GitBranch },
  { label: 'MCP Architecture', icon: Layers },
  { label: 'Prompt Engineering', icon: Brain },
  { label: 'Fine-Tuning (QLoRA / LoRA)', icon: Cpu },
  { label: 'Local LLM Deployment', icon: Cpu },
  { label: 'Vector Databases', icon: Database },
  { label: 'Embedding Models', icon: Layers },
  { label: 'Multi-Agent Systems', icon: Zap },
  { label: 'Agentic Workflows', icon: GitBranch },
];

const frameworks = [
  'LangChain', 'Ollama', 'OpenAI API', 'FAISS',
  'TensorFlow', 'Keras', 'PyTorch', 'Scikit-Learn',
  'OpenCV', 'Hugging Face',
];

export function AIEngineeringSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="mb-10 sm:mb-14">
          <h2 className="font-heading uppercase text-3xl md:text-4xl text-[#F0F0FF] inline-block border-b-2 border-[#00D4FF] pb-2">
            AI ENGINEERING
          </h2>
          <p className="font-body text-[#6B7280] mt-4 text-base sm:text-lg max-w-2xl">
            Building intelligent systems that reason, retrieve, act, and interact with the physical world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Capabilities */}
          <div>
            <div className="font-label text-xs text-[#00D4FF] tracking-widest mb-4 sm:mb-5 uppercase">Capabilities</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {capabilities.map(({ label, icon: Icon }, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-[#111118] border border-[#1E1E2E] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 hover:border-[#00D4FF]/40 transition-colors group"
                >
                  <Icon className="w-3.5 h-3.5 text-[#00D4FF] flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="font-label text-xs sm:text-sm text-[#F0F0FF] leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks + context */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <div className="font-label text-xs text-[#00D4FF] tracking-widest mb-4 sm:mb-5 uppercase">Frameworks & Tools</div>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((f, idx) => (
                  <span
                    key={idx}
                    className="font-label text-xs text-[#F0F0FF] border border-[#1E1E2E] bg-[#0A0A0F] px-3 py-1.5 rounded-md hover:border-[#00D4FF]/50 transition-colors"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-5 sm:p-6 space-y-4">
              <div className="font-label text-xs text-[#00D4FF] tracking-widest uppercase">Focus</div>
              <p className="font-body text-sm text-[#6B7280] leading-relaxed">
                My AI work is not isolated to text generation. I build systems where LLMs drive real-world hardware — reading sensors, controlling actuators, and making decisions at the edge. The combination of AI engineering with embedded systems is my core specialization.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Embodied AI', 'Edge AI', 'Physical Intelligence', 'Industrial AI'].map((tag, idx) => (
                  <span key={idx} className="font-label text-xs text-[#FF6B2B] border border-[#FF6B2B]/20 bg-[#FF6B2B]/5 px-3 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
