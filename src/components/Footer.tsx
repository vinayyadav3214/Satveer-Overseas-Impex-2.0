/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Ship, Mail, Phone, MapPin, Award, CheckCircle } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  return (
    <footer className="bg-[#0b0e17] border-t border-gray-800 text-gray-400 font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Ship className="h-6 w-6 text-[#cca43b]" />
            <span className="text-lg font-bold tracking-wider text-white font-display">
              SATVEER OVERSEAS IMPEX
            </span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Architects of India's leading global trade conduits. Delivering high-purity agricultural commodities, bespoke supply chains, and absolute compliance.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="text-[10px] bg-slate-800 text-gray-300 font-mono px-2 py-1 rounded border border-gray-700">
              ISO 9001:2015
            </span>
            <span className="text-[10px] bg-slate-800 text-gray-300 font-mono px-2 py-1 rounded border border-gray-700">
              APEDA MEMBER
            </span>
            <span className="text-[10px] bg-slate-800 text-gray-300 font-mono px-2 py-1 rounded border border-gray-700">
              FSSAI REGISTERED
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold tracking-wider text-white font-display mb-4 uppercase">
            Corporate Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            {['home', 'about', 'services', 'products', 'global-reach', 'dashboard'].map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setCurrentTab(tab)}
                  className="hover:text-[#cca43b] transition-colors duration-200 capitalize text-left"
                >
                  {tab.replace('-', ' ')}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Capabilities */}
        <div>
          <h4 className="text-sm font-semibold tracking-wider text-white font-display mb-4 uppercase">
            Global Trade Desk
          </h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start space-x-2.5">
              <MapPin className="h-4 w-4 text-[#cca43b] shrink-0 mt-0.5" />
              <span>
                <strong>H.Q.:</strong> Level 1, Empire Building, Street No:7, HMT Nagar, Hyderabad, Telangana 110001, India
              </span>
            </li>
            <li className="flex items-start space-x-2.5">
              <MapPin className="h-4 w-4 text-[#cca43b] shrink-0 mt-0.5" />
              <span>
                <strong>Port Logistics:</strong> JNPT Marine Terminal, Navi Mumbai 400702, India
              </span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Mail className="h-4 w-4 text-[#cca43b] shrink-0" />
              <a href="mailto:info@satveerglobal.com" className="hover:text-white transition-colors duration-200">
                info@satveerglobal.com
              </a>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone className="h-4 w-4 text-[#cca43b] shrink-0" />
              <a href="tel:+917842678844" className="hover:text-white transition-colors duration-200 font-mono">
                +91 78426-78844
              </a>
            </li>
          </ul>
        </div>

        {/* Trade Credentials */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold tracking-wider text-white font-display mb-4 uppercase">
            Security & Oversight
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            Operating under rigorous customs protocols and bilateral Indian trade incentives. Assured double-layer phytosanitary check protocols.
          </p>
          <div className="p-3 bg-slate-900 border border-gray-800 rounded-lg flex items-center space-x-2.5">
            <Award className="h-5 w-5 text-[#cca43b]" />
            <div>
              <p className="text-[10px] text-gray-300 font-semibold uppercase tracking-wider">
                AEO Status Certified
              </p>
              <p className="text-[9px] text-gray-500 font-mono">
                Indian Customs Authorized Economic Operator
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} Satveer Overseas Impex. Private Trade Counsel. All Rights Reserved.</p>
        <p className="mt-2 sm:mt-0 flex items-center space-x-1 font-mono">
          <CheckCircle className="h-3 w-3 text-[#cca43b]" />
          <span>Institutional Trust Registry No. IND-84729-SOI</span>
        </p>
      </div>
    </footer>
  );
};
