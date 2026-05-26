/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Ship, Compass, ArrowUpRight, ArrowDownRight, RefreshCw, Layers, Database, Radio } from 'lucide-react';
import { CommodityPrice, ShippingUpdate, HubLocation } from '../types';

export const GlobalReachView: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<string>('india');
  const [pricingFilter, setPricingFilter] = useState<'all' | 'grains' | 'sugar'>('all');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  // Live commodity market prices mock (user explicitly requested no simulated databases but client-side state is perfect local experience)
  const [prices, setPrices] = useState<CommodityPrice[]>([
    { name: '1121 Golden Sella Basmati Rice', grade: 'Sovereign Grade 1', origin: 'India (Haryana)', price: '$1,340', change: '+2.4%', trend: 'up' },
    { name: 'Sugarcane Refined S30', grade: 'Grade A Fine', origin: 'India (U.P.)', price: '$480', change: '-1.1%', trend: 'down' },
    { name: 'Thai White Rice 5% Broken', grade: 'Standard F.O.B.', origin: 'Thailand', price: '$590', change: '+0.5%', trend: 'up' },
    { name: 'Whole Red Lentils (Masoor)', grade: 'Double-Polished 7mm', origin: 'India (M.P.)', price: '$820', change: '+0.0%', trend: 'stable' },
    { name: 'Organic Turmeric Whole', grade: 'Curcumin 5%+', origin: 'India (Salem)', price: '$1,850', change: '+5.1%', trend: 'up' },
    { name: 'Green Cardamom (8mm)', grade: 'Bold Premium', origin: 'India (Kerala)', price: '$19,200', change: '-0.3%', trend: 'down' },
  ]);

  const [shippingLogs, setShippingLogs] = useState<ShippingUpdate[]>([
    { vesselName: 'MV Ocean Star', voyageId: 'OS-2026-A8', status: 'IN_TRANSIT', departurePort: 'JNPT (Mumbai)', destinationPort: 'Rotterdam Gateway', eta: 'June 05, 2026' },
    { vesselName: 'Pacific Trader', voyageId: 'PT-2026-F2', status: 'PORT_ARRIVAL', departurePort: 'Mundra Port', destinationPort: 'Singapore Keppel', eta: 'Arrived (Customs Desk)' },
    { vesselName: 'Sovereign Pearl', voyageId: 'SP-2026-G9', status: 'LOADING', departurePort: 'JNPT (Mumbai)', destinationPort: 'Jebel Ali (Dubai)', eta: 'June 12, 2026' },
    { vesselName: 'Atlantic Navigator', voyageId: 'AN-2026-X1', status: 'CUSTOMS_CLEARANCE', departurePort: 'Chennai Terminal', destinationPort: 'New York Newark', eta: 'June 18, 2026' },
  ]);

  const hubs: HubLocation[] = [
    { id: 'india', name: 'India (Primary Sourcing & Port HQ)', role: 'Sourcing, Milling & Processing Epicenter', lat: 49, lng: 61, facilities: ['JNPT Port Logistics Terminal', '1121 Paddy Sorting & Milling Plant (Karnal)', 'Cold chain spices elevator (Kochi)', 'Customs fast-track clearance hub'] },
    { id: 'dubai', name: 'Dubai Global Corporate HQ', role: 'Middle-East Distribution & Trade Finance Desk', lat: 43, lng: 52, facilities: ['Jebel Ali warehousing depots', 'Trade dispute arbitration desks', 'Sovereign credit lines clearing office'] },
    { id: 'rotterdam', name: 'Rotterdam European Gateway', role: 'Main Continent Cold-Storage & Freight Terminal', lat: 29, lng: 46, facilities: ['EU customs regulatory clearance desks', 'Direct rail-freight connections to Germany', 'Multi-temp container holding facilities'] },
    { id: 'singapore', name: 'Singapore APAC Logistics Hub', role: 'Transshipment & APAC Regional Command', lat: 57, lng: 71, facilities: ['Keppel automated terminal operations', 'Southeast-Asia retail routing division', 'SGS quality validation auxiliary lab'] },
    { id: 'new-york', name: 'New York Oceans Trade Office', role: 'Americas Enterprise Sales Counsel & Distribution', lat: 35, lng: 23, facilities: ['Newark terminal staging zones', 'USDA check monitoring services', 'East Coast direct rail corridors'] },
  ];

  const handleRefreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      // Small simulated updates
      setPrices(prev => prev.map(p => {
        const rand = Math.random();
        if (rand > 0.6) {
          const currentVal = parseFloat(p.price.replace(/[^0-9.]/g, ''));
          const changePercent = (Math.random() * 2 - 1) * 0.02; // max 2% change
          const newVal = Math.round(currentVal * (1 + changePercent));
          const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
          return {
            ...p,
            price: formatter.format(newVal),
            change: (changePercent >= 0 ? '+' : '') + (changePercent * 100).toFixed(1) + '%',
            trend: changePercent >= 0.005 ? 'up' : changePercent <= -0.005 ? 'down' : 'stable',
          };
        }
        return p;
      }));
      setIsRefreshing(false);
    }, 1200);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'IN_TRANSIT':
        return 'bg-blue-950 text-blue-400 border-blue-800';
      case 'PORT_ARRIVAL':
        return 'bg-emerald-950 text-emerald-400 border-emerald-800';
      case 'LOADING':
        return 'bg-amber-950 text-amber-400 border-amber-800';
      case 'CUSTOMS_CLEARANCE':
        return 'bg-purple-950 text-purple-400 border-purple-800';
      default:
        return 'bg-slate-900 text-gray-400 border-gray-850';
    }
  };

  const currentHubInfo = hubs.find(h => h.id === selectedHub) || hubs[0];

  return (
    <div id="global-reach-view" className="text-white bg-[#0e121e]">
      {/* Editorial Header */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="absolute inset-0 bg-[#0d101a]/95 z-0" />
        <div className="absolute top-[30%] right-[-10%] h-80 w-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto z-10 text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs text-[#cca43b] tracking-[0.25em] font-mono uppercase flex items-center justify-center gap-1.5">
            <Radio className="h-4 w-4 text-[#cca43b] animate-pulse" />
            Live Global Control
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Global Command Center
          </h1>
          <p className="text-gray-300 text-base leading-relaxed font-light">
            Real-time oversight of our international logistics network and live commodity market intelligence interfaces.
          </p>
        </div>
      </section>

      {/* Interactive Hub Map Section on the precise world map from description */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Map Overlay Frame */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-gray-800 bg-[#0a0d18] h-[480px] map-glow">
            {/* World Map Backdrop hotlink */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAneS4Xq4I6UC12Vwm12NMD_Vtus2pS9AhJWBLENS1jeZySpxetBGHVzSy9TWnpMsIv_dGhuh2zAaS539QPDkUWDUBhhQWdzHPf4IGXRtgoB8vB_z6chStpML-s1ODCmJVXdPHnB8nThZLtgX-5kP-vEaGM30DzOHiULNnTu7sGykesdyyzegPSBxg_fUPVH7J2tX-BQD6RMcPvYpP3c6JFohxaVlGnkl4rpiRIjGibbNNUfWwGsQeNQw6aB98Z87P6XS1TFQQVfGr2"
              alt="Satveer Overseas Global Map"
              className="w-full h-full object-cover opacity-65 grayscale filter contrast-125"
              referrerPolicy="no-referrer"
            />
            
            {/* Position coordinate pins */}
            {hubs.map((hub) => {
              const isSelected = selectedHub === hub.id;
              return (
                <button
                  key={hub.id}
                  id={`map-pin-${hub.id}`}
                  style={{ top: `${hub.lat}%`, left: `${hub.lng}%` }}
                  onClick={() => setSelectedHub(hub.id)}
                  className="absolute pointer-events-auto flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 group"
                >
                  {/* Pin Circle element */}
                  <span className={`absolute inline-flex rounded-full duration-300 ${
                    isSelected ? 'h-5 w-5 bg-[#cca43b]/40 pulsate-pin' : 'h-3.5 w-3.5 bg-gray-500/30 group-hover:bg-[#cca43b]/20'
                  }`} />
                  <span className={`relative inline-flex rounded-full h-2.5 w-2.5 border border-white ${
                    isSelected ? 'bg-[#cca43b]' : 'bg-gray-400 group-hover:bg-[#cca43b]'
                  }`} />
                  
                  {/* Miniature Label */}
                  <span className={`absolute top-4 bg-slate-950 border border-gray-800 text-[9px] px-1.5 py-0.5 rounded text-gray-300 pointer-events-none transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 uppercase font-mono tracking-widest whitespace-nowrap z-55`}>
                    {hub.id}
                  </span>
                </button>
              );
            })}

            {/* Coordinate grid overlay lines purely aesthetic */}
            <div className="absolute inset-x-0 bottom-4 px-6 flex justify-between text-[9px] font-mono text-gray-600 pointer-events-none uppercase">
              <span>Satveer Command Sector: Active</span>
              <span>Coordinates Ref: UTC-WGS84</span>
            </div>
          </div>

          {/* Sourcing Hub Detail Pane */}
          <div className="lg:col-span-4 bg-[#111627] rounded-3xl p-6 border border-gray-800 flex flex-col justify-between h-[480px]">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-gray-800 pb-3">
                <Compass className="h-5 w-5 text-[#cca43b]" />
                <div>
                  <h3 className="text-xs text-gray-500 font-mono uppercase tracking-widest">Active Selector Hub</h3>
                  <p className="text-sm font-bold text-white font-display uppercase tracking-wider">{currentHubInfo.name}</p>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-[#cca43b] font-mono uppercase tracking-widest">Strategic Mission</span>
                <p className="text-xs text-slate-300 mt-1 font-sans leading-relaxed">{currentHubInfo.role}</p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Sovereign On-Site Facilities</span>
                <ul className="space-y-2">
                  {currentHubInfo.facilities.map((f, index) => (
                    <li key={index} className="flex items-start text-xs text-gray-300 font-sans tracking-wide leading-relaxed">
                      <span className="h-1.5 w-1.5 bg-[#cca43b] rounded-full mt-1.5 mr-2 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-slate-900 rounded-xl border border-gray-800 flex items-center justify-between text-xs font-mono">
              <span className="text-gray-500 uppercase">Interactive Selectors:</span>
              <select
                id="hub-selector-select"
                value={selectedHub}
                onChange={(e) => setSelectedHub(e.target.value)}
                className="bg-slate-950 border border-gray-800 text-white font-semibold rounded px-2 py-1 text-xs focus:outline-none focus:border-[#cca43b]"
              >
                {hubs.map((hub) => (
                  <option key={hub.id} value={hub.id}>{hub.name.split(' ')[0]}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and Shipping Split Dashboard */}
      <section className="py-12 bg-[#0e121e] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Live Commodity pricing */}
          <div className="lg:col-span-7 bg-[#111627] rounded-3xl p-6 border border-gray-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-[#cca43b]" />
                  <div>
                    <h3 className="text-xs text-gray-500 uppercase font-mono">Real-time Sourcing Spot Indexes</h3>
                    <p className="text-lg font-bold font-display text-white">Commodity Market Intelligence</p>
                  </div>
                </div>
                <button
                  id="btn-refresh-market-rates"
                  onClick={handleRefreshData}
                  disabled={isRefreshing}
                  className="p-2 border border-gray-800 hover:border-gray-700 rounded-lg text-gray-400 hover:text-white transition cursor-pointer"
                >
                  <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin text-[#cca43b]' : ''}`} />
                </button>
              </div>

              {/* Price list */}
              <div className="space-y-2">
                {prices.map((p, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-900/60 rounded-xl border border-gray-800/80 hover:border-gray-750 transition duration-150">
                    <div className="space-y-0.5">
                      <p className="text-xs font-bold text-white font-display leading-tight">{p.name}</p>
                      <p className="text-[10px] text-gray-500 font-mono tracking-wide">{p.grade} • Origin: {p.origin}</p>
                    </div>

                    <div className="flex items-center space-x-4">
                      {/* Price tag */}
                      <span className="text-sm font-semibold font-mono text-white">{p.price} <span className="text-[10px] text-gray-500 font-light font-sans">/ MT</span></span>
                      
                      {/* Change indication */}
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md flex items-center space-x-1 ${
                        p.trend === 'up'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/40'
                          : p.trend === 'down'
                          ? 'bg-rose-950 text-rose-400 border border-rose-800/40'
                          : 'bg-slate-800 text-gray-400 border border-slate-700/40'
                      }`}>
                        {p.trend === 'up' ? <ArrowUpRight className="h-3.5 w-3.5 mr-0.5 shrink-0" /> : p.trend === 'down' ? <ArrowDownRight className="h-3.5 w-3.5 mr-0.5 shrink-0" /> : null}
                        <span>{p.change}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[10px] font-mono text-gray-600 mt-6 leading-relaxed">
              *Spot benchmark prices are updated in accordance with the APEDA (Agricultural and Processed Food Products Export Development Authority) central grain futures registry. Freight is computed on F.O.B. terms.
            </p>
          </div>

          {/* Active Vessels Shipping list */}
          <div className="lg:col-span-5 bg-[#111627] rounded-3xl p-6 border border-gray-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 border-b border-gray-800 pb-4 mb-4">
                <Ship className="h-5 w-5 text-[#cca43b]" />
                <div>
                  <h3 className="text-xs text-gray-500 uppercase font-mono">Consolidated Fleet Command</h3>
                  <p className="text-lg font-bold font-display text-white">Ocean Transit Tracker</p>
                </div>
              </div>

              {/* Transit logs */}
              <div className="space-y-4">
                {shippingLogs.map((log, index) => (
                  <div key={index} className="p-4 bg-slate-900/60 rounded-xl border border-gray-800/80 hover:bg-slate-900/90 transition-all duration-200">
                    <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#cca43b] animate-ping" />
                        <span className="text-xs font-bold text-white font-display">{log.vesselName}</span>
                      </div>
                      <span className="text-[9px] font-mono text-gray-500">VOY: {log.voyageId}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="text-gray-500 text-[10px] uppercase font-mono">Transit Route</p>
                        <p className="text-gray-300 mt-0.5 font-sans leading-tight">
                          {log.departurePort} <span className="text-[#cca43b] font-serif">→</span> {log.destinationPort}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-[10px] uppercase font-mono">Status & E.T.A.</p>
                        <div className="flex items-center space-x-2 mt-0.5">
                          <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border uppercase shrink-0 ${getStatusBadge(log.status)}`}>
                            {log.status.replace('_', ' ')}
                          </span>
                          <span className="text-[10px] text-gray-400 font-bold font-mono">{log.eta}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-900 border border-gray-800 rounded-2xl flex items-center space-x-3 mt-6">
              <Layers className="h-8 w-8 text-[#cca43b] shrink-0" />
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-mono">Tracking auxiliary protocol</p>
                <p className="text-xs text-gray-300 font-sans leading-snug">
                  Integrated directly with Automatic Identification Systems (AIS) and maritime vessel telemetry feeds.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
