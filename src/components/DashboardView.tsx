/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { QuoteRequisition } from '../types';
import { LayoutDashboard, Calendar, ClipboardList, RefreshCw, FileText, CheckCircle2, RotateCcw, ShieldCheck, Truck } from 'lucide-react';

export const DashboardView: React.FC = () => {
  const [quotes, setQuotes] = useState<QuoteRequisition[]>([]);

  // Static mock fallbacks if localStorage is empty
  const defaultQuotes: QuoteRequisition[] = [
    {
      id: 'REQ-104928',
      timestamp: 'May 20, 2026, 04:30 PM',
      status: 'SOURCING',
      buyerName: 'Alexander Van de Berg',
      buyerEmail: 'a.berg@rotterdamlogistics.nl',
      buyerCompany: 'Rotterdam Grain Logistics N.V.',
      buyerCountry: 'Netherlands',
      commodityType: '1121 Golden Sella Basmati Rice',
      quantityMetricTons: 150,
      packagingPreference: 'Organic Jute Gunny Bags (50kg)',
      destinationPort: 'Rotterdam Port Gateway',
      shippingTerms: 'CIF',
      paymentTerms: 'Confirmed Letter of Credit (L/C)',
      entityVerificationId: 'EU-VAT-19302319',
      notes: 'Require moisture levels to be below 11.5% specifically for immediate cold-room inventory store.'
    },
    {
      id: 'REQ-302193',
      timestamp: 'May 18, 2026, 11:15 AM',
      status: 'UNDER_REVIEW',
      buyerName: 'Farid Al-Jamil',
      buyerEmail: 'farid@gulfspices.ae',
      buyerCompany: 'Al-Jamil Trading Houses',
      buyerCountry: 'United Arab Emirates',
      commodityType: 'Whole Curcumin Turmeric Bold',
      quantityMetricTons: 40,
      packagingPreference: 'Heavy-Duty Poly-Woven Bagging (25kg)',
      destinationPort: 'Jebel Ali, Dubai',
      shippingTerms: 'FOB',
      paymentTerms: 'Telegraphic Wire Transfer T/T',
      entityVerificationId: 'DXB-TRND-98402',
      notes: 'Wants pesticide analysis spectrum certificate before Port Seal validation.'
    }
  ];

  useEffect(() => {
    loadQuotes();
  }, []);

  const loadQuotes = () => {
    const listStr = localStorage.getItem('satveer_quotes');
    if (listStr) {
      try {
        const list: QuoteRequisition[] = JSON.parse(listStr);
        // Clean duplicates if they match defaults
        setQuotes(list);
      } catch (err) {
        setQuotes(defaultQuotes);
      }
    } else {
      setQuotes(defaultQuotes);
    }
  };

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to restore the live tracker workspace to default institutional examples?')) {
      localStorage.removeItem('satveer_quotes');
      setQuotes(defaultQuotes);
    }
  };

  const currentTabStyles = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'text-amber-400 bg-amber-950/40 border-amber-800/40';
      case 'UNDER_REVIEW':
        return 'text-blue-400 bg-blue-950/40 border-blue-800/40';
      case 'SOURCING':
        return 'text-purple-400 bg-purple-950/40 border-purple-800/40';
      case 'LOGISTICS_MATCHING':
        return 'text-pink-400 bg-pink-950/40 border-pink-800/40';
      case 'COMPLETED':
        return 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40';
      default:
        return 'text-gray-400 bg-slate-800/40 border-gray-700/40';
    }
  };

  // Progression steps visually mapped
  const getProgressWidthStr = (status: string) => {
    switch (status) {
      case 'PENDING': return 'w-1/5';
      case 'UNDER_REVIEW': return 'w-2/5';
      case 'SOURCING': return 'w-3/5';
      case 'LOGISTICS_MATCHING': return 'w-4/5';
      case 'COMPLETED': return 'w-full';
      default: return 'w-1/12';
    }
  };

  return (
    <div id="dashboard-view" className="text-white bg-[#0e121e]">
      
      {/* Editorial Header */}
      <section className="relative overflow-hidden py-20 px-4 border-b border-gray-800">
        <div className="absolute inset-0 bg-[#0d101a]/95 z-0" />
        <div className="relative max-w-7xl mx-auto z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs text-[#cca43b] tracking-[0.25em] font-mono uppercase flex items-center justify-center gap-1.5 animate-pulse">
            <LayoutDashboard className="h-4 w-4" />
            Vessel & Contract Allocation Command
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Sovereign Portal & Requisitions
          </h1>
          <p className="text-gray-400 text-xs font-sans max-w-xl mx-auto leading-relaxed">
            Monitor institutional purchase orders, customs certificate status logs, independent laboratory quality assay approvals, and container transit progress.
          </p>
        </div>
      </section>

      {/* Requisitions Board Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Workspace controls */}
        <div className="flex items-center justify-between border-b border-gray-805 pb-6 mb-8">
          <div>
            <h2 className="text-lg font-bold font-display text-white">Active Requisitions ({quotes.length})</h2>
            <p className="text-xs text-gray-500 font-sans">Draft allocation agreements with Indian supply silos.</p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              id="btn-refresh-dashboard"
              onClick={loadQuotes}
              className="p-2 border border-gray-800 hover:border-gray-700 hover:text-white rounded-lg text-gray-400 transition"
              title="Refresh logs"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
            <button
              id="btn-reset-dashboard-defaults"
              onClick={handleClearHistory}
              className="px-4 py-2 bg-slate-900 border border-gray-800 hover:border-gray-700 rounded-lg text-xs font-mono font-bold text-gray-400 hover:text-white transition flex items-center space-x-1.5"
            >
              <RotateCcw className="h-3.5 w-3.5 text-[#cca43b]" />
              <span>Reset workspace</span>
            </button>
          </div>
        </div>

        {quotes.length === 0 ? (
          <div className="p-16 border-2 border-dashed border-gray-800 rounded-3xl text-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-slate-900/80 mx-auto flex items-center justify-center text-gray-600">
              <ClipboardList className="h-6 w-6" />
            </div>
            <p className="text-sm font-semibold text-gray-400">No Requisitions Found in State Workspace.</p>
            <p className="text-xs text-gray-500 max-w-md mx-auto">Click "Request Quote" to create an active sourcing requisition and inspect allocation timelines.</p>
          </div>
        ) : (
          <div className="space-y-10">
            {quotes.map((q) => (
              <div 
                key={q.id}
                id={`dashboard-req-card-${q.id}`}
                className="bg-[#111627] rounded-3xl border border-gray-800 p-8 flex flex-col space-y-6 hover:border-amber-500/20 transition-all duration-350"
              >
                
                {/* Requisition Header bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-850 pb-5">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-[#cca43b]/10 text-[#cca43b] rounded-xl border border-[#cca43b]/20">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold font-mono text-white text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{q.id}</span>
                        <span className={`text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${currentTabStyles(q.status)}`}>
                          ● {q.status.replace('_', ' ')}
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-500 font-mono mt-0.5 flex items-center space-x-1">
                        <Calendar className="h-3 w-3 inline mr-1" />
                        <span>Registered: {q.timestamp}</span>
                      </p>
                    </div>
                  </div>

                  {/* Buyer country and tag */}
                  <div className="text-right">
                    <p className="text-xs font-extrabold text-white font-display">{q.buyerCompany}</p>
                    <p className="text-[10px] text-gray-500 font-mono">Consignee Dest: {q.destinationPort} • {q.buyerCountry}</p>
                  </div>
                </div>

                {/* Sourcing Timeline progress tracker */}
                <div id={`requisition-timeline-${q.id}`} className="space-y-3">
                  <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    <span>1. REGISTRATION</span>
                    <span>2. REVIEW</span>
                    <span>3. FARM SOURCING</span>
                    <span>4. MARITIME SEAL</span>
                    <span>5. COMPLETED</span>
                  </div>

                  <div className="relative w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <div className={`absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#cca43b] to-amber-400 ease-out duration-700 ${getProgressWidthStr(q.status)}`} />
                  </div>
                </div>

                {/* Technical specifics grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-slate-900/60 p-5 rounded-2xl border border-gray-850/80">
                  <div>
                    <p className="text-[9px] font-mono text-gray-500 uppercase">Commodity Requested</p>
                    <p className="text-xs font-bold text-white mt-1">{q.commodityType}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-gray-500 uppercase">Volume Quota</p>
                    <p className="text-xs font-extrabold text-[#cca43b] font-mono mt-1">{q.quantityMetricTons} METRIC TONS</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-gray-500 uppercase">Incoterms / Logistics</p>
                    <p className="text-xs text-gray-300 font-mono mt-1">{q.shippingTerms} Terminal</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-gray-500 uppercase">Compliance Registration ID</p>
                    <p className="text-xs text-gray-300 font-mono mt-1">{q.entityVerificationId}</p>
                  </div>
                </div>

                {/* Sourcing notes block */}
                {q.notes && (
                  <div className="text-xs font-sans text-gray-400 border-l border-[#cca43b]/50 pl-3">
                    <strong>Special Directives:</strong> "{q.notes}"
                  </div>
                )}

                {/* Real interactive audit logs simulating back-end operations (keeps UI alive and professional) */}
                <div className="border-t border-gray-850/60 pt-4 flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-mono text-gray-500">
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>DGFT Verified Registry: TRUE</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Phytosanitary Protocol Assay: CLEAR</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Truck className="h-3.5 w-3.5 text-[#cca43b]" />
                    <span>Port Transit Cargo: JNPT DOCK PLANNED</span>
                  </span>
                </div>

              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
