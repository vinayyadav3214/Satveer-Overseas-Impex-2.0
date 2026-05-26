/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { QuoteRequisition } from '../types';
import { ClipboardCheck, ArrowRight, ArrowLeft, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

interface RequestQuoteViewProps {
  prefilledCommodity: string;
  onSubmissionSuccess: () => void;
}

export const RequestQuoteView: React.FC<RequestQuoteViewProps> = ({ prefilledCommodity, onSubmissionSuccess }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    buyerName: '',
    buyerEmail: '',
    buyerCompany: '',
    buyerCountry: 'United States',
    commodityType: prefilledCommodity || '1121 Golden Sella Basmati Rice',
    quantityMetricTons: 25,
    packagingPreference: 'Heavy-Duty Poly-Woven Bagging (25kg)',
    destinationPort: '',
    shippingTerms: 'CIF' as 'FOB' | 'CIF' | 'CFR' | 'EXW',
    paymentTerms: 'Confirmed Letter of Credit (L/C)',
    entityVerificationId: '',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (prefilledCommodity) {
      setFormData(prev => ({ ...prev, commodityType: prefilledCommodity }));
    }
  }, [prefilledCommodity]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateStep = () => {
    const errors: Record<string, string> = {};
    if (step === 1) {
      if (!formData.commodityType) errors.commodityType = 'Commodity selection is required';
      if (!formData.quantityMetricTons || formData.quantityMetricTons <= 0) {
        errors.quantityMetricTons = 'Quantity must be a positive number of metric tons';
      }
    } else if (step === 2) {
      if (!formData.destinationPort.trim()) errors.destinationPort = 'Destination Port is mandatory';
    } else if (step === 3) {
      if (!formData.buyerName.trim()) errors.buyerName = 'Full Name is required';
      if (!formData.buyerEmail.trim() || !formData.buyerEmail.includes('@')) {
        errors.buyerEmail = 'Please provide a valid business email';
      }
      if (!formData.buyerCompany.trim()) errors.buyerCompany = 'Company Legal Identity is required';
      if (!formData.entityVerificationId.trim()) {
        errors.entityVerificationId = 'A company Tax ID / GSTIN / Import-Export Code (IEC) is required for trading compliance verification';
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    const newRequisition: QuoteRequisition = {
      id: 'REQ-' + Math.floor(100000 + Math.random() * 900000),
      timestamp: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      status: 'PENDING',
      ...formData,
    };

    // Store in localStorage list
    const currentListStr = localStorage.getItem('satveer_quotes') || '[]';
    try {
      const currentList: QuoteRequisition[] = JSON.parse(currentListStr);
      currentList.unshift(newRequisition);
      localStorage.setItem('satveer_quotes', JSON.stringify(currentList));
    } catch (err) {
      console.error('Failed to store quote', err);
    }

    setStep(4); // Success layout
  };

  return (
    <div id="request-quote-view" className="text-white bg-[#0e121e] min-h-[75vh] py-16 px-4">
      <div className="max-w-3xl mx-auto bg-[#111627] rounded-3xl border border-gray-800 shadow-xl overflow-hidden">
        
        {/* Header Block with Step Counters */}
        <div className="p-8 border-b border-gray-850 bg-[#141b30] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] text-[#cca43b] font-mono uppercase tracking-[0.2em] font-bold">Trading Desk Portal</span>
            <h2 className="text-xl font-bold text-white font-display">Enterprise Quote Requisition</h2>
          </div>

          {step < 4 && (
            <div className="flex items-center space-x-3 text-xs font-mono">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center space-x-1">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold leading-none border transition ${
                    step === s
                      ? 'bg-[#cca43b] text-slate-900 border-[#cca43b]'
                      : step > s
                      ? 'bg-slate-800 text-emerald-400 border-gray-700'
                      : 'bg-transparent text-gray-500 border-gray-800'
                  }`}>
                    {s}
                  </span>
                  <span className={`hidden sm:inline ${step === s ? 'text-white' : 'text-gray-500'}`}>
                    {s === 1 ? 'Commodity' : s === 2 ? 'Logistics' : 'Entity'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Real Form Body */}
        {step < 4 ? (
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            
            {/* Step 1: Commodity Specification */}
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="border-b border-gray-800/60 pb-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 font-display">Commodity Spec</h3>
                  <p className="text-xs text-gray-500 font-light">Determine the raw core grains or spice metrics required.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category select */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#cca43b] mb-1 font-mono">Select Commodity Class *</label>
                    <select
                      id="input-commodity-type"
                      name="commodityType"
                      value={formData.commodityType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#cca43b] text-white font-sans"
                    >
                      <option value="1121 Golden Sella Basmati Rice">1121 Golden Sella Basmati Rice</option>
                      <option value="Raw Unpolished Red Lentils">Raw Unpolished Red Lentils (Masoor)</option>
                      <option value="Whole Curcumin Turmeric Bold">Whole Curcumin Turmeric Bold</option>
                      <option value="Pure Vedic Cow Ghee Tins">Pure Vedic Cow Ghee (Rich Solid Fat)</option>
                      <option value="Sugarcane Crystal Sugar S30">Sugarcane Crystal Sugar S30</option>
                      <option value="Premium Broad Mustard Grains">Premium Broad Mustard Grains</option>
                    </select>
                    {formErrors.commodityType && <p className="text-rose-500 text-xs mt-1">{formErrors.commodityType}</p>}
                  </div>

                  {/* Quantity In MT */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#cca43b] mb-1 font-mono">Volume Quantity (Metric Tons) *</label>
                    <input
                      id="input-quantity-mt"
                      type="number"
                      name="quantityMetricTons"
                      min="1"
                      value={formData.quantityMetricTons}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#cca43b] text-white font-mono"
                    />
                    {formErrors.quantityMetricTons && <p className="text-rose-500 text-xs mt-1">{formErrors.quantityMetricTons}</p>}
                    <p className="text-[10px] text-gray-500 mt-1 font-mono">*(1 Metric Ton = 1,000 Kilograms. Default min shipping unit: 20 MT container load)</p>
                  </div>
                </div>

                {/* Packaging Preference */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#cca43b] mb-1 font-mono">Packaging Specification *</label>
                  <select
                    id="input-packaging"
                    name="packagingPreference"
                    value={formData.packagingPreference}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#cca43b] text-white"
                  >
                    <option value="Heavy-Duty Poly-Woven Bagging (25kg)">Heavy-Duty Poly-Woven Bagging (25kg)</option>
                    <option value="Traditional Organic Jute Gunny Bags (50kg)">Traditional Organic Jute Gunny Bags (50kg)</option>
                    <option value="Custom Private Label Retails (1kg / 5kg)">Custom Private Label Retails (1kg / 5kg)</option>
                    <option value="Bulk Cargo Silo Liner Holding">Bulk Cargo Silo Liner Holding (Continuous Storage)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Logistics & Fulfillment */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="border-b border-gray-800/60 pb-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 font-display">Logistics & Incoterms</h3>
                  <p className="text-xs text-gray-500 font-light">Draft oceanic and transshipment fulfillment variables.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Destination port */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#cca43b] mb-1 font-mono">Destination Port & Country *</label>
                    <input
                      id="input-destination-port"
                      type="text"
                      name="destinationPort"
                      placeholder="e.g. Rotterdam Terminal, Netherlands"
                      value={formData.destinationPort}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#cca43b] text-white font-sans"
                    />
                    {formErrors.destinationPort && <p className="text-rose-500 text-xs mt-1">{formErrors.destinationPort}</p>}
                  </div>

                  {/* Shipping terms selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#cca43b] mb-1 font-mono">Shipping terms (Incoterm) *</label>
                    <select
                      id="input-shipping-terms"
                      name="shippingTerms"
                      value={formData.shippingTerms}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#cca43b] text-white font-mono"
                    >
                      <option value="CIF">CIF - Cost, Insurance & Freight (Recommended)</option>
                      <option value="FOB">FOB - Free On Board (JNPT or Mundra Loading)</option>
                      <option value="CFR">CFR - Cost & Freight Paid</option>
                      <option value="EXW">EXW - Ex-Works (Pickup straight from sorting plant)</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Payment Terms */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#cca43b] mb-1 font-mono">Preferred Payment Channel *</label>
                  <select
                    id="input-payment-terms"
                    name="paymentTerms"
                    value={formData.paymentTerms}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#cca43b] text-white"
                  >
                    <option value="Confirmed Letter of Credit (L/C)">Irrevocable Confirmed L/C at Sight (100% Secure)</option>
                    <option value="Documentary Collection D/P">Documentary Collection (D/P Cash Against Documents)</option>
                    <option value="Telegraphic Wire Transfer T/T (Advance)">Telegraphic Wire Transfer T/T (30% Upfront, 70% Scan B/L)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Entity Verification */}
            {step === 3 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="border-b border-gray-800/60 pb-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 font-display">Compliance and Entity Security</h3>
                  <p className="text-xs text-gray-500 font-light">Confirm the corporate purchasing legal framework.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Buyer Corporate Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#cca43b] mb-1 font-mono">Corporate business identity *</label>
                    <input
                      id="input-buyer-company"
                      type="text"
                      name="buyerCompany"
                      placeholder="e.g. Zenith Foods Logistics LLC"
                      value={formData.buyerCompany}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#cca43b] text-white"
                    />
                    {formErrors.buyerCompany && <p className="text-rose-500 text-xs mt-1">{formErrors.buyerCompany}</p>}
                  </div>

                  {/* Regulatory registration ID */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#cca43b] mb-1 font-mono">tax registration ID / corporate no. *</label>
                    <input
                      id="input-entity-verification"
                      type="text"
                      name="entityVerificationId"
                      placeholder="e.g. EU-VAT-9031823 / US-EIN-2310239"
                      value={formData.entityVerificationId}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#cca43b] text-white font-mono"
                    />
                    {formErrors.entityVerificationId && <p className="text-rose-500 text-xs mt-1">{formErrors.entityVerificationId}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Representative Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#cca43b] mb-1 font-mono">representative officer *</label>
                    <input
                      id="input-buyer-name"
                      type="text"
                      name="buyerName"
                      placeholder="e.g. Major Bradley Cooper"
                      value={formData.buyerName}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#cca43b] text-white"
                    />
                    {formErrors.buyerName && <p className="text-rose-500 text-xs mt-1">{formErrors.buyerName}</p>}
                  </div>

                  {/* Business Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#cca43b] mb-1 font-mono">Corporate email address *</label>
                    <input
                      id="input-buyer-email"
                      type="email"
                      name="buyerEmail"
                      placeholder="b.cooper@zenithfoods.com"
                      value={formData.buyerEmail}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#cca43b] text-white font-mono"
                    />
                    {formErrors.buyerEmail && <p className="text-rose-500 text-xs mt-1">{formErrors.buyerEmail}</p>}
                  </div>
                </div>

                {/* Special Instructions or Specs */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 font-mono">Sourcing tolerances & instructions (optional)</label>
                  <textarea
                    id="input-notes"
                    name="notes"
                    rows={3}
                    placeholder="e.g. Require SGS preloading inspection report for curcumin concentration percentage limits..."
                    value={formData.notes || ''}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-gray-800 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-[#cca43b] text-white font-sans"
                  />
                </div>

                {/* Compliance Security Warning */}
                <div className="flex items-start space-x-2.5 p-3.5 bg-slate-900 border border-amber-600/25 rounded-xl text-xs text-gray-400">
                  <ShieldAlert className="h-4 w-4 text-[#cca43b] shrink-0 mt-0.5" />
                  <span>
                    By submitting this requisition, you confirm your corporate legal charter is registered with sovereign Customs. Our legal desk will draft draft LC documents instantly based on verification guidelines.
                  </span>
                </div>
              </div>
            )}

            {/* Action buttons footer */}
            <div className="pt-6 border-t border-gray-850 flex items-center justify-between">
              {step > 1 ? (
                <button
                  id="btn-quote-back"
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 border border-gray-800 text-gray-300 text-xs tracking-wider uppercase font-bold rounded-lg transition-all flex items-center space-x-1.5"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  id="btn-quote-next"
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 bg-[#cca43b] hover:bg-amber-500 text-slate-900 text-xs tracking-wider uppercase font-bold rounded-lg transition-all flex items-center space-x-1.5 ml-auto"
                >
                  <span>Continue</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  id="btn-quote-submit"
                  type="submit"
                  className="px-8 py-2.5 bg-[#cca43b] hover:bg-amber-500 text-slate-900 text-xs tracking-wider uppercase font-extrabold rounded-lg transition-all flex items-center space-x-1.5 ml-auto"
                >
                  <span>Submit Requisition</span>
                  <Send className="h-4 w-4" />
                </button>
              )}
            </div>

          </form>
        ) : (
          
          /* Step 4: Success confirmation screen */
          <div className="p-12 text-center space-y-6">
            <div className="h-16 w-16 bg-emerald-950 border border-emerald-800 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="h-10 w-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white font-display">Contract Requisition Lodged Successfully</h3>
              <p className="text-xs text-gray-400 max-w-lg mx-auto">
                Requisition ID: <span className="font-mono text-[#cca43b] font-bold">REQ-847291</span> has been queued into our active Indian Milling allotment desk!
              </p>
            </div>

            <div className="p-6 bg-slate-900 rounded-xl border border-gray-850 text-left text-xs max-w-md mx-auto space-y-2.5 font-mono">
              <div className="flex justify-between border-b border-gray-800 pb-1.5">
                <span className="text-gray-500">Corporate Buyer:</span>
                <span className="white font-sans">{formData.buyerCompany}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-1.5">
                <span className="text-gray-500">Commodity Class:</span>
                <span className="white">{formData.commodityType}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-1.5">
                <span className="text-gray-500">Selected Quota:</span>
                <span className="text-[#cca43b] font-bold">{formData.quantityMetricTons} Metric Tons</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Fulfillment Rule:</span>
                <span>{formData.shippingTerms} Terminal</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 max-w-md mx-auto">
              You can track this requisition, active allocations, and dispatch timelines live on the Live Dashboard tab page. Our trade counsel is already preparing LC documentation.
            </p>

            <div className="pt-4">
              <button
                id="btn-quote-success-ok"
                onClick={onSubmissionSuccess}
                className="px-8 py-3 bg-[#cca43b] hover:bg-amber-500 text-slate-900 text-xs tracking-wider uppercase font-bold rounded-lg transition"
              >
                Enter Sourcing Dashboard
              </button>
            </div>
          </div>

        )}
      </div>
    </div>
  );
};
