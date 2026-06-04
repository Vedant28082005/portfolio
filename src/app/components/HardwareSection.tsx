import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const hardwareItems = [
  {
    name: 'Arduino UNO Rev3',
    specs: [
      'AVR ATmega328P · 14 Digital I/O',
      '6 PWM Channels · 6 Analog Inputs',
      'Used for: Motor control, sensor prototyping, CNC monitoring, I/O testing',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg',
    tags: [
      { label: 'Embedded', color: 'text-[#FF6B2B] bg-[#FF6B2B]/10 border-[#FF6B2B]/20' },
    ],
  },
  {
    name: 'ESP32 DevKitC',
    specs: [
      'Dual-core 240MHz · Wi-Fi + Bluetooth',
      'GPIO / I2C / SPI / UART / ADC',
      'Used for: IoT nodes, sensor fusion, micro-ROS, capacitive sensing',
    ],
    image: 'https://www.espressif.com/sites/all/themes/espressif/images/esp32-devkitc/esp32-devkitc-32e.png',
    tags: [
      { label: 'Wireless', color: 'text-[#00D4FF] bg-[#00D4FF]/10 border-[#00D4FF]/20' },
      { label: 'Embedded', color: 'text-[#FF6B2B] bg-[#FF6B2B]/10 border-[#FF6B2B]/20' },
    ],
  },
  {
    name: 'Raspberry Pi 5',
    specs: [
      'Cortex-A76 · 4-core · PCIe 2.0',
      'Runs Ubuntu 24.04 + ROS2 Jazzy',
      'Used for: PhysAgent core, SLAM, camera streaming, MCP server',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Raspberry_Pi_5.jpg',
    tags: [
      { label: 'Linux', color: 'text-[#00FF88] bg-[#00FF88]/10 border-[#00FF88]/20' },
      { label: 'Compute', color: 'text-[#00D4FF] bg-[#00D4FF]/10 border-[#00D4FF]/20' },
    ],
  },
];

export function HardwareSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-16">
          <h2 className="font-heading uppercase text-3xl md:text-4xl text-[#F0F0FF] inline-block border-b-2 border-[#00D4FF] pb-2">
            HARDWARE TOOLKIT
          </h2>
          <p className="font-body text-[#6B7280] mt-4 text-base sm:text-lg">
            The physical layer I work with daily
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {hardwareItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#111118] border border-[#1E1E2E] rounded-xl overflow-hidden group hover:border-[#00D4FF] hover:shadow-[0_0_25px_rgba(0,212,255,0.15)] hover:-translate-y-1 transition-all duration-300 relative"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative aspect-[4/3] bg-[#0A0A0F] overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={`${item.name} hardware board used by Vedant Sutariya`}
                  className="w-full h-full object-contain p-4 sm:p-6 mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111118] to-transparent opacity-80" />
              </div>

              <div className="p-5 sm:p-6 relative">
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#F0F0FF] mb-3 sm:mb-4">
                  {item.name}
                </h3>
                <div className="h-[1px] w-full bg-[#1E1E2E] mb-3 sm:mb-4" />

                <div className="space-y-1.5 mb-5 sm:mb-6">
                  {item.specs.map((spec, sIdx) => (
                    <p key={sIdx} className="font-label text-[12px] sm:text-[13px] text-[#6B7280] leading-snug">
                      {spec}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`font-label text-xs px-2.5 py-1 rounded-md border ${tag.color}`}
                    >
                      {tag.label}
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
