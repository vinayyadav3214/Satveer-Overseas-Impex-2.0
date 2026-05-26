/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, Info, PackageOpen, ClipboardSignature, FileCheck2, ArrowUpRight } from 'lucide-react';

interface ProductsViewProps {
  onQuoteThisProduct: (productName: string) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({ onQuoteThisProduct }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'grains' | 'spices' | 'dairy' | 'pulses'>('all');
  const [activeProductSpec, setActiveProductSpec] = useState<string | null>(null);

  const productsList = [
    {
      id: 'rice-1121',
      name: '1121 Golden Sella Basmati Rice',
      category: 'grains',
      longName: 'Sovereign Grade 1121 Basmati (Aromatic Long-Grain)',
      description: 'The golden standard of exquisite Indian rice, selected for its unmatched average grain length of 8.35mm. Parboiled and slowly dried under state-of-the-art milling monitors to ensure zero grain breakage during culinary steaming.',
      metrics: {
        moisture: 'Max 12.0%',
        purity: 'Min 95.0%',
        averageLength: '8.35 mm',
        brokenRatio: 'Max 1.0%',
      },
      packaging: 'Available in 5kg, 10kg, 20kg, 25kg woven Jute or Non-Woven fabric bags',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc0DsV83Zsv_RQhrxGMWRW4e0KJDa5MDQV6O0hLXQJn3Nu_3dzkfDLxF13lXXC3h91UTpeMsxLbMB0kWvbP_xiNrJqa1m96gJTbe8YLXPjMbGyLjt0d2CdKISgO6Xtt05WRjxIBh_W9-AAJvbDV3AL7WJMU1N3iOdcYPG-JfyfcXrCj2j6blwd0wJ3AdWCPEjRFZOmyU9lXc4oIViWZG2M2z_0Y_oNC703OuisQGlcKh0vyMSGnPsIcy7NfTVxfvrhA6xGMhPgh5N-',
    },
    {
      id: 'spices-whole',
      name: 'Whole & Ground Spices Syndicate',
      category: 'spices',
      longName: 'Premium Indian Spices (Turmeric, Cardamom, Chili)',
      description: 'A superb spectrum of deep Indian spices directly curated from the hills of Wayanad and Guntur. High oil content, custom ground to uniform mesh size, ensuring absolute premium aroma and vibrant organic coloring.',
      metrics: {
        moisture: 'Max 9.5%',
        volatileOil: 'Min 3.5%',
        curcuminLevel: 'Min 4.8% (Turmeric)',
        impurityRatio: '0.0% (Zero foreign matter)',
      },
      packaging: '500g, 1kg retail boxes or 25kg multi-wall double-barrier kraft paper bags',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXbuk_pyLtDE4QSoYP0YnwvGG_LbwWPAZjXsYWHA6qpyqS5dTh8h0NZYKDJbZafQXsS3VDyJHwUBvZDDv168jIvckpw14fkzbCyGHgsIv9USV7xKwgpTK5p05mxv4JjsvXIj4p_Ua594kvtP_Hol9Cpv9GfNIcllC04iOuM8TRmfyRQtU0_jQDGmVxT4KWBGlweZBY-ldfpPKZHKzZJ9SYImbxM4T4qvXp8pC7ayCTqXyzgOXC1-D2mMxi6IPP1aAMPmN5srwjtSuR',
    },
    {
      id: 'pulses-lentils',
      name: 'Pulses & Lentils Syndicate',
      category: 'pulses',
      longName: 'High-Protein Grains (Red Lentils, Chickpeas, Toor)',
      description: 'Machine-sorted, high-density pulses and grains harvested from deep organic black soil beds. Double polished with clean water, free of any artificial sizing, and thoroughly compliant with European food criteria.',
      metrics: {
        moisture: 'Max 11.5%',
        sizingStandard: 'Uniform 7mm plus',
        proteinDensity: 'Min 22.0%',
        weevilDamage: '0.0%',
      },
      packaging: '25kg, 50kg Heavy-Duty Poly-Woven packing or wholesale bulk silos',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDoWlkqHKzShjlGh40PGuRD1ybdPelUmVlyodoHBV37WeA82OjCqR24NhPPqPZYTCv6MPEoQDrLee-8LxkgI8Lu8mOV5GAOX4wW1SJLPERoXGfYjTqYi5kL6xSUkKHPjazMWGW4r13SV2DRBpcHVlTn9DIG0HdebLyesAla7su6gaYUu3SGwDBP3Z2L4GNo_AKZASKgsL9Gc8EBsHqnqSI3_TKjofFLUyC_ekoKPss6ZGYVGULaU89IxF4ZlmojJ6wap8CXxC3T1Uz',
    },
    {
      id: 'ghee-butter',
      name: 'Sovereign Clarified Butter (Ghee)',
      category: 'dairy',
      longName: 'Vedic Pure Cow Ghee (Rich Fat)',
      description: 'Exquisite, rich clarified butter extracted via Vedic churning processes of fresh farm milk. Pristine preservation of volatile fats ensures a buttery scent, granular structure, and shelf life extending beyond 12 months without artificial stabilizers.',
      metrics: {
        rawPurity: '100% Pure Milk Fat',
        moistureRate: 'Max 0.2%',
        freeFattyAcid: 'Max 0.4%',
        solidMatter: '0.0%',
      },
      packaging: '500ml, 1L, 5L high-barrier airtight food grade tins, and bulk 15kg canisters',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtn8qX8jXeWSWaigUzxoqyuXIedEXE1AyWHpbGTf6t8tvEytVFXR7EjWrW5wMrEQxxEMkKKEIGiBpkrLgkYcBHD38driuf4KNyZBUkvtxGKDnIAdABPYsL7GdRcrJ-GSgSkPrMw6hRUNCJwpaqDf8BvuDnRWVuGZJZ-ybNBcPV2MODrVrJ9Cwg1BIBcV_yyBAA_qcD2YZMotIS14ULxu-I6bosPKQDNClbS4gy0LTHTEm0KuxXGw_B8sNWN9OOHxX_RIhUi0QcWybb',
    },
  ];

  const filteredProducts = selectedFilter === 'all' 
    ? productsList 
    : productsList.filter(p => p.category === selectedFilter);

  return (
    <div id="products-view" className="text-white bg-[#0e121e]">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="absolute inset-0 bg-[#0d101a]/95 z-0" />
        <div className="absolute top-[30%] left-[-10%] h-80 w-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto z-10 text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs text-[#cca43b] tracking-[0.25em] font-mono uppercase">
            Global Cargo Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Premium Global Commodities
          </h1>
          <p className="text-gray-300 text-base leading-relaxed font-light">
            Sourced exclusively with absolute farm-origin precision, fully tested, and certified for sovereign customs compliance.
          </p>
        </div>
      </section>

      {/* Product Filter Tabs bar */}
      <section className="bg-[#121626] border-b border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-2 justify-center">
          {[
            { id: 'all', label: 'All Commodities' },
            { id: 'grains', label: 'Long-Grains/Rice' },
            { id: 'spices', label: 'Spices Origin' },
            { id: 'pulses', label: 'Pulses & Lentils' },
            { id: 'dairy', label: 'Indian Vedic Ghee' },
          ].map((tab) => (
            <button
              key={tab.id}
              id={`product-filter-${tab.id}`}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase font-semibold border transition-all duration-200 ${
                selectedFilter === tab.id
                  ? 'bg-[#cca43b] text-[#121626] border-[#cca43b] shadow-md'
                  : 'bg-slate-900 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Stunning Bento Style Showcase Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProducts.map((p) => {
            const isSpecActive = activeProductSpec === p.id;

            return (
              <div
                key={p.id}
                id={`product-card-${p.id}`}
                className="group relative flex flex-col justify-between bg-[#111627] rounded-3xl overflow-hidden border border-gray-800/80 hover:border-amber-500/40 transition-all duration-300"
              >
                {/* Visual Image container with nice aspect ratio */}
                <div className="w-full h-[280px] relative overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111627] via-transparent to-transparent z-10" />
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-[#111627]/90 border border-gray-700 rounded-full text-[10px] font-mono text-[#cca43b] tracking-widest uppercase">
                    {p.category} origin
                  </span>
                </div>

                {/* Info Container */}
                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-white font-display group-hover:text-[#cca43b] transition duration-200">
                      {p.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed font-sans font-light">
                      {p.description}
                    </p>
                  </div>

                  {/* Sourcing Specifications Row */}
                  <div className="grid grid-cols-2 gap-4 bg-slate-900/50 p-4 rounded-xl border border-gray-800/60 font-mono text-[11px] text-gray-300">
                    {Object.entries(p.metrics).map(([key, val]) => (
                      <div key={key} className="flex justify-between border-b border-gray-800/55 pb-1">
                        <span className="text-gray-500 capitalize">{key}:</span>
                        <span className="font-semibold text-white">{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Sourcing package specifications text */}
                  <div className="flex items-start space-x-2 text-xs text-slate-400 font-sans border-l-2 border-[#cca43b] pl-3">
                    <PackageOpen className="h-4 w-4 text-[#cca43b] shrink-0 mt-0.5" />
                    <span>
                      <strong>Packaging:</strong> {p.packaging}
                    </span>
                  </div>

                  {/* Operational Action Buttons */}
                  <div className="pt-4 flex items-center justify-between gap-4">
                    <button
                      id={`btn-product-spec-${p.id}`}
                      onClick={() => setActiveProductSpec(isSpecActive ? null : p.id)}
                      className="px-4 py-2.5 bg-slate-800/80 hover:bg-slate-700 text-gray-300 text-xs rounded-lg transition-all flex items-center space-x-1 border border-gray-700"
                    >
                      <Info className="h-4 w-4 text-[#cca43b]" />
                      <span>{isSpecActive ? 'Hide Standard' : 'Analysis Sheet'}</span>
                    </button>

                    <button
                      id={`btn-product-quote-${p.id}`}
                      onClick={() => onQuoteThisProduct(p.name)}
                      className="px-5 py-2.5 bg-[#cca43b] hover:bg-amber-500 text-slate-900 font-bold font-display uppercase tracking-wider text-xs rounded-lg transition duration-200 flex items-center space-x-1.5"
                    >
                      <span>Secure Allocation</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Standard quality verification sheet overlay */}
                {isSpecActive && (
                  <div className="absolute inset-x-0 bottom-0 top-[280px] bg-[#111627] z-30 p-8 flex flex-col justify-between border-t border-[#cca43b]/40">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 border-b border-gray-800 pb-2">
                        <ClipboardSignature className="h-4 w-4 text-[#cca43b]" />
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                          Certified Sourcing Quality Index
                        </h4>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed font-sans">
                        Our internal trade counsel stamps this commodity as Grade 1 Primary Sovereign standard. Every batch container is validated at the Jawaharlal Nehru Port (JNPT) using state of art testing.
                      </p>
                      <ul className="grid grid-cols-2 gap-2 text-[10px] bg-slate-950 p-4 rounded-xl border border-gray-900 text-gray-400 font-mono">
                        <li className="flex items-center space-x-1">
                          <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                          <span>USDA Approved</span>
                        </li>
                        <li className="flex items-center space-x-1">
                          <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                          <span>Pesticide Residue Safe</span>
                        </li>
                        <li className="flex items-center space-x-1">
                          <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                          <span>Phytosanitary OK</span>
                        </li>
                        <li className="flex items-center space-x-1">
                          <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                          <span>Moisture Optimized</span>
                        </li>
                      </ul>
                    </div>
                    <button
                      onClick={() => setActiveProductSpec(null)}
                      className="w-full py-2.5 bg-slate-900 border border-gray-800 hover:border-gray-700 text-xs font-bold text-gray-300 rounded-lg transition"
                    >
                      Acknowledge Standard Details
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Sourcing Certifications Row */}
      <section className="bg-[#121626] border-t border-b border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
          <span className="text-[10px] text-[#cca43b] uppercase tracking-[0.25em] font-mono">Governing Bodies & Seals</span>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
            <div className="flex items-center space-x-2 border border-gray-800 px-4 py-2 bg-slate-950 rounded-lg">
              <FileCheck2 className="h-5 w-5 text-[#cca43b]" />
              <span className="text-xs font-bold tracking-wider text-white">ISO 9001:2015 APPROVED</span>
            </div>
            <div className="flex items-center space-x-2 border border-gray-800 px-4 py-2 bg-slate-950 rounded-lg">
              <FileCheck2 className="h-5 w-5 text-[#cca43b]" />
              <span className="text-xs font-bold tracking-wider text-white">APEDA REGISTERED</span>
            </div>
            <div className="flex items-center space-x-2 border border-gray-800 px-4 py-2 bg-slate-950 rounded-lg">
              <FileCheck2 className="h-5 w-5 text-[#cca43b]" />
              <span className="text-xs font-bold tracking-wider text-white">FSSAI CENTRAL LICENSE</span>
            </div>
            <div className="flex items-center space-x-2 border border-gray-800 px-4 py-2 bg-slate-950 rounded-lg">
              <FileCheck2 className="h-5 w-5 text-[#cca43b]" />
              <span className="text-xs font-bold tracking-wider text-white">SPICES BOARD OF INDIA</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
