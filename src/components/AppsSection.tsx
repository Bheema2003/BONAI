import React, { useState } from 'react';
import { 
  Smartphone, Calculator, Receipt, Clock, ArrowLeftRight, 
  FileText, Check, Zap, Shield, HardDrive, Cpu, 
  Sparkles, ExternalLink, Play, SlidersHorizontal, ChevronRight
} from 'lucide-react';
import { MOBILE_APPS } from '../data/companyData';
import { AppProduct } from '../types';
import { AppInteractiveSimulators } from './AppInteractiveSimulators';

export const AppsSection: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>('precision-calculator');
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'upcoming'>('all');

  const selectedApp = MOBILE_APPS.find((app) => app.id === selectedAppId) || MOBILE_APPS[0];

  const getAppIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator': return <Calculator className="w-5 h-5" />;
      case 'Receipt': return <Receipt className="w-5 h-5" />;
      case 'Clock': return <Clock className="w-5 h-5" />;
      case 'ArrowLeftRight': return <ArrowLeftRight className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      default: return <Smartphone className="w-5 h-5" />;
    }
  };

  const filteredApps = MOBILE_APPS.filter((app) => {
    if (activeTab === 'active') return app.status === 'Active Release';
    if (activeTab === 'upcoming') return app.status === 'In Development' || app.status === 'Planned';
    return true;
  });

  return (
    <section id="apps" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Mobile Emphasis */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Applications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Lightweight, Practical Mobile Tools for Everyday Tasks
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We engineer lightweight, user-friendly, and practical mobile applications designed to solve everyday problems. Every application is built with a strict focus on fast startup, minimal device storage, zero ad clutter, and seamless offline reliability.
          </p>
        </div>

        {/* Engineering Principles for Mobile Apps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Instant Launch</div>
              <div className="text-[11px] text-slate-500">&lt;200ms cold start</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <HardDrive className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Lightweight APK</div>
              <div className="text-[11px] text-slate-500">Under 5MB storage</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">100% Offline</div>
              <div className="text-[11px] text-slate-500">Zero network lock-in</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Android Optimized</div>
              <div className="text-[11px] text-slate-500">Modern Jetpack core</div>
            </div>
          </div>
        </div>

        {/* Showcase & Interactive Tester Grid */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm mb-16">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                Featured App Preview
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                Interactive Utility Experience
              </h3>
            </div>

            {/* Quick App Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-slate-200/70 p-1 rounded-xl">
              {MOBILE_APPS.map((app) => {
                const isSelected = app.id === selectedAppId;
                return (
                  <button
                    key={app.id}
                    id={`app-select-btn-${app.id}`}
                    onClick={() => setSelectedAppId(app.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-white text-blue-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {getAppIcon(app.iconName)}
                    <span className="hidden sm:inline">{app.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8 items-start">
            
            {/* Left: App Details, Specs, and Features */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                  {getAppIcon(selectedApp.iconName)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-bold text-slate-900">{selectedApp.name}</h4>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      selectedApp.status === 'Active Release'
                        ? 'bg-emerald-100 text-emerald-800'
                        : selectedApp.status === 'In Development'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {selectedApp.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{selectedApp.tagline}</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedApp.description}
              </p>

              {/* Key Features */}
              <div>
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Engineered Features
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedApp.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="bg-white rounded-xl p-4 border border-slate-200/90">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Technical Specifications
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Platform</span>
                    <strong className="text-slate-800 font-mono-code">{selectedApp.specs.targetPlatform}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Download Size</span>
                    <strong className="text-slate-800 font-mono-code">{selectedApp.specs.downloadSize}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Architecture</span>
                    <strong className="text-slate-800 font-mono-code">{selectedApp.specs.architecture}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Offline Status</span>
                    <strong className="text-emerald-700 font-mono-code font-bold">100% Ready</strong>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Live Interactive Mobile Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm">
                <div className="p-2 bg-slate-900 rounded-[26px] shadow-xl border-4 border-slate-800">
                  <div className="pt-2">
                    <AppInteractiveSimulators type={selectedApp.previewType} />
                  </div>
                </div>
                <span className="block mt-2.5 text-center text-xs text-slate-500">
                  Interactive simulation of {selectedApp.name} logic
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Section: "Our Apps" Catalog Grid */}
        <div id="our-apps-catalog">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Our Apps Catalog
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Current release portfolio and expanding utility pipeline
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg self-start sm:self-auto text-xs font-semibold">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1 rounded-md transition-colors ${activeTab === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              >
                All Apps ({MOBILE_APPS.length})
              </button>
              <button
                onClick={() => setActiveTab('active')}
                className={`px-3 py-1 rounded-md transition-colors ${activeTab === 'active' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Active ({MOBILE_APPS.filter(a => a.status === 'Active Release').length})
              </button>
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-3 py-1 rounded-md transition-colors ${activeTab === 'upcoming' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Pipeline ({MOBILE_APPS.filter(a => a.status !== 'Active Release').length})
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => {
              const isSelected = app.id === selectedAppId;
              return (
                <div
                  key={app.id}
                  id={`catalog-card-${app.id}`}
                  onClick={() => setSelectedAppId(app.id)}
                  className={`bg-white rounded-2xl p-6 border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-md'
                      : 'border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700">
                        {getAppIcon(app.iconName)}
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        app.status === 'Active Release'
                          ? 'bg-emerald-100 text-emerald-800'
                          : app.status === 'In Development'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {app.status}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      {app.name}
                    </h4>
                    <p className="text-xs text-slate-500 mb-3 font-medium">
                      {app.category}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                      {app.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-mono-code text-slate-500 text-[11px]">
                      Size: {app.specs.downloadSize}
                    </span>
                    <span className="text-blue-700 font-semibold flex items-center gap-1">
                      <span>{isSelected ? 'Viewing' : 'Test Preview'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
