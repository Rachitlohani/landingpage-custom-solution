import React from 'react';
import KnowledgeGraph from '../components/KnowledgeGraph';
import AgentSimulator from '../components/AgentSimulator';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  FileText, 
  Globe, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  Database,
  Lock,
  ChevronRight,
  Scale,
  Award,
  Box
} from 'lucide-react';

export default function LandingPage({ setActiveTab, onOpenModal }) {
  const stats = [
    { value: "10x", label: "Faster Declaration Speed", sub: "Sub-second multi-agent pipeline" },
    { value: "99.4%", label: "Audit-Ready Accuracy", sub: "Grounded in RAG & knowledge graphs" },
    { value: "$12B+", label: "Trade Value Coverage", sub: "Across US, EU, UK & APAC regulations" },
    { value: "100%", label: "Deterministic Safety", sub: "Hard compliance rules & human audit" },
  ];

  const pillars = [
    {
      icon: Cpu,
      title: "Specialized Multi-Agent Model",
      desc: "Rather than relying on a single generic LLM, autonomous agents focus on discrete capabilities: classification, BOM origin trace, valuation, and PGA screening."
    },
    {
      icon: Database,
      title: "Knowledge Graph Intelligence",
      desc: "Connects product master data, historical customs rulings, supplier locations, and evolving tariffs into a live queryable relational graph."
    },
    {
      icon: Scale,
      title: "Deterministic Rules Engine",
      desc: "AI recommendations are validated against hard regulatory schemas and business policies before declarations become filing-ready."
    },
    {
      icon: Lock,
      title: "Human Governance & Audit Trail",
      desc: "High-risk edge cases are automatically escalated to authorized specialists with full evidence context and zero black-box decisions."
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 md:pt-16 text-center max-w-5xl mx-auto px-4 space-y-6">
        
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The 1st AI-Native Global Customs Operating Layer</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1D1D1F] tracking-tight leading-[1.08]">
          Autonomous Trade Compliance <br className="hidden sm:inline" />
          <span className="apple-blue-text-light">Operating at Scale.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#6E6E73] max-w-2xl mx-auto font-normal leading-relaxed">
          Agentic Customs connects regulations, enterprise master data, and human expertise to automate complex cross-border trade declarations with enterprise governance.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            onClick={() => onOpenModal('deck')}
            className="px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>Request Pitch Deck</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setActiveTab('graph')}
            className="px-6 py-3.5 rounded-full bg-white hover:bg-[#FAFAFC] text-[#1D1D1F] font-semibold text-xs sm:text-sm border border-black/10 shadow-sm transition-all flex items-center gap-2"
          >
            <Layers className="w-4 h-4 text-[#0071E3]" />
            <span>Explore Knowledge Graph</span>
          </button>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-16 border-t border-black/10 text-left">
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

      {/* FEATURED ADVANCED REACT COMPONENT: INTERACTIVE KNOWLEDGE GRAPH */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-[#6E6E73] text-xs font-semibold">
            <Database className="w-3.5 h-3.5 text-[#0071E3]" />
            <span>Interactive Technology Demo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight">
            Knowledge Graph Intelligence
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B]">
            Drag, click, and inspect real-time relationships between HS codes, regulations, suppliers, and specialized agents.
          </p>
        </div>

        {/* Embedded Knowledge Graph Component */}
        <KnowledgeGraph />
      </section>

      {/* MULTI-AGENT WORKFLOW SIMULATOR */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            <span>Sub-Second Multi-Agent Execution</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight">
            Specialized Agents Working in Harmony
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B]">
            See how discrete agents validate product attributes, origin rules, and PGA requirements in sub-seconds.
          </p>
        </div>

        <AgentSimulator />
      </section>

      {/* CORE PLATFORM PILLARS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight">
            Engineered for Regulated Enterprise Trade
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B]">
            Four structural guarantees that deliver accuracy, compliance, and institutional trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="apple-card-light p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1D1D1F] mb-2">{pillar.title}</h3>
                  <p className="text-xs text-[#6E6E73] leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-black/5 flex items-center gap-1.5 text-emerald-600 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Governed Architecture
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FUNDRAISING & SALES CALL TO ACTION CARD */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="apple-card-light p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
            Partner With Us
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6E73] max-w-xl mx-auto leading-relaxed">
            We are opening enterprise pilot programs and closing our seed investment round. Contact our team to review our pitch deck or request a live pilot.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenModal('deck')}
              className="px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Request Pitch Deck</span>
            </button>
            <button
              onClick={() => onOpenModal('demo')}
              className="px-6 py-3.5 rounded-full bg-[#F5F5F7] hover:bg-[#E8E8ED] text-[#1D1D1F] font-semibold text-xs sm:text-sm border border-black/10 transition-all"
            >
              Schedule Enterprise Demo
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
