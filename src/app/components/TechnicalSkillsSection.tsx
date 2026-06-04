import React from 'react';

const skillCategories = [
  {
    title: 'Languages',
    color: 'text-[#00D4FF]',
    borderColor: 'border-[#00D4FF]/20',
    items: ['Python', 'C', 'C++', 'SQL', 'JavaScript', 'Embedded C'],
  },
  {
    title: 'AI / Machine Learning',
    color: 'text-[#00FF88]',
    borderColor: 'border-[#00FF88]/20',
    items: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-Learn', 'OpenCV', 'LangChain', 'Ollama', 'FAISS', 'Hugging Face', 'Prompt Engineering', 'RAG Systems'],
  },
  {
    title: 'Embedded & IoT',
    color: 'text-[#FF6B2B]',
    borderColor: 'border-[#FF6B2B]/20',
    items: ['ESP32', 'Raspberry Pi', 'Arduino', 'I2C', 'SPI', 'UART', 'MQTT', 'Sensor Integration'],
  },
  {
    title: 'Robotics',
    color: 'text-[#00D4FF]',
    borderColor: 'border-[#00D4FF]/20',
    items: ['ROS2', 'SLAM', 'LiDAR', 'Sensor Fusion', 'Navigation Systems', 'Motor Control'],
  },
  {
    title: 'Software & Cloud',
    color: 'text-[#6B7280]',
    borderColor: 'border-[#6B7280]/20',
    items: ['Git', 'Docker', 'Linux', 'FastAPI', 'React', 'Vite', 'REST APIs', 'AWS'],
  },
];

export function TechnicalSkillsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="mb-10 sm:mb-14">
          <h2 className="font-heading uppercase text-3xl md:text-4xl text-[#F0F0FF] inline-block border-b-2 border-[#00D4FF] pb-2">
            TECHNICAL SKILLS
          </h2>
          <p className="font-body text-[#6B7280] mt-4 text-base sm:text-lg">
            Full-stack engineering across AI, embedded systems, and robotics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-5 sm:p-6"
            >
              <div className={`font-label text-xs tracking-widest uppercase mb-3 sm:mb-4 ${cat.color}`}>
                {cat.title}
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {cat.items.map((item, iIdx) => (
                  <span
                    key={iIdx}
                    className={`font-label text-xs text-[#F0F0FF] border ${cat.borderColor} bg-[#0A0A0F] px-2.5 py-1 rounded-md`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
