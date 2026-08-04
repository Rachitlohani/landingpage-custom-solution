import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  FileText, 
  ExternalLink, 
  AlertTriangle, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Database,
  Lock,
  Workflow
} from 'lucide-react';

export default function TeamPage({ onOpenModal }) {
  const founders = [
    {
      name: "Rachit Lohani",
      role: "Co-Founder",
      bio: "Former CPTO at E2open and Paylocity; executive engineering leadership at Atlassian and Intuit.",
      experience: ["E2open (CPTO)", "Paylocity (CPTO)", "Atlassian", "Intuit"],
      linkedin: "https://www.linkedin.com/in/rachitlohani/"
    },
    {
      name: "Krishna Bandi",
      role: "Co-Founder",
      bio: "30+ years in supply chain and customs filing; former Head of Customs Filing at E2open & engineering leader at BlueJay.",
      experience: ["E2open (Head of Customs Filing)", "BlueJay (Product & Eng Leader)", "30+ Yrs Trade Compliance"],
      linkedin: "https://www.linkedin.com/in/krishnabandi/"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-16">

      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1D1D1F] tracking-tight">
          Why <span className="apple-blue-text-light">Qubere</span>
        </h1>

        <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed font-normal">
          Customs compliance isn't a filing problem—it's a high-stakes knowledge problem. Here is why legacy software fails, how Qubere solves it, and the team built to win.
        </p>
      </div>

      {/* 1. THE PROBLEM (HIGH IMPACT 3-CARD BREAKDOWN) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-black/5 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight">1. The Problem</h2>
          <span className="text-xs font-mono font-bold text-rose-600">Why Legacy Systems Break</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Input */}
          <div className="p-7 rounded-3xl bg-[#0F172A] text-white flex flex-col justify-between h-64 shadow-md">
            <div className="space-y-3">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-blue-400">INPUT</div>
              <h3 className="text-2xl font-extrabold tracking-tight">195+ Jurisdictions</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Disconnected legacy systems creating errors and compliance failures.
              </p>
            </div>
            <div className="text-xs font-mono font-semibold text-slate-400 pt-3 border-t border-slate-800">
              Integration nightmare
            </div>
          </div>

          {/* Card 2: Intelligence */}
          <div className="p-7 rounded-3xl bg-[#F3F0FF] text-[#1D1D1F] flex flex-col justify-between h-64 border border-purple-200 shadow-sm">
            <div className="space-y-3">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700">INTELLIGENCE</div>
              <h3 className="text-2xl font-extrabold tracking-tight text-purple-950">Manual Bottlenecks</h3>
              <p className="text-xs sm:text-sm text-purple-900/80 leading-relaxed font-medium">
                Research stranded in spreadsheets and legacy institutional memory. Risk compounds at scale.
              </p>
            </div>
            <div className="text-xs font-mono font-semibold text-purple-700 pt-3 border-t border-purple-200">
              Expensive to operate
            </div>
          </div>

          {/* Card 3: Control */}
          <div className="p-7 rounded-3xl bg-[#ECFDF5] text-[#1D1D1F] flex flex-col justify-between h-64 border border-emerald-200 shadow-sm">
            <div className="space-y-3">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">CONTROL</div>
              <h3 className="text-2xl font-extrabold tracking-tight text-emerald-950">Knowledge Silos</h3>
              <p className="text-xs sm:text-sm text-emerald-900/80 leading-relaxed font-medium">
                Inconsistent compliance that multiplies with volume and global expansion.
              </p>
            </div>
            <div className="text-xs font-mono font-semibold text-emerald-700 pt-3 border-t border-emerald-200">
              Issues compound over time
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE SOLUTION (INTRODUCING QUBERE) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-black/5 pb-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight">
              2. Introducing Qubere — Agentic Customs
            </h2>
          </div>
          <span className="text-xs font-mono font-bold text-[#0071E3]">The Decision Layer Before Filing</span>
        </div>

        <p className="text-xs sm:text-sm text-[#6E6E73] font-medium leading-relaxed max-w-3xl">
          <strong className="text-[#1D1D1F]">Not customs filing software.</strong> The enterprise intelligence platform combining specialized AI agents, governed decision-making, and deterministic validation to modernize compliance at scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          
          {/* Card 1: Input */}
          <div className="p-7 rounded-3xl bg-[#0F172A] text-white flex flex-col justify-between h-72 shadow-md">
            <div className="space-y-3">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-blue-400">INPUT</div>
              <h3 className="text-base sm:text-lg font-bold tracking-tight leading-snug">
                Documents <br />
                Enterprise master data <br />
                Regulations & rulings <br />
                Historical decisions
              </h3>
            </div>
            <div className="text-xs font-mono font-semibold text-blue-300 pt-3 border-t border-slate-800">
              Connect; do not replace
            </div>
          </div>

          {/* Card 2: Intelligence */}
          <div className="p-7 rounded-3xl bg-[#F3F0FF] text-[#1D1D1F] flex flex-col justify-between h-72 border border-purple-200 shadow-sm">
            <div className="space-y-3">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700">INTELLIGENCE</div>
              <h3 className="text-base sm:text-lg font-bold tracking-tight leading-snug text-purple-950">
                Specialized agents <br />
                Knowledge retrieval <br />
                Graph context <br />
                Workflow orchestration
              </h3>
            </div>
            <div className="text-xs font-mono font-semibold text-purple-700 pt-3 border-t border-purple-200">
              Recommend with evidence
            </div>
          </div>

          {/* Card 3: Control */}
          <div className="p-7 rounded-3xl bg-[#ECFDF5] text-[#1D1D1F] flex flex-col justify-between h-72 border border-emerald-200 shadow-sm">
            <div className="space-y-3">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">CONTROL</div>
              <h3 className="text-base sm:text-lg font-bold tracking-tight leading-snug text-emerald-950">
                Deterministic rules <br />
                Human approvals <br />
                Exception routing <br />
                Complete audit trail
              </h3>
            </div>
            <div className="text-xs font-mono font-semibold text-emerald-700 pt-3 border-t border-emerald-200">
              Validate before action
            </div>
          </div>

        </div>
      </section>

      {/* 3. WHY GENERIC AI FAILS (VC MOAT ARGUMENT) */}
      <section className="apple-card-light p-8 sm:p-10 space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
          3. Why Generic LLMs Fail & How Qubere Wins
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
          <div className="p-5 rounded-2xl bg-white border border-black/5 space-y-2">
            <h4 className="font-bold text-rose-600 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              The Hallucination Liability
            </h4>
            <p>
              Generic LLMs rely purely on model memory. In customs compliance, an ungrounded prompt produces hallucinated HTS codes, missed Section 301 surcharges, and invalid PGA disclaimers—exposing importers to massive CBP penalties under 19 U.S.C. § 1484.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-black/5 space-y-2">
            <h4 className="font-bold text-[#0071E3] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Qubere’s Evidence-Backed Architecture
            </h4>
            <p>
              Qubere couples Retrieval-Augmented Generation with deterministic rules engines, knowledge graphs, and governed human oversight. Decisions are grounded in CROSS rulings and original documents before anything is submitted.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE TEAM BEHIND IT (FOUNDER CONVICTION) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-black/5 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight">
            4. Unmatched Domain & Engineering Leadership
          </h2>
          <span className="text-xs font-mono font-bold text-emerald-600">30+ Yrs Category Mastery</span>
        </div>

        <p className="text-xs sm:text-sm text-[#6E6E73] font-medium leading-relaxed max-w-3xl">
          Building enterprise AI for regulated trade requires rare dual mastery: deep customs filing domain authority combined with high-scale AI architecture. That is Qubere's unfair advantage.
        </p>

        {/* Founder Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {founders.map((founder, idx) => (
            <div key={idx} className="apple-card-light p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#1D1D1F]">{founder.name}</h3>
                    <p className="text-xs font-bold text-[#0071E3] mt-0.5">{founder.role}</p>
                  </div>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-black/5 hover:bg-[#0071E3]/10 text-[#6E6E73] hover:text-[#0071E3] transition-colors"
                    aria-label={`${founder.name} LinkedIn`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed font-medium">
                  {founder.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#86868B]">Leadership Track Record</div>
                <div className="flex flex-wrap gap-1.5">
                  {founder.experience.map((item, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-black/5 text-[11px] font-semibold text-[#1D1D1F]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Executive Deck CTA */}
        <div className="apple-card-light p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-[#1D1D1F]">Partner With Qubere</h3>
          <p className="text-xs sm:text-sm text-[#6E6E73] max-w-xl mx-auto leading-relaxed font-medium">
            Review our pitch deck, enterprise customer pilot case studies, and seed fundraising terms with the founding team.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onOpenModal('deck')}
              className="px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Request Investor Pitch Deck</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
