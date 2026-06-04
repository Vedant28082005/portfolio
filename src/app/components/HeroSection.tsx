import React from 'react';
import { Github, Linkedin, FileText, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImg from '../../imports/ChatGPT_Image_Jun_4__2026__03_57_26_PM.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-12 overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0, 212, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 212, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                <ImageWithFallback src={profileImg} alt="Vedant Sutariya" className="w-full h-full object-cover" />
              </div>

              <div>
                <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F0F0FF] tracking-tight leading-none">
                  VEDANT <br /> SUTARIYA
                </h1>
                <div className="w-20 sm:w-24 h-[2px] bg-[#00D4FF] mt-4 sm:mt-6" />
              </div>

              <div className="font-heading text-base sm:text-lg md:text-xl text-[#00D4FF]">
                AI Engineer · Embedded Systems · Robotics
              </div>

              <div className="space-y-2">
                <div className="font-label text-xs sm:text-sm text-[#F0F0FF] bg-[#111118] border border-[#1E1E2E] inline-flex items-start sm:items-center px-3 sm:px-4 py-2 rounded-md max-w-full">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B2B] mr-2 sm:mr-3 mt-1 sm:mt-0 flex-shrink-0" />
                  <span className="leading-relaxed">B.Tech ICT @ PDEU · Major: ICT · Minor: Robotics</span>
                </div>
                <div className="font-label text-xs sm:text-sm text-[#6B7280] block mt-2">
                  Embedded Systems · AI/ML · Robotics · IoT
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#00D4FF] text-[#0A0A0F] font-label text-sm font-semibold rounded-md hover:bg-[#00b8d9] transition-colors"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-4 sm:px-5 py-2.5 border border-[#00D4FF] text-[#00D4FF] font-label text-sm rounded-md hover:bg-[#00D4FF]/10 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
              <a
                href="https://github.com/Vedant28082005"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center p-2.5 border border-[#1E1E2E] rounded-md text-[#6B7280] hover:text-[#00D4FF] hover:border-[#00D4FF] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vedant-sutariya-776268285"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center p-2.5 border border-[#1E1E2E] rounded-md text-[#6B7280] hover:text-[#00D4FF] hover:border-[#00D4FF] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column — Terminal */}
          <div className="lg:col-span-5 relative w-full">
            <div className="absolute -inset-4 bg-[#00D4FF] opacity-10 blur-2xl rounded-full" />

            <div className="relative bg-[#111118] border border-[#00D4FF] rounded-lg shadow-[inset_0_0_20px_rgba(0,212,255,0.15)] overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-[#0D0D14] px-4 py-3 flex items-center gap-2 border-b border-[#1E1E2E]">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <div className="ml-4 font-label text-xs text-[#6B7280]">bash — phys-agent</div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-6 font-heading text-xs sm:text-sm text-[#00FF88] leading-relaxed space-y-2 overflow-x-auto">
                <div><span className="text-[#6B7280]">$</span> phys-agent status --verbose</div>
                <div className="flex justify-between gap-2 min-w-0">
                  <span className="truncate">[OK] ESP32 Node #1</span>
                  <span className="text-white flex-shrink-0">ONLINE</span>
                </div>
                <div className="flex justify-between gap-2 min-w-0">
                  <span className="truncate">[OK] RPi5 Core</span>
                  <span className="text-white flex-shrink-0">RUNNING</span>
                </div>
                <div className="flex justify-between gap-2 min-w-0">
                  <span className="truncate">[OK] TG30 LiDAR</span>
                  <span className="text-white flex-shrink-0">SCANNING</span>
                </div>
                <div className="flex justify-between gap-2 min-w-0">
                  <span className="truncate">[OK] MCP Server</span>
                  <span className="text-white flex-shrink-0">ACTIVE</span>
                </div>
                <div className="text-[#00D4FF] text-xs sm:text-sm break-all">&gt; Temp: 31.4°C | Humidity: 68% | eCO2: 412ppm</div>
                <div className="text-[#00D4FF] text-xs sm:text-sm">&gt; Bearing FFT: [Normal] Kurtosis=2.1 OK</div>
                <div className="animate-pulse"><span className="text-[#6B7280]">$</span> _</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
