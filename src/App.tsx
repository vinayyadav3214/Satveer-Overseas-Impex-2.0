/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HomeView } from "./components/HomeView";
import { AboutView } from "./components/AboutView";
import { ServicesView } from "./components/ServicesView";
import { ProductsView } from "./components/ProductsView";
import { GlobalReachView } from "./components/GlobalReachView";
import { DashboardView } from "./components/DashboardView";
import { RequestQuoteView } from "./components/RequestQuoteView";
import { Footer } from "./components/Footer";
import { MessageSquare } from "lucide-react";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [prefilledCommodity, setPrefilledCommodity] = useState<string>("");

  const handleRequestQuote = () => {
    setPrefilledCommodity("");
    setCurrentTab("request-quote");
  };

  const handleQuoteThisProduct = (commodityName: string) => {
    setPrefilledCommodity(commodityName);
    setCurrentTab("request-quote");
  };

  const handleSubmissionSuccess = () => {
    setCurrentTab("dashboard");
  };

  // Switch to the correct view content
  const renderView = () => {
    switch (currentTab) {
      case "home":
        return (
          <HomeView
            setCurrentTab={setCurrentTab}
            onRequestQuote={handleRequestQuote}
          />
        );
      case "about":
        return <AboutView />;
      case "services":
        return <ServicesView />;
      case "products":
        return <ProductsView onQuoteThisProduct={handleQuoteThisProduct} />;
      case "global-reach":
        return <GlobalReachView />;
      case "dashboard":
        return <DashboardView />;
      case "request-quote":
        return (
          <RequestQuoteView
            prefilledCommodity={prefilledCommodity}
            onSubmissionSuccess={handleSubmissionSuccess}
          />
        );
      default:
        return (
          <HomeView
            setCurrentTab={setCurrentTab}
            onRequestQuote={handleRequestQuote}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0e121e] text-slate-100 font-sans">
      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onRequestQuote={handleRequestQuote}
      />

      {/* Main Screen Transition Area */}
      <main className="flex-grow">
        <div key={currentTab} className="fade-in-section">
          {renderView()}
        </div>
      </main>

      {/* Footer */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* Floating Enterprise WhatsApp Contact button */}
      <a
        id="floating-whatsapp-trigger"
        href="https://wa.me/917842678844?text=Hello%20Satveer%20Overseas%20Impex%20Trade%20Desk%2C%20I%20am%20interested%20in%20high-volume%20commodity%20quotations."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20 flex items-center justify-center cursor-pointer group"
        title="Contact Trade Desk"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold uppercase tracking-wider font-mono uppercase whitespace-nowrap">
          Live Trade Desk
        </span>
      </a>
    </div>
  );
}
