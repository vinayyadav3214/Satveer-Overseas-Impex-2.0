/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Target, Compass, Award, Shield, Users, Globe } from 'lucide-react';

export const AboutView: React.FC = () => {
  const [activeStat, setActiveStat] = useState<number>(0);

  const stats = [
    { label: 'Primary Farm Sourcing', value: '45,000+ Hectares', desc: 'Direct contract agricultural farmlands managed across North and South India.' },
    { label: 'Consolidated Trade Capital', value: '$85M+ Volume', desc: 'Secure trade financing facilities enabled in cooperation with premier global banking partners.' },
    { label: 'Strategic Trade Corridors', value: '28 Main Lines', desc: 'Exclusive allocation contracts secured across major ocean freight liners.' },
  ];

  return (
    <div id="about-view" className="text-white bg-[#0e121e]">
      {/* Editorial Hero */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="absolute inset-0 bg-[#0d101a]/95 z-0" />
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAU5v84ni-2n3e-51Y4Dc9suCiYjyoKOVvFvg1Gd-W_fd0Ne5Uc7fA0F4dCEROex1JsTes09nV9smbmPi7yk58yCYuMGXiz1_8hFi6xZU48HTdjVo_9KT4xjr-7CNRMMdy4Omf3ojvaDvKmcTdfZelwR7flNVkqldCzj8hbhwo7t5tQKNburhy98IVB23rJYVtZ5dnm3pimzsPUe9gsIkfok63fxO1sor3ve2N3UTD0OUzhqmibsQUVwTVbyJTdtImk0r7mHsobeSKk')`
          }} 
        />

        <div className="relative max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-12 text-center max-w-4xl mx-auto space-y-6">
            <span className="text-xs text-[#cca43b] tracking-[0.25em] font-mono uppercase">
              Corporate Dossier
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
              Architects of Global Trade
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed font-light font-sans max-w-3xl mx-auto">
              Satveer Overseas Impex orchestrates complex international supply chains with engineering precision, bridging Indian agricultural superiority with strict global compliance targets.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Bento Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-[#121727]/80 rounded-2xl p-8 border border-gray-800 overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 bg-[#cca43b]/5 rounded-full blur-2xl group-hover:bg-[#cca43b]/10 transition-all duration-300" />
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-[#cca43b]/10 text-[#cca43b] rounded-xl border border-[#cca43b]/20">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">Sovereign Mission</h3>
            </div>
            <h4 className="text-md font-semibold text-gray-200 mb-3 font-display">
              Redefining Import-Export through Technological Excellence
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              We seek to construct bulletproof, tech-enabled agricultural conduits out of India. By applying state-of-the-art blockchain-style batch tracking, chemical residue assessments, and container-level multi-sensor telemetry, we guarantee freshness, high-purity composition, and exact shipping schedules.
            </p>
          </div>

          <div className="relative bg-[#121727]/80 rounded-2xl p-8 border border-gray-800 overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all duration-300" />
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-[#cca43b]/10 text-[#cca43b] rounded-xl border border-[#cca43b]/20">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">Borderless Vision</h3>
            </div>
            <h4 className="text-md font-semibold text-gray-200 mb-3 font-display">
              Stabilizing Global Food Security Systems
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              To position Indian grain, pulses, and spices as the gold standards of reliability for wholesale buyers, enterprise food manufacturers, and sovereign distribution syndicates. We envision a fluid marketplace stabilized by long-term commodity pricing futures and transparent supply logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Global Sourcing Section with Maps and Circle DataViz */}
      <section className="py-20 bg-[#111524] border-t border-b border-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs text-[#cca43b] uppercase tracking-widest font-mono">Sourcing Intelligence</span>
            <h2 className="text-3xl font-bold tracking-tight text-white font-display">
              Procurement & Origin Rigor
            </h2>
            <p className="text-gray-400 text-xs leading-relaxed">
              Our dedicated crop monitoring analysts reside directly within crucial farming origins. Using modern remote sensing, soil salinity assays, and weather pattern telemetry, we select perfect commodity batches.
            </p>

            <div className="space-y-4 pt-4">
              {stats.map((stat, idx) => (
                <button
                  key={idx}
                  id={`btn-about-stat-${idx}`}
                  onClick={() => setActiveStat(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start space-x-3 ${
                    activeStat === idx
                      ? 'bg-slate-800/85 border-[#cca43b] text-white shadow-lg'
                      : 'bg-slate-900/30 border-gray-800 text-gray-400 hover:border-gray-700 hover:bg-slate-900/50'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg border text-xs font-mono shrink-0 ${
                    activeStat === idx ? 'border-[#cca43b]/30 bg-[#cca43b]/10 text-white' : 'border-gray-700 bg-gray-800/40 text-gray-500'
                  }`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-300 font-display">
                      {stat.label}
                    </h4>
                    <p className="text-sm font-bold text-white font-mono mt-0.5">{stat.value}</p>
                    {activeStat === idx && (
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed transition-all duration-300">
                        {stat.desc}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[420px] rounded-2xl overflow-hidden border border-gray-800 bg-[#0e121e]">
            {/* Sourcing Origin Map Visualization */}
            <div 
              className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 opacity-30 pointer-events-none"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')` }}
            />
            {/* Circle overlay visualizations (interactive or glowing) */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10 bg-radial-gradient from-transparent via-[#0e121e]/40 to-[#0e121e]">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Origins Core Coordinates</p>
                  <p className="text-xs text-[#cca43b] font-mono uppercase tracking-[0.15em] font-bold">Pan-India Strategic Corridors</p>
                </div>
                <div className="p-2 bg-slate-900/90 border border-gray-800 rounded-lg text-right">
                  <p className="text-[9px] text-[#cca43b] font-mono leading-none">H.Q. CONNECT</p>
                  <p className="text-[10px] text-white font-mono font-bold mt-1">NEW DELHI</p>
                </div>
              </div>

              {/* Graphic circles plot representation of sourcing hubs */}
              <div className="relative h-44 w-full flex items-center justify-center">
                {/* Hub New Delhi */}
                <div className="absolute left-[30%] top-[40%] text-center">
                  <div className="h-3 w-3 bg-[#cca43b] rounded-full pulsate-pin border border-white" />
                  <span className="text-[9px] text-[#cca43b] font-mono block mt-1.5 font-bold uppercase tracking-widest">Rice origin</span>
                </div>
                
                {/* Hub Mumbai */}
                <div className="absolute left-[25%] top-[70%] text-center">
                  <div className="h-3 w-3 bg-teal-400 rounded-full pulsate-pin border border-white" />
                  <span className="text-[9px] text-teal-400 font-mono block mt-1.5 font-bold uppercase tracking-widest">Port Hub</span>
                </div>

                {/* Kerala Hub */}
                <div className="absolute left-[32%] top-[85%] text-center">
                  <div className="h-3 w-3 bg-amber-400 rounded-full pulsate-pin border border-white" />
                  <span className="text-[9px] text-amber-400 font-mono block mt-1.5 font-bold uppercase tracking-widest">Spices origin</span>
                </div>
              </div>

              <div className="p-3 bg-slate-900/90 border border-amber-600/20 rounded-xl grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-gray-500 text-[10px]">Active Harvest Monitoring</p>
                  <p className="text-[#cca43b] font-semibold">Wheat / Paddy / Spices</p>
                </div>
                <div>
                  <p className="text-gray-500 text-[10px]">Testing Standards</p>
                  <p className="text-white font-semibold">Eurofins Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Institutional Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <span className="text-xs text-[#cca43b] font-mono uppercase tracking-[0.25em]">Our DNA</span>
          <h2 className="text-3xl font-extrabold text-white font-display">Operated under Rigorous Corporate Values</h2>
          <p className="text-gray-400 text-xs max-w-xl mx-auto leading-relaxed">
            We operate transparent corporate structures governed by international anti-corruption standards, offering institutional transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-900/40 border border-gray-800 rounded-xl hover:border-gray-700 transition">
            <div className="h-10 w-10 bg-[#cca43b]/10 text-[#cca43b] border border-[#cca43b]/20 flex items-center justify-center rounded-lg mx-auto mb-4">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-white font-display uppercase tracking-widest mb-1.5">Strict Trust</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              We execute all agreements on precise LC or DA shipping structures, protecting counterparty buyers from supply delays and capital vulnerability.
            </p>
          </div>

          <div className="p-6 bg-slate-900/40 border border-gray-800 rounded-xl hover:border-gray-700 transition">
            <div className="h-10 w-10 bg-[#cca43b]/10 text-[#cca43b] border border-[#cca43b]/20 flex items-center justify-center rounded-lg mx-auto mb-4">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-white font-display uppercase tracking-widest mb-1.5">Unfailing Duty</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Every crop payload undergoes mandatory third-party independent phytosanitary audit checks at port locations prior to seal validation.
            </p>
          </div>

          <div className="p-6 bg-slate-900/40 border border-gray-800 rounded-xl hover:border-gray-700 transition">
            <div className="h-10 w-10 bg-[#cca43b]/10 text-[#cca43b] border border-[#cca43b]/20 flex items-center justify-center rounded-lg mx-auto mb-4">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-white font-display uppercase tracking-widest mb-1.5">True Partnership</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Building inter-generational trading bonds with milling clans and global buyers to foster continuous price stability and dependable supply.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
