/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Anchor,
  Award,
  Globe,
  Plane,
  Users,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  onRequestQuote: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setCurrentTab,
  onRequestQuote,
}) => {
  return (
    <div id="home-view" className="text-white bg-[#0e121e]">
      {/* Cinematic Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        {/* Sky gradient and background elements */}
        <div
          id="hero-backdrop"
          className="absolute inset-0 bg-[#0c0f1b]/90 z-0"
        />
        <div
          className="absolute inset-0 opacity-40 mix-blend-color-dodge z-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZEp6xFwGfXVHI1xrZR_yIEAoOD93xmPvkBkYAsKK676mpym-LIqQf4YIM9P5KiwBgMCM8hAD4txqYbn77xv8vqXkxdn2HjmsrLB4ADn5pSAS05vQ1zcFaAoWMlNtZirSL_32mhVcLzpKgiZk0Doena298ISXMUc2a1zpxk7LjtTm67owAe1bIopZzeMHwhZ8VN2aytnRXqpczUU2uE3EmuaDRUYMbXq-w4z-QpXf6f32v4jfsf_hOaLfvS6CR1zwX3uXp2v1HMlHH')`,
          }}
        />

        {/* Interactive Radial Glow overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0c0f1b]/60 to-[#0c0f1b] z-0 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#cca43b]/10 rounded-full border border-[#cca43b]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#cca43b] animate-ping" />
              <span className="text-[10px] text-[#cca43b] uppercase tracking-[0.2em] font-mono leading-none">
                India's Premiere Premier Sovereign Export Conduit
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-display">
              Powering Global Trade with{" "}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#cca43b] via-amber-200 to-[#cca43b]">
                Trust & Precision
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl font-sans font-light">
              Institutional-grade sourcing, custom-engineered imports,
              compliance-strict global exports, and supply chain solutions
              tailored for multi-national enterprises.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                id="btn-hero-quote"
                onClick={onRequestQuote}
                className="px-8 py-4 bg-[#cca43b] hover:bg-amber-500 text-slate-900 font-bold tracking-wider uppercase text-xs rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center space-x-2"
              >
                <span>Request a Quote</span>
                <ChevronRight className="h-4 w-4" />
              </button>

              <button
                id="btn-hero-services"
                onClick={() => setCurrentTab("services")}
                className="px-8 py-4 bg-slate-800/80 hover:bg-slate-700/80 border border-gray-700 text-white font-semibold tracking-wider uppercase text-xs rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4 text-[#cca43b]" />
              </button>
            </div>
          </div>

          {/* Graphical Frame with Overlay Visuals */}
          <div className="lg:col-span-5 h-[340px] lg:h-[450px] relative rounded-2xl overflow-hidden border border-gray-800 bg-[#161b2c]/60 backdrop-blur-sm shadow-2xl p-4 flex flex-col justify-end">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e121e]/90 via-transparent to-transparent z-10" />

            {/* Live preview area (small tracker or recent activity) */}
            <div className="relative z-20 mb-3">
              <div className="h-44 lg:h-64 bg-[rgba(255,255,255,0.02)] rounded-lg border border-gray-800/60 p-3 flex flex-col justify-center">
                <div className="text-sm text-gray-300 mb-2 font-display">
                  Live Tracking Preview
                </div>
                <ul className="text-xs text-gray-400 space-y-1">
                  {[
                    {
                      id: "VN-2301",
                      route: "Kolkata → Jebel Ali",
                      eta: "3d 4h",
                    },
                    { id: "IN-4472", route: "JNPT → Rotterdam", eta: "6d 12h" },
                    {
                      id: "BD-9910",
                      route: "Chittagong → Mundra",
                      eta: "2d 8h",
                    },
                  ].map((item) => (
                    <li key={item.id} className="flex justify-between">
                      <span className="font-mono text-[11px]">
                        {item.id} • {item.route}
                      </span>
                      <span className="text-[11px] text-[#cca43b] font-bold">
                        {item.eta}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Embedded Live Metrics Bar inside Glass Widget */}
            <div className="relative z-20 bg-[#1b223a]/90 backdrop-blur-md rounded-xl p-5 border border-gray-700 text-slate-100 flex flex-col space-y-4">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#cca43b] font-display">
                  Sovereign Live Logistics Tracker
                </span>
                <span className="text-[9px] bg-emerald-950 text-emerald-400 font-mono px-2 py-0.5 rounded-full border border-emerald-800">
                  ONLINE
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xl font-bold font-mono text-white">40+</p>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest">
                    Countries Reached
                  </p>
                </div>
                <div className="border-x border-gray-800">
                  <p className="text-xl font-bold font-mono text-white">125K</p>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest">
                    Tons Exported
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold font-mono text-white">100%</p>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest">
                    FSSAI / FDA Compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Credentials banner */}
      <section className="bg-[#121727] py-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-3">
              <div className="p-2.5 bg-[#cca43b]/5 text-[#cca43b] rounded-full mb-2 border border-[#cca43b]/10">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold text-gray-300 font-display">
                ISO 9001:2015
              </span>
              <span className="text-[9px] text-gray-500 uppercase tracking-widest">
                Quality Assurance
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-3">
              <div className="p-2.5 bg-[#cca43b]/5 text-[#cca43b] rounded-full mb-2 border border-[#cca43b]/10">
                <Award className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold text-gray-300 font-display">
                FDA COMPLIANT
              </span>
              <span className="text-[9px] text-gray-500 uppercase tracking-widest">
                Global Food Agency
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-3">
              <div className="p-2.5 bg-[#cca43b]/5 text-[#cca43b] rounded-full mb-2 border border-[#cca43b]/10">
                <Globe className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold text-gray-300 font-display">
                DGFT REGISTERED
              </span>
              <span className="text-[9px] text-gray-500 uppercase tracking-widest">
                Trade Control India
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-3">
              <div className="p-2.5 bg-[#cca43b]/5 text-[#cca43b] rounded-full mb-2 border border-[#cca43b]/10">
                <Anchor className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold text-gray-300 font-display">
                APEDA MEMBER
              </span>
              <span className="text-[9px] text-gray-500 uppercase tracking-widest">
                Agri Authority India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Bento Grid Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] text-[#cca43b] font-mono uppercase tracking-[0.25em]">
            Sovereign Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
            Custom-Engineered Global Logistic Channels
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Orchestrating high-performance freight management, supply-chain
            diagnostics, customs handling, and strategic agricultural sourcing
            networks across key oceans.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Ocean Freight */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-gray-800 bg-[#121727]/70 p-8 flex flex-col justify-between hover:border-[#cca43b]/50 transition-all duration-300 h-80">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 h-44 w-44 bg-[#cca43b]/5 rounded-full blur-3xl group-hover:bg-[#cca43b]/10 transition-all duration-500" />
            <div className="flex items-center justify-between">
              <div className="p-3 bg-slate-800/50 rounded-xl text-[#cca43b] group-hover:bg-[#cca43b]/10 border border-gray-700/50 group-hover:border-[#cca43b]/20 transition-all duration-300">
                <Anchor className="h-7 w-7" />
              </div>
              <span className="text-[10px] font-mono text-gray-500 uppercase">
                Marine Corridors
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white font-display">
                Institutional Ocean Cargo
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-lg">
                FCL and LCL containerized freight logistics connected with
                primary global shipping lines (Maersk, MSC, CMA CGM).
                Specialized temperature-controlled cargo storage holds for
                agricultural exports.
              </p>
            </div>
          </div>

          {/* Card 2: Strategic Air Cargo */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-[#121727]/70 p-8 flex flex-col justify-between hover:border-[#cca43b]/50 transition-all duration-300 h-80">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 h-32 w-32 bg-[#cca43b]/5 rounded-full blur-2xl group-hover:bg-[#cca43b]/10 transition-all duration-500" />
            <div className="flex items-center justify-between">
              <div className="p-3 bg-slate-800/50 rounded-xl text-[#cca43b] group-hover:bg-[#cca43b]/10 border border-gray-700/50 group-hover:border-[#cca43b]/20 transition-all duration-300">
                <Plane className="h-7 w-7" />
              </div>
              <span className="text-[10px] font-mono text-gray-500 uppercase">
                Express Cargo
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white font-display">
                Global Air Expeditions
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Critical-priority global routing via premium air freight
                carriers. Expedited customs processing and guaranteed cold-chain
                integration.
              </p>
            </div>
          </div>

          {/* Card 3: Customs Brokerage */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-[#121727]/70 p-8 flex flex-col justify-between hover:border-[#cca43b]/50 transition-all duration-300 h-80">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 h-32 w-32 bg-[#cca43b]/5 rounded-full blur-2xl group-hover:bg-[#cca43b]/10 transition-all duration-500" />
            <div className="flex items-center justify-between">
              <div className="p-3 bg-slate-800/50 rounded-xl text-[#cca43b] group-hover:bg-[#cca43b]/10 border border-gray-700/50 group-hover:border-[#cca43b]/20 transition-all duration-300">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <span className="text-[10px] font-mono text-gray-500 uppercase">
                Compliance Desk
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white font-display">
                Rigorous Brokerage
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Complete tariff code classification, phytosanitary inspection
                certificates, custom clearances, and zero-hold port processes.
              </p>
            </div>
          </div>

          {/* Card 4: Strategic Agricultural Sourcing */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-gray-800 bg-[#121727]/70 p-8 flex flex-col justify-between hover:border-[#cca43b]/50 transition-all duration-300 h-80">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 h-44 w-44 bg-[#cca43b]/5 rounded-full blur-3xl group-hover:bg-[#cca43b]/10 transition-all duration-500" />
            <div className="flex items-center justify-between">
              <div className="p-3 bg-slate-800/50 rounded-xl text-[#cca43b] group-hover:bg-[#cca43b]/10 border border-gray-700/50 group-hover:border-[#cca43b]/20 transition-all duration-300">
                <Users className="h-7 w-7" />
              </div>
              <span className="text-[10px] font-mono text-gray-500 uppercase">
                Farm to Ship
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white font-display">
                Sovereign India Paddy & Spices Procurement
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-lg">
                Direct partnerships with audited cooperative farms in Punjab,
                Haryana, and Kerala. Complete traceability frameworks matching
                stringent European Union and US-FDA chemical residue criteria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quick Sourcing CTA Banner */}
      <section className="bg-gradient-to-r from-[#111524] to-[#1a1f33] py-16 border-t border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs text-[#cca43b] font-mono tracking-widest uppercase">
            Immediate Procurement Allocation
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display font-semibold">
            Ready to secure high-volume Indian commodity quotas?
          </h3>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Our trade desk works directly with sovereign grain elevators,
            milling syndicates, and cold storage chains. Secure pricing futures
            contracts for Q3 and Q4.
          </p>
          <div className="pt-4">
            <button
              onClick={onRequestQuote}
              className="px-8 py-3 bg-[#cca43b] hover:bg-amber-500 text-slate-900 font-bold tracking-wider text-xs uppercase rounded hover:-translate-y-0.5 transition-all duration-200"
            >
              Initialize Purchase Order Protocol
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
