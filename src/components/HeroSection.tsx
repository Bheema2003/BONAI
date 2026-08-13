import React, { useState } from 'react';
import { 
  ArrowRight, Smartphone, Cpu, ShieldCheck, Zap, 
  Layers, CheckCircle2, Terminal, Code2, Sparkles, Sliders
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { AppInteractiveSimulators } from './AppInteractiveSimulators';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [heroAppType, setHeroAppType] = useState<'calculator' | 'tip-calc' | 'time-calc'>('calculator');

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200/80"
    >
      {/* Engineering Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Corporate Identification Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="font-mono-code font-bold tracking-tight">BONAI ENGINEERING PRIVATE LIMITED</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Engineering Ideas.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
                Building Digital Solutions.
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We engineer dependable, high-performance software and lightweight Android mobile applications. Our focus is delivering practical, reliable digital tools designed to solve real-world calculation, utility, and workflow needs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-our-services-btn"
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/30 group"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-mobile-apps-btn"
                onClick={() => onNavigate('apps')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300/80 rounded-xl transition-all shadow-xs hover:border-slate-400"
              >
                <Smartphone className="w-4 h-4 text-blue-600" />
                <span>Explore Mobile Apps</span>
              </button>
            </div>

            {/* Engineering Highlights Quick Row */}
            <div className="pt-6 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Fast & Light</h4>
                  <p className="text-xs text-slate-500">Under 5MB app footprint</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">100% Reliable</h4>
                  <p className="text-xs text-slate-500">Offline-first functionality</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 shrink-0 mt-0.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Engineering Focus</h4>
                  <p className="text-xs text-slate-500">Since 2021 in India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Android Device Canvas */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm">
              
              {/* App Interactive Selector Pill */}
              <div className="mb-3 bg-white p-1 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between text-xs font-medium">
                <button
                  onClick={() => setHeroAppType('calculator')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-center transition-colors ${
                    heroAppType === 'calculator'
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Calculator
                </button>
                <button
                  onClick={() => setHeroAppType('tip-calc')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-center transition-colors ${
                    heroAppType === 'tip-calc'
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tip Splitter
                </button>
                <button
                  onClick={() => setHeroAppType('time-calc')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-center transition-colors ${
                    heroAppType === 'time-calc'
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Time Calc
                </button>
              </div>

              {/* Realistic Mobile Device Frame */}
              <div className="relative p-2.5 bg-slate-900 rounded-[28px] shadow-2xl border-4 border-slate-800">
                {/* Camera punch hole */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-slate-950 rounded-full border border-slate-800 z-20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-blue-900/60 rounded-full" />
                </div>

                {/* Interactive Simulator Screen */}
                <div className="pt-2">
                  <AppInteractiveSimulators type={heroAppType} />
                </div>
              </div>

              {/* Interactive prompt note */}
              <p className="mt-3 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Interactive live preview of our mobile utility tools</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
