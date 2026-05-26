/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Ship, Globe, FileText, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, onRequestQuote }) => {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'global-reach', label: 'Global Reach' },
    { id: 'dashboard', label: 'Live Dashboard' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#111625]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentTab('home')}>
            <div className="p-2 bg-[#cca43b]/10 rounded-lg border border-[#cca43b]/30">
              <Ship className="h-6 w-6 text-[#cca43b]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-white font-display block">
                SATVEER
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 block font-mono">
                Overseas Impex
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {menuItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => setCurrentTab(item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md font-sans ${
                    isActive
                      ? 'text-[#cca43b] bg-gray-800/40 border-b-2 border-[#cca43b] rounded-b-none'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/20'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="flex items-center space-x-4">
            <button
              id="cta-request-quote-nav"
              onClick={onRequestQuote}
              className={`hidden sm:flex items-center space-x-2 px-5 py-2.5 text-xs tracking-wider uppercase font-semibold border rounded-lg transition-all duration-300 ${
                currentTab === 'request-quote'
                  ? 'bg-[#cca43b] text-slate-900 border-[#cca43b]'
                  : 'bg-transparent text-[#cca43b] border-[#cca43b] hover:bg-[#cca43b] hover:text-slate-900'
              }`}
            >
              <span>Request Quote</span>
              <ChevronRight className="h-4 w-4" />
            </button>
            
            {/* Mobile Menu Toggle Indicator */}
            <div className="md:hidden flex items-center">
              <select
                id="mobile-nav-select"
                value={currentTab}
                onChange={(e) => {
                  if (e.target.value === 'request-quote') {
                    onRequestQuote();
                  } else {
                    setCurrentTab(e.target.value);
                  }
                }}
                className="bg-slate-800 text-gray-200 px-3 py-1.5 rounded border border-gray-700 text-sm focus:outline-none focus:border-[#cca43b]"
              >
                {menuItems.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
                <option value="request-quote">Request a Quote</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
