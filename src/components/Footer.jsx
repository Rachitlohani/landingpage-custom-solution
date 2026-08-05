import React from 'react';
import { Shield, ArrowUpRight } from 'lucide-react';

export default function Footer({ setActiveTab, onOpenModal }) {
  return (
    <footer className="border-t border-black/5 bg-[#F5F5F7] py-12 text-xs text-[#86868B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-[#0071E3]/10 flex items-center justify-center text-[#0071E3]">
            <Shield className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-[#1D1D1F]">Agentic Customs</span>
          <span className="text-black/10">|</span>
          <span className="font-medium">Enterprise AI for Global Trade Compliance</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 font-semibold">
          <button onClick={() => setActiveTab('home')} className="hover:text-[#1D1D1F] transition-colors">
            Overview
          </button>
          <button onClick={() => setActiveTab('graph')} className="hover:text-[#1D1D1F] transition-colors">
            Knowledge Graph
          </button>
          <button onClick={() => setActiveTab('thesis')} className="hover:text-[#1D1D1F] transition-colors">
            Thesis
          </button>
          <button onClick={() => setActiveTab('trade-knowledge-graph')} className="hover:text-[#0071E3] font-bold transition-colors">
            Blog: Trade Graph
          </button>
          <button onClick={() => setActiveTab('team')} className="hover:text-[#1D1D1F] transition-colors">
            Team
          </button>
          <button onClick={() => onOpenModal('deck')} className="text-[#0071E3] hover:underline flex items-center gap-1 font-bold">
            <span>Request Deck</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Copyright */}
        <div className="font-medium">
          © {new Date().getFullYear()} Agentic Customs Inc.
        </div>
      </div>
    </footer>
  );
}
