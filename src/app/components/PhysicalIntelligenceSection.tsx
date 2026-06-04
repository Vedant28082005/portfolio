import React from 'react';
import { Brain, ArrowDown, GitBranch, Layers, Cpu, Activity } from 'lucide-react';

const devices = [
  { name: 'Raspberry Pi 5', role: 'Core Compute / MCP Server', tag: 'Linux' },
  { name: 'ESP32 DevKitC', role: 'IoT Nodes / GPIO Bridge', tag: 'Wireless' },
  { name: 'TG30 LiDAR', role: 'SLAM / Navigation', tag: 'Sensor' },
  { name: 'ADXL345', role: 'Vibration Analysis / Fault Detection', tag: 'Sensor' },
  { name: 'KX134 Accelerometer', role: 'High-G Impact Sensing', tag: 'Sensor' },
  { name: 'DHT11', role: 'Environmental Monitoring', tag: 'Sensor' },
  { name: 'CNC Monitoring Sensors', role: 'Industrial Condition Monitoring', tag: 'Industrial' },
];

const stack = [
  { label: 'AI Agents', icon: Brain, color: 'text-[#00D4FF]', border: 'border-[#00D4FF]/30', bg: 'bg-[#00D4FF]/5' },
  { label: 'Tool Calling', icon: GitBranch, color: 'text-[#00FF88]', border: 'border-[#00FF88]/30', bg: 'bg-[#00FF88]/5' },
  { label: 'MCP Nodes', icon: Layers, color: 'text-[#00D4FF]', border: 'border-[#00D4FF]/30', bg: 'bg-[#00D4FF]/5' },
  { label: 'Sensors & Devices', icon: Cpu, color: 'text-[#FF6B2B]', border: 'border-[#FF6B2B]/30', bg: 'bg-[#FF6B2B]/5' },
  { label: 'Real World Actions', icon: Activity, color: 'text-[#00FF88]', border: 'border-[#00FF88]/30', bg: 'bg-[#00FF88]/5' },
];

export function PhysicalIntelligenceSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="mb-10 sm:mb-14">
          <h2 className="font-heading uppercase text-3xl md:text-4xl text-[#F0F0FF] inline-block border-b-2 border-[#00D4FF] pb-2">
            PHYSICAL INTELLIGENCE LAB
          </h2>
          <p className="font-body text-[#6B7280] mt-4 text-base sm:text-lg max-w-2xl">
            AI is not just generating text. It is reading sensors, controlling actuators, and making decisions on hardware I built.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          {/* Architecture stack */}
          <div>
            <div className="font-label text-xs text-[#00D4FF] tracking-widest mb-5 sm:mb-6 uppercase">Architecture</div>
            <div className="space-y-1">
              {stack.map(({ label, icon: Icon, color, border, bg }, idx) => (
                <React.Fragment key={idx}>
                  <div className={`flex items-center gap-3 border ${border} ${bg} rounded-lg px-4 sm:px-5 py-3 sm:py-4`}>
                    <Icon className={`w-4 h-4 ${color} flex-shrink-0`} />
                    <span className={`font-label text-sm ${color}`}>{label}</span>
                  </div>
                  {idx < stack.length - 1 && (
                    <div className="flex justify-center py-0.5">
                      <ArrowDown className="w-4 h-4 text-[#1E1E2E]" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="font-body text-xs text-[#6B7280] mt-5 sm:mt-6 leading-relaxed">
              LLM agents call MCP tools that map to physical hardware operations. The reasoning layer and the physical layer are directly coupled.
            </p>
          </div>

          {/* Devices */}
          <div>
            <div className="font-label text-xs text-[#00D4FF] tracking-widest mb-5 sm:mb-6 uppercase">Devices in the Lab</div>
            <div className="space-y-2 sm:space-y-3">
              {devices.map((device, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-[#111118] border border-[#1E1E2E] rounded-lg px-4 sm:px-5 py-3 sm:py-4 hover:border-[#00D4FF]/20 transition-colors group gap-3"
                >
                  <div className="min-w-0">
                    <div className="font-label text-sm text-[#F0F0FF] group-hover:text-[#00D4FF] transition-colors mb-0.5 truncate">
                      {device.name}
                    </div>
                    <div className="font-body text-xs text-[#6B7280] truncate">{device.role}</div>
                  </div>
                  <span className="font-label text-xs text-[#6B7280] border border-[#1E1E2E] bg-[#0A0A0F] px-2.5 py-1 rounded-md flex-shrink-0">
                    {device.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
