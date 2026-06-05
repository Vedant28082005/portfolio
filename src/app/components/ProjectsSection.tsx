import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    status: 'ACTIVE',
    statusColor: 'bg-[#00FF88]',
    title: 'PHYSAGENT',
    subtitle: 'Embodied AI Agent Platform',
    desc: 'Natural language to GPIO/I2C/SPI commands. MCP-based node registry. ESP32 + RPi5 mesh. 10-stage build from sensor node to full autonomous control.',
    stack: ['Python', 'micro-ROS', 'MCP', 'FastAPI', 'ESP32', 'RPi5'],
    repo: 'https://github.com/Vedant28082005/physagent',
  },
  {
    status: 'BUILDING',
    statusColor: 'bg-[#FF6B2B]',
    title: 'AUTOBOT',
    subtitle: 'Autonomous Navigation Platform',
    desc: 'ROS2 Jazzy + TG30 LiDAR + SLAM. Odometry sync, motor control via PWMA/PWMB. OpenManipulator-X integration in progress.',
    stack: ['ROS2', 'Python', 'RPi5', 'LiDAR', 'Ubuntu 24.04'],
    repo: 'https://github.com/Vedant28082005/amr-ros2-workspace',
  },
  {
    status: 'SHIPPED',
    statusColor: 'bg-[#6B7280]',
    title: 'YATRAAI',
    subtitle: 'AI Travel Planning Platform',
    desc: 'AWS-hosted, FastAPI + Next.js, MongoDB Atlas. Google Gemini 1.5 Pro for trip generation. Built as cloud architecture course project @ PDEU.',
    stack: ['AWS', 'Docker', 'FastAPI', 'Next.js', 'Gemini', 'MongoDB'],
    repo: 'https://github.com/2903-adi/YatraAI',
  },
];

export function ProjectsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-16 text-center">
          <h2 className="font-heading uppercase text-3xl md:text-4xl text-[#F0F0FF] inline-block border-b-2 border-[#00D4FF] pb-2 shadow-[0_4px_15px_rgba(0,212,255,0.2)]">
            PROJECTS
          </h2>
        </div>

        <div className="flex flex-col items-center space-y-5 sm:space-y-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="w-full max-w-5xl bg-[#111118] border border-[#1E1E2E] rounded-2xl overflow-hidden group relative transition-all duration-300 cursor-pointer block"
            >
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

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-3 py-1.5 border border-[#1E1E2E] rounded-md text-[#6B7280] hover:text-[#00D4FF] hover:border-[#00D4FF] transition-colors font-label text-xs active:scale-95"
                  >
                    <Github className="w-3.5 h-3.5" />
                    View Repo
                  </a>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
