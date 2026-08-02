import React, { useState } from 'react';
import { 
  FileText, 
  Cpu, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Layers,
  ChevronRight
} from 'lucide-react';

export default function ExpansionRoadmap() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      number: "01",
      title: "Foundational Intelligence",
      subtitle: "Phase 1: Document Processing & Retrieval",
      desc: "Standardizes enterprise master data and ingests unstructured shipment documents (commercial invoices, packing lists, certificates of origin). RAG retrieves relevant tariff schedules and trade agreement rules.",
      focus: [
        "Automated PDF & XML data extraction",
        "Master data anomaly detection",
        "RAG tariff & regulatory search engine"
      ],
      metrics: "Immediate ROI — 70% reduction in manual data entry"
    },
    {
      number: "02",
      title: "Predictive Insights & Multi-Agent",
      subtitle: "Phase 2: Workflow Orchestration",
      desc: "Deploys specialized AI agents operating under deterministic business rules. Agents perform HS code classification, BOM origin calculation, PGA screening, and country-specific declaration payload generation.",
      focus: [
        "Autonomous multi-agent task routing",
        "Deterministic compliance verification",
        "Human-in-the-loop exception drawer"
      ],
      metrics: "Scale Phase — 10x faster declaration preparation"
    },
    {
      number: "03",
      title: "Cognitive Enterprise Network",
      subtitle: "Phase 3: Global Autonomous Trade Network",
      desc: "Connects enterprise ERPs, freight forwarders, customs brokers, and government Single Windows into a self-optimizing, real-time compliance network with continuous duty optimization.",
      focus: [
        "Inter-enterprise compliance network",
        "Predictive tariff & duty optimization",
        "Fully automated customs clearance"
      ],
      metrics: "Long-Term Expansion — Complete trade operating system"
    }
  ];

  return (
    <div className="w-full apple-card-light p-6 sm:p-8 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-black/5">
        <div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-extrabold text-[#1D1D1F]">Customer Experience Expansion Roadmap</h3>
          </div>
          <p className="text-xs text-[#86868B] mt-1 font-medium">
            Evolution from document intelligence to a global autonomous trade compliance network
          </p>
        </div>

        {/* Stage Selector Pills */}
        <div className="flex items-center gap-2 bg-[#E8E8ED]/60 p-1 rounded-full border border-black/5">
          {stages.map((stg, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStage(idx)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeStage === idx
                  ? 'bg-[#1D1D1F] text-white shadow-sm'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              Stage {stg.number}
            </button>
          ))}
        </div>
      </div>

      {/* 3 Stage Progress Cards Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stages.map((stg, idx) => {
          const isActive = activeStage === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveStage(idx)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-blue-50/70 border-[#0071E3] shadow-md scale-[1.02]'
                  : 'bg-[#FAFAFC] border-black/5 hover:border-black/20 opacity-80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl font-black ${isActive ? 'text-[#0071E3]' : 'text-[#86868B]'}`}>
                    {stg.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#86868B] font-bold">STAGE</span>
                </div>
                <h4 className="text-sm font-bold text-[#1D1D1F] mb-1">{stg.title}</h4>
                <p className="text-xs text-[#6E6E73] font-medium">{stg.subtitle}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-black/5 text-[11px] text-[#0071E3] font-extrabold flex items-center justify-between">
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Stage Detailed Breakdown Panel */}
      <div className="apple-card-light p-6 border-black/10 bg-[#FAFAFC] space-y-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-black/5">
          <div>
            <span className="text-xs font-extrabold text-[#0071E3] bg-[#0071E3]/10 px-3 py-1 rounded-full border border-[#0071E3]/20">
              {stages[activeStage].subtitle}
            </span>
            <h3 className="text-xl font-extrabold text-[#1D1D1F] mt-2">
              {stages[activeStage].title}
            </h3>
          </div>

          <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-extrabold text-emerald-700">
            {stages[activeStage].metrics}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed font-medium">
          {stages[activeStage].desc}
        </p>

        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-wider font-bold text-[#86868B]">
            Key Operational Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {stages[activeStage].focus.map((item, fIdx) => (
              <div key={fIdx} className="p-3 rounded-xl bg-white border border-black/5 flex items-center gap-2.5 text-xs text-[#1D1D1F] font-semibold shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
