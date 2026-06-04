import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-[#1E1E2E] py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">

        <div>
          <div className="font-display font-bold text-[#F0F0FF] tracking-wider mb-1">
            VEDANT SUTARIYA
          </div>
          <div className="font-label text-xs text-[#00D4FF]">
            vedantsutariya.com
          </div>
        </div>

        <div>
          <div className="font-label text-xs text-[#6B7280] mb-1">
            Built with: Vite · React · Tailwind · Cloudflare
          </div>
          <div className="font-label text-xs text-[#6B7280]">
            MCP Endpoints: /mcp/physagent · /mcp/esp32
          </div>
        </div>

        <div className="md:text-right">
          <div className="font-label text-xs text-[#6B7280] mb-1 flex items-center justify-center md:justify-end gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
            All systems operational
          </div>
          <div className="font-label text-xs text-[#6B7280]">
            © {new Date().getFullYear()}
          </div>
        </div>

      </div>
    </footer>
  );
}
