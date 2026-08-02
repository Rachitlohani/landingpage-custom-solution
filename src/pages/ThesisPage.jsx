import React from 'react';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import ExpansionRoadmap from '../components/ExpansionRoadmap';
import { 
  ShieldCheck, 
  Layers, 
  Database, 
  TrendingUp, 
  CheckCircle2, 
  FileText, 
  ChevronRight, 
  ArrowRight,
  Cpu,
  Lock,
  Globe,
  Zap,
  Box
} from 'lucide-react';

export default function ThesisPage({ onOpenModal }) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-20">
      
      {/* HEADER SECTION */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-bold shadow-sm">
          <Layers className="w-3.5 h-3.5" />
          <span>Strategic Investment Thesis</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight">
          The Intelligent Operating Layer <br />
          <span className="apple-blue-text-light">For Global Commerce.</span>
        </h1>

        <p className="text-sm sm:text-base text-[#6E6E73] max-w-2xl mx-auto leading-relaxed font-medium">
          Customs compliance is no longer a paperwork issue—it is a high-stakes knowledge problem. Here is how Agentic Customs transforms fragmented trade operations into governed AI intelligence.
        </p>
      </section>

      {/* THE PROBLEM & OPPORTUNITY */}
      <section className="apple-card-light p-8 sm:p-10">
        <h2 className="text-2xl font-extrabold text-[#1D1D1F] mb-4">Why Existing Software Is No Longer Enough</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-[#6E6E73] leading-relaxed font-medium">
          <div>
            <p className="mb-4">
              Traditional customs software digitized manual declarations, but left the actual decision-making stranded in manual research, spreadsheets, and legacy institutional memory.
            </p>
            <p>
              Every declaration requires answering complex regulatory questions: Is the HS code accurate? Does the declared origin satisfy trade agreements? Are sanctions lists checked?
            </p>
          </div>
          <div>
            <p className="mb-4">
              Generic LLMs fail because they rely on model memory, causing hallucinations in high-risk legal contexts. Enterprise customs requires <strong className="text-[#1D1D1F]">governed decisions backed by evidence</strong>.
            </p>
            <p>
              Agentic Customs fills this gap by coupling Retrieval-Augmented Generation with deterministic rules, knowledge graphs, and human oversight.
            </p>
          </div>
        </div>
      </section>

      {/* NATIVE INTERACTIVE ARCHITECTURE DIAGRAM SECTION */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">
            Architectural Approach: Governed AI Stack
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B]">
            Our platform decouples model intelligence from data retrieval and compliance validation.
          </p>
        </div>

        <ArchitectureDiagram />
      </section>

      {/* NATIVE INTERACTIVE EXPANSION ROADMAP SECTION */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">
            Expanding Customer Experience Over Time
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B]">
            A land-and-expand trajectory that transforms point document automation into a complete enterprise operating system.
          </p>
        </div>

        <ExpansionRoadmap />
      </section>

      {/* INVESTMENT & DECK CTA */}
      <section className="apple-card-light p-8 sm:p-12 text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-[#1D1D1F]">Interested in Our Investment Thesis?</h2>
        <p className="text-xs sm:text-sm text-[#6E6E73] max-w-xl mx-auto leading-relaxed font-medium">
          Request our complete pitch deck, financial model, and customer case studies to learn more about our seed round and market strategy.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onOpenModal('deck')}
            className="px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>Request Pitch Deck</span>
          </button>
        </div>
      </section>

    </div>
  );
}
