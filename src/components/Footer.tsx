import React from 'react';
import { Cpu, ArrowUp, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white tracking-tight text-base sm:text-lg font-heading">
                  BONAI ENGINEERING PRIVATE LIMITED
                </h4>
                <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider font-mono-code">
                  Engineering & Technology Solutions
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              A technology-driven engineering enterprise focused on mobile application development, Android engineering, and lightweight digital utility software.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-400 text-xs font-mono-code">
              <span>Incorporated in India in 2021</span>
            </div>
          </div>

          {/* Quick Section Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-blue-400 transition-colors focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-blue-400 transition-colors focus:outline-none"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-blue-400 transition-colors focus:outline-none"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('apps')}
                  className="hover:text-blue-400 transition-colors focus:outline-none"
                >
                  Mobile Applications
                </button>
              </li>
            </ul>
          </div>

          {/* Core Areas */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Focus Areas
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-blue-500" />
                <span>Mobile Application Development</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-blue-500" />
                <span>Android Engineering & Jetpack</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-blue-500" />
                <span>Calculators & Productivity Tools</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-blue-500" />
                <span>Custom Software Solutions</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left">
            <p>
              Copyright © 2026 <strong className="text-slate-200 font-semibold">BONAI ENGINEERING PRIVATE LIMITED</strong>. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              Engineering & Technology Solutions • Mobile Applications & Digital Products
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
