/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShoppingCart, RefreshCw, Apple, Settings, Anchor, FileCheck, Package, Store, Lightbulb, ShieldAlert, BadgeInfo } from 'lucide-react';

export const ServicesView: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: 'Global Procurement Matrix',
      icon: ShoppingCart,
      desc: 'Formulating end-to-end purchasing protocols straight with Indian agricultural cooperatives. We secure tier-1 quality allocations before public wholesale trading.',
      features: ['Direct farmer cooperative agreements', 'Upstream harvest quality reservation', 'Pre-shipment soil chemistry screens'],
    },
    {
      title: 'Sovereign Import-Export Channels',
      icon: RefreshCw,
      desc: 'End-to-end transshipment orchestration for complex ocean payloads. We configure ideal customs entries to bypass quarantine delays or legal holds.',
      features: ['Bilateral trade incentive setups', 'Complex licensing filings', 'Consolidated customs ledger entries'],
    },
    {
      title: 'Agricultural Asset Trading',
      icon: Apple,
      desc: 'Expert desk dealing with certified whole grains, 1121 long-grain basmati, spices, and lentils. Hedged futures pricing models stabilize long-term quotas.',
      features: ['1121 Basmati Rice specialty trades', 'Spices Board origin tracking', 'Hedged Q4 futures locking schemes'],
    },
    {
      title: 'Multimodal Supply Orchestration',
      icon: Settings,
      desc: 'Custom logistics pathways blending container trucking with express air or long-sea corridors. Complete temperature monitoring for highly perishable items.',
      features: ['End-to-end GPS sensor networks', 'Thermostatic cold-chain holding', 'Intermodal depot transfers'],
    },
    {
      title: 'Ocean Carrier Allocation',
      icon: Anchor,
      desc: 'Guaranteed charter slots with leading steamship lines. Full scale refrigerated container (reefer) provisioning matching strict phytosanitary guidelines.',
      features: ['FCL and consolidation LCL slots', 'Custom reefer humidity controls', 'Direct JNPT & Mundra port desks'],
    },
    {
      title: 'Customs & Tariff Compliance',
      icon: FileCheck,
      desc: 'Comprehensive Indian DGFT (Directorate General of Foreign Trade) filing, phytosanitary clearance certificates, and double-layer quarantine clearing procedures.',
      features: ['Phytosanitary certificate filings', 'SGS and Eurofins lab clearances', 'AEO fast-track custom desk status'],
    },
    {
      title: 'Wholesale Private Labeling',
      icon: Package,
      desc: 'Value-add tailored retail framing and premium milling configurations. Custom poly-woven bag specifications matching international retailer codes.',
      features: ['Automated milling & sorting lines', 'Custom poly-woven bagging specs', 'Multi-language labeling compliant with EU'],
    },
    {
      title: 'Premium Foodservice Supplies',
      icon: Store,
      desc: 'Sourcing and bulk shipments curated for restaurant chains, catering conglomerates, and bulk global grocery chains looking for exact origin spices.',
      features: ['Bulk restaurant culinary spices', 'Custom batch-milled pulses', 'Direct global hotel chain distribution'],
    },
  ];

  return (
    <div id="services-view" className="text-white bg-[#0e121e]">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="absolute inset-0 bg-[#0d101a]/95 z-0" />
        <div className="absolute top-[20%] right-[-10%] h-96 w-96 bg-[#cca43b]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto z-10 text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs text-[#cca43b] tracking-[0.25em] font-mono uppercase">
            Service Matrix
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Bespoke Trading & Logistics Solutions
          </h1>
          <p className="text-gray-300 text-base leading-relaxed font-light">
            We orchestrate complex supply chains with institutional rigor, delivering unparalleled reliability across diverse continents and critical trade canals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, index) => {
            const Icon = svc.icon;
            const isSelected = selectedService === index;

            return (
              <div
                key={index}
                id={`service-card-${index}`}
                onClick={() => setSelectedService(isSelected ? null : index)}
                className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-80 overflow-hidden ${
                  isSelected
                    ? 'bg-[#161d33] border-[#cca43b] shadow-xl'
                    : 'bg-[#121727]/70 border-gray-800 hover:border-gray-700 hover:bg-[#121727]'
                }`}
              >
                <div>
                  <div className={`p-3 rounded-xl border w-fit transition-colors duration-300 ${
                    isSelected ? 'bg-[#cca43b]/10 text-[#cca43b] border-[#cca43b]/40' : 'bg-slate-800/40 text-[#cca43b]/80 border-gray-700/50'
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-md font-bold text-white font-display mt-4 leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-2 leading-relaxed line-clamp-4">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-800/60 mt-4 flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 font-mono">SOI-SVC-{index + 10}</span>
                  <span className="text-[10px] text-[#cca43b] font-semibold tracking-wider uppercase font-display">
                    {isSelected ? 'Close info' : 'View Spec'}
                  </span>
                </div>

                {/* Animated Drawer overlay for specific specs */}
                {isSelected && (
                  <div className="absolute inset-0 bg-[#0e121e] p-6 flex flex-col justify-between z-20 border-l border-[#cca43b]">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 border-b border-gray-800 pb-2">
                        <Lightbulb className="h-4 w-4 text-[#cca43b]" />
                        <span className="text-xs font-bold font-display uppercase text-[#cca43b] tracking-wider">Strategic parameters</span>
                      </div>
                      <ul className="space-y-2 text-xs text-gray-300">
                        {svc.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-2">
                            <span className="h-1.5 w-1.5 bg-[#cca43b] rounded-full mt-1.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      id={`btn-close-service-spec-${index}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(null);
                      }}
                      className="w-full py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold text-gray-300 transition"
                    >
                      Dismiss spec sheet
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Quality Standards Guarantee Banner */}
      <section className="bg-slate-900 border-t border-b border-gray-800 py-16 px-4">
        <div className="max-w-4xl mx-auto bg-[#121727] border border-gray-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-lg">
            <div className="flex items-center space-x-2 text-[#cca43b]">
              <ShieldAlert className="h-5 w-5" />
              <span className="text-xs font-mono uppercase tracking-widest font-bold">Absolute Sourcing Guarantee</span>
            </div>
            <h3 className="text-lg font-bold text-white font-display">Double-Audit Residue Testing</h3>
            <p className="text-gray-400 text-xs leading-relaxed font-sans">
              Every shipment contract specifies chemical residue profiles. We submit samples directly to SGS Laboratories and double-test for Ochratoxin A, Aflatoxins, and pesticide thresholds to match stringent international criteria.
            </p>
          </div>
          <div className="p-4 bg-slate-900 rounded-xl border border-gray-800 flex items-center space-x-3 shrink-0">
            <BadgeInfo className="h-8 w-8 text-[#cca43b]" />
            <div>
              <p className="text-[10px] text-gray-500">SGS Quality Registry</p>
              <p className="text-xs text-white font-mono font-bold">100% PASS RATE</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
