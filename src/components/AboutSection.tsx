import React from 'react';
import { 
  Building2, Calendar, MapPin, Cpu, Smartphone, Layers, 
  CheckCircle2, Shield, Target, Code, Binary, Workflow
} from 'lucide-react';
import { PILLARS } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>About Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            An Engineering & Technology-Driven Organization
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Incorporated in India in 2021, <strong className="text-slate-900 font-semibold">BONAI ENGINEERING PRIVATE LIMITED</strong> operates as a technology-driven engineering enterprise focused on developing robust software systems, modern mobile solutions, and practical digital products.
          </p>
        </div>

        {/* Corporate Profile Card & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Key Facts Summary */}
          <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 font-mono-code">
                  Corporate Profile
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  BONAI ENGINEERING PRIVATE LIMITED
                </h3>
              </div>

              <div className="space-y-4 text-sm border-t border-slate-800 pt-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Incorporation</span>
                    <strong className="text-white font-medium">Year 2021</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Jurisdiction</span>
                    <strong className="text-white font-medium">India</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Core Discipline</span>
                    <strong className="text-white font-medium">Engineering & Digital Technology</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800 text-xs text-slate-400 leading-normal relative z-10">
              Committed to engineering discipline, code quality, and sustainable software architecture.
            </div>
          </div>

          {/* Philosophy and Technical Focus */}
          <div className="lg:col-span-8 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Engineering Discipline Meets Practical Software Design
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                At Bonai Engineering, we approach software development with the rigor and precision of traditional engineering. Rather than chasing ephemeral trends or adding bloated features, we focus on building digital solutions that are dependable, performant, and purposeful.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-2.5 text-blue-700 font-semibold text-sm mb-1.5">
                  <Code className="w-4 h-4" />
                  <span>Clean Engineering Architecture</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Adhering to strict architectural standards, modular patterns, and deterministic computational logic.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-2.5 text-blue-700 font-semibold text-sm mb-1.5">
                  <Smartphone className="w-4 h-4" />
                  <span>Mobile & Android Optimization</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deep specialization in Android OS, crafting applications with lightning-fast cold boot and minimal battery consumption.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-2.5 text-blue-700 font-semibold text-sm mb-1.5">
                  <Shield className="w-4 h-4" />
                  <span>Privacy & Zero Bloatware</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Practical utilities that respect user time and privacy, functioning with zero intrusive telemetry or annoying ad popups.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-2.5 text-blue-700 font-semibold text-sm mb-1.5">
                  <Workflow className="w-4 h-4" />
                  <span>Sustainable Product Lifecycle</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Designing solutions built for multi-year stability, cross-device compatibility, and smooth ongoing updates.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Our Core Principles
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              How we approach every software tool, mobile application, and engineering project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-slate-50/70 hover:bg-white p-6 rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                  {pillar.subtitle}
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-1 mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-auto">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
