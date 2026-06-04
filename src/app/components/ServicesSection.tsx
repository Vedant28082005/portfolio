import React from 'react';
import { Terminal, Activity, Link as LinkIcon, Server } from 'lucide-react';

const services = [
  {
    name: 'MCP Server — PhysAgent Node Registry',
    endpoint: 'vedantsutariya.com/mcp/physagent',
    protocol: 'SSE · Port 3000',
    status: 'ONLINE',
    statusColor: 'bg-[#00FF88]',
    statusText: 'text-[#00FF88]',
    icon: Server,
  },
  {
    name: 'Cloudflare Tunnel',
    endpoint: 'Permanent URL — stable across restarts',
    protocol: 'Replaces ngrok · free · no expiry',
    status: 'ROUTING',
    statusColor: 'bg-[#00D4FF]',
    statusText: 'text-[#00D4FF]',
    icon: LinkIcon,
  },
  {
    name: 'ESP32 MCP Node',
    endpoint: 'vedantsutariya.com/mcp/esp32',
    protocol: 'GPIO/I2C bridge via MCP',
    status: 'STANDBY',
    statusColor: 'bg-[#FF6B2B]',
    statusText: 'text-[#FF6B2B]',
    icon: Activity,
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">

        <div className="mb-8 sm:mb-10 flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#00FF88] animate-pulse mr-4 shadow-[0_0_10px_rgba(0,255,136,0.5)]" />
          <h2 className="font-heading uppercase text-xl sm:text-2xl md:text-3xl text-[#F0F0FF]">
            LIVE INFRASTRUCTURE
          </h2>
        </div>

        <p className="font-body text-[#6B7280] mb-6 sm:mb-8 text-sm sm:text-base">
          vedantsutariya.com — Services Running on Edge
        </p>

        <div className="bg-[#0D0D14] border border-[#00D4FF] rounded-lg shadow-[inset_0_0_30px_rgba(0,212,255,0.05)] overflow-hidden">

          {/* Terminal Header */}
          <div className="bg-[#111118] px-4 py-3 flex items-center border-b border-[#1E1E2E]">
            <Terminal className="w-4 h-4 text-[#6B7280] mr-2 flex-shrink-0" />
            <div className="font-label text-xs text-[#6B7280]">infra-monitor.sh</div>
          </div>

          {/* Service rows — fully responsive, no min-width */}
          <div>
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-6 ${idx !== services.length - 1 ? 'border-b border-[#1E1E2E]' : ''} hover:bg-[#111118]/50 transition-colors`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className={`w-2.5 h-2.5 rounded-full ${service.statusColor}`} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-label text-sm text-[#F0F0FF] mb-1.5 flex items-center gap-2 flex-wrap">
                        <service.icon className="w-4 h-4 text-[#6B7280] flex-shrink-0" />
                        <span>{service.name}</span>
                      </div>
                      <div className="font-label text-xs text-[#00D4FF] mb-1 break-all">
                        {service.endpoint}
                      </div>
                      <div className="font-label text-xs text-[#6B7280]">
                        {service.protocol}
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 ml-7 sm:ml-0">
                    <span className="font-label text-xs border border-[#1E1E2E] bg-[#0A0A0F] px-3 py-1 rounded text-[#F0F0FF]">
                      Status: <span className={service.statusText}>{service.status}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 sm:mt-6 text-center">
          <p className="font-body text-xs sm:text-sm text-[#6B7280]">
            Powered by Cloudflare Tunnel — permanent, free, zero restart issues.
          </p>
        </div>

      </div>
    </section>
  );
}
