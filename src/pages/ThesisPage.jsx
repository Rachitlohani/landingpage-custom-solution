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
  Box,
  Sparkles
} from 'lucide-react';

export default function ThesisPage({ setActiveTab, onOpenModal }) {
  const stats = [
    { value: "$5.3T", label: "US Annual Trade Volume", sub: "Importers facing complex CBP tariff compliance" },
    { value: "$32T+", label: "Global Trade Market", sub: "Cross-border merchandise flowing through customs daily" },
    { value: "$30B+", label: "Lost in Misclassification", sub: "Annual penalties, overpaid duties & border delays" },
    { value: "98%", label: "Manual Customs Friction", sub: "Filing backlogs prime for multi-agent automation" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-20">
      
      {/* HEADER SECTION */}
      <section className="text-center space-y-4">
        {/* Sub-options Pill Navigation */}
        <div className="max-w-2xl mx-auto pb-2">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-[#E8E8ED]/60 p-1.5 rounded-2xl border border-black/5 shadow-inner">
            <button
              onClick={() => setActiveTab('ai-customs-compliance')}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white text-[#1D1D1F] hover:text-[#0071E3] hover:shadow-sm transition-all flex items-center gap-1.5 border border-black/5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#0071E3]" />
              <span>AI Customs Compliance</span>
            </button>

            <button
              onClick={() => setActiveTab('us-import-entry-readiness')}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white text-[#1D1D1F] hover:text-[#0071E3] hover:shadow-sm transition-all flex items-center gap-1.5 border border-black/5"
            >
              <FileText className="w-3.5 h-3.5 text-[#0071E3]" />
              <span>Import Readiness</span>
            </button>

            <button
              onClick={() => setActiveTab('evidence-backed-ai')}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white text-[#1D1D1F] hover:text-[#0071E3] hover:shadow-sm transition-all flex items-center gap-1.5 border border-black/5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0071E3]" />
              <span>Why Evidence-Backed AI</span>
            </button>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight">
          The Intelligent Operating Layer <br />
          <span className="apple-blue-text-light">For Global Commerce.</span>
        </h1>

        <p className="text-sm sm:text-base text-[#6E6E73] max-w-2xl mx-auto leading-relaxed font-medium">
          Customs compliance is no longer a paperwork issue—it is a high-stakes knowledge problem. Here is how Agentic Customs transforms fragmented trade operations into governed AI intelligence.
        </p>

        {/* Key Trade Market Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-black/10 text-left">
          {stats.map((stat, idx) => (
            <div key={idx} className="apple-card-light p-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-[#1D1D1F] mt-1">{stat.label}</div>
              <div className="text-[11px] text-[#86868B] mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE SOLUTIONS & GUIDES (SEO DEEP-DIVES) */}
      <section className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Deep Dive Solutions & Guides</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight">
            Explore Document-to-Filing Readiness
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B]">
            Learn how Qubere turns commercial invoices and product data into evidence-backed import decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: AI Customs Compliance */}
          <div 
            onClick={() => setActiveTab('ai-customs-compliance')}
            className="apple-card-light p-6 cursor-pointer group hover:border-[#0071E3]/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] flex items-center justify-center group-hover:bg-[#0071E3] group-hover:text-white transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">
                AI Customs Compliance
              </h3>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Discover the document-to-filing workflow: automated extraction, HS code proposals, duty estimation, and PGA screening.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#0071E3]">
              <span>Read Solution Overview</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Import Readiness */}
          <div 
            onClick={() => setActiveTab('us-import-entry-readiness')}
            className="apple-card-light p-6 cursor-pointer group hover:border-[#0071E3]/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] flex items-center justify-center group-hover:bg-[#0071E3] group-hover:text-white transition-colors">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">
                Import Readiness
              </h3>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Learn what trade teams must validate before filing entry summaries with CBP and where invoice data typically breaks down.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#0071E3]">
              <span>Read Readiness Guide</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Why Evidence-Based AI */}
          <div 
            onClick={() => setActiveTab('evidence-backed-ai')}
            className="apple-card-light p-6 cursor-pointer group hover:border-[#0071E3]/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] flex items-center justify-center group-hover:bg-[#0071E3] group-hover:text-white transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">
                Why Evidence-Backed AI
              </h3>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Founder paper by Rachit Lohani & Krishna Bandi on why customs AI must be grounded in ruling citations and human controls.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#0071E3]">
              <span>Read Founder Article</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
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
