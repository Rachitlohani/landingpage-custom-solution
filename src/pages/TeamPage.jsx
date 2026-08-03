import React from 'react';
import { Users, Sparkles, Mail, Lock, FileText, ArrowRight } from 'lucide-react';

export default function TeamPage({ onOpenModal }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-16 text-center">

      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-bold shadow-sm">
          <Users className="w-3.5 h-3.5" />
          <span>Leadership & Advisors</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight">
          The Team Behind <span className="apple-blue-text-light">Agentic Customs</span>
        </h1>

        <p className="text-sm sm:text-base text-[#6E6E73] max-w-xl mx-auto leading-relaxed font-medium">
          Combining decades of enterprise AI architecture, global supply chain compliance, and international trade law expertise.
        </p>
      </div>

      {/* Empty Placeholder Frame */}
      <div className="apple-card-light p-12 sm:p-16 border-dashed border-black/15 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 flex items-center justify-center mx-auto text-[#0071E3]">
          <Users className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-extrabold text-[#1D1D1F]">Team Profiles & Advisors</h3>
          <p className="text-xs text-[#6E6E73] max-w-md mx-auto leading-relaxed font-medium">
            Team details, background bios, and advisory board members will be published here shortly.
          </p>
        </div>

        <div className="inline-block px-4 py-2 rounded-full bg-black/5 border border-black/10 text-xs text-[#1D1D1F] font-mono font-semibold">
          [ We are brewing - Will share soon... ]
        </div>

        <div className="pt-6 border-t border-black/5 max-w-sm mx-auto">
          <button
            onClick={() => onOpenModal('deck')}
            className="w-full py-3 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs shadow-md shadow-blue-500/15 flex items-center justify-center gap-2 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Request Pitch Deck for Founder Details</span>
          </button>
        </div>
      </div>

    </div>
  );
}
