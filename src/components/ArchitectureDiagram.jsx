import React, { useState } from 'react';
import { 
  Database, 
  Cpu, 
  ShieldCheck, 
  FileText, 
  Globe, 
  Layers, 
  Sparkles, 
  Server, 
  CheckCircle2,
  Lock,
  Workflow
} from 'lucide-react';

export default function ArchitectureDiagram() {
  const [activeModule, setActiveModule] = useState('kgh');

  const modules = {
    kgh: {
      title: "Knowledge Graph Hub (KGH)",
      subtitle: "Central Regulatory & Enterprise Graph",
      desc: "Connects product master data, historical customs rulings, supplier locations, and evolving tariffs into a unified relational graph. Every query retrieves trusted, current context.",
      status: "Core Engine",
      color: "#0071E3"
    },
    agents: {
      title: "Agentic Multi-Agent Network",
      subtitle: "Specialized Intelligence Orchestration",
      desc: "Coordinates discrete agents (Intake, Classification, Origin, Compliance, Filing) operating under strict deterministic rules and human oversight.",
      status: "Active Network",
      color: "#059669"
    },
    erp: {
      title: "Enterprise ERP & System Bus",
      subtitle: "SAP S/4HANA, Oracle & Data Lake Integration",
      desc: "Bi-directional integration layer connecting to enterprise ERPs, WMS, TMS, and product lifecycle management software without replacing core infrastructure.",
      status: "Enterprise Connected",
      color: "#D97706"
    },
    gov: {
      title: "Customs Authorities & Global APIs",
      subtitle: "WCO, ACE, ATLAS & Single Window Gateways",
      desc: "Direct filing schema transformers converting validated payload data into country-specific customs declarations for automated border clearance.",
      status: "Multi-Jurisdiction",
      color: "#DC2626"
    }
  };

  const current = modules[activeModule];

  return (
    <div className="w-full apple-card-light p-6 sm:p-8 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-black/5">
        <div>
          <div className="flex items-center gap-2">
            <Workflow className="w-5 h-5 text-[#0071E3]" />
            <h3 className="text-lg font-extrabold text-[#1D1D1F]">Governed Enterprise AI Architecture</h3>
          </div>
          <p className="text-xs text-[#86868B] mt-1 font-medium">
            Native interactive visualization of Agentic Customs intelligence layers
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="flex flex-wrap items-center gap-1 bg-[#E8E8ED]/60 p-1 rounded-full border border-black/5">
          {Object.entries(modules).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setActiveModule(key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeModule === key
                  ? 'bg-[#1D1D1F] text-white shadow-sm'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              {item.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Visual Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        
        {/* Left: Data Stream Sources */}
        <div className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#86868B] font-bold px-1">
            Regulatory & Enterprise Sources
          </div>

          <div 
            onClick={() => setActiveModule('gov')}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
              activeModule === 'gov' ? 'bg-red-50 border-red-300 shadow-md' : 'bg-[#FAFAFC] border-black/5 hover:border-black/20'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-red-100 text-red-600">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1D1D1F]">Customs Authorities APIs</h4>
                <p className="text-[11px] text-[#6E6E73]">WCO, US CBP ACE, EU NCTS/ATLAS</p>
              </div>
            </div>
          </div>

          <div 
            onClick={() => setActiveModule('erp')}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
              activeModule === 'erp' ? 'bg-amber-50 border-amber-300 shadow-md' : 'bg-[#FAFAFC] border-black/5 hover:border-black/20'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1D1D1F]">Enterprise Systems (ERP/PLM)</h4>
                <p className="text-[11px] text-[#6E6E73]">SAP S/4HANA, Oracle, WMS/TMS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Core Intelligence Hub */}
        <div className="space-y-4">
          <div 
            onClick={() => setActiveModule('kgh')}
            className={`p-5 rounded-3xl border text-center transition-all cursor-pointer relative overflow-hidden ${
              activeModule === 'kgh' 
                ? 'bg-blue-50 border-[#0071E3] shadow-md' 
                : 'bg-[#FAFAFC] border-black/5 hover:border-black/20'
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-[#0071E3]/10 text-[#0071E3] border border-[#0071E3]/20 flex items-center justify-center mx-auto mb-3">
              <Database className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-extrabold text-[#1D1D1F]">Knowledge Graph Hub</h4>
            <p className="text-xs text-[#6E6E73] mt-1 font-medium">Grounding RAG with tariff schedules, rulings & product BOMs</p>
          </div>

          <div className="flex justify-center">
            <div className="w-0.5 h-6 bg-gradient-to-b from-[#0071E3] to-emerald-500" />
          </div>

          <div 
            onClick={() => setActiveModule('agents')}
            className={`p-5 rounded-3xl border text-center transition-all cursor-pointer relative overflow-hidden ${
              activeModule === 'agents' 
                ? 'bg-emerald-50 border-emerald-500 shadow-md' 
                : 'bg-[#FAFAFC] border-black/5 hover:border-black/20'
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3">
              <Cpu className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-extrabold text-[#1D1D1F]">Multi-Agent Network</h4>
            <p className="text-xs text-[#6E6E73] mt-1 font-medium">Specialized AI agents operating under deterministic rules</p>
          </div>
        </div>

        {/* Right: Active Module Inspector */}
        <div className="apple-card-light p-5 border-black/10 bg-[#FAFAFC] space-y-4 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-black/5">
            <span className="text-[10px] font-mono uppercase font-bold text-[#86868B]">Layer Detail</span>
            <span 
              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${current.color}15`, color: current.color, border: `1px solid ${current.color}30` }}
            >
              {current.status}
            </span>
          </div>

          <div>
            <h4 className="text-base font-extrabold text-[#1D1D1F]">{current.title}</h4>
            <span className="text-xs font-bold block text-[#0071E3] mt-0.5">{current.subtitle}</span>
            <p className="text-xs text-[#6E6E73] mt-3 leading-relaxed font-medium">
              {current.desc}
            </p>
          </div>

          <div className="pt-3 border-t border-black/5 flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Deterministic Verification Active
          </div>
        </div>

      </div>
    </div>
  );
}
