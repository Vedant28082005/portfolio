import React from 'react';
import '../styles/fonts.css';

import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AIEngineeringSection } from './components/AIEngineeringSection';
import { TechnicalSkillsSection } from './components/TechnicalSkillsSection';
import { HardwareSection } from './components/HardwareSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AISystemsSection } from './components/AISystemsSection';
import { PhysicalIntelligenceSection } from './components/PhysicalIntelligenceSection';
import { EngineeringJourneySection } from './components/EngineeringJourneySection';
import { ResearchInterestsSection } from './components/ResearchInterestsSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const Divider = () => (
  <div className="w-full flex justify-center py-4 bg-[#0A0A0F]">
    <div className="w-px h-16 bg-gradient-to-b from-[#1E1E2E] via-[#00D4FF] to-[#1E1E2E] opacity-50" />
  </div>
);

export default function App() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#F0F0FF] selection:bg-[#00D4FF] selection:text-[#0A0A0F]">

      <HeroSection />

      <div className="w-full flex justify-center py-4 bg-[#0A0A0F]">
        <div className="w-px h-16 bg-gradient-to-b from-[#00D4FF] to-transparent opacity-50" />
      </div>

      <AboutSection />
      <Divider />

      <AIEngineeringSection />
      <Divider />

      <TechnicalSkillsSection />
      <Divider />

      <HardwareSection />
      <Divider />

      <ProjectsSection />
      <Divider />

      <AISystemsSection />
      <Divider />

      <PhysicalIntelligenceSection />
      <Divider />

      <EngineeringJourneySection />
      <Divider />

      <ResearchInterestsSection />
      <Divider />

      <ServicesSection />
      <Divider />

      <ContactSection />

      <Footer />
    </main>
  );
}
